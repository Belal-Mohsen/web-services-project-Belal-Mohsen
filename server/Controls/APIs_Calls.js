import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const GoogleAPIKey = "AIzaSyBq_hYo4JWsz1s6HglTs1doKeGdAhHlt3U";
const WeatherAPIKey = 'QE5QAQQ4CZCC7WC5SACQTEHNQ';

const fetchPlaceDetails = async (placeIds) => {
  try {
    const placeDetailsArray = [];
    for (const placeId of placeIds) {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/place/details/json",
        {
          params: {
            place_id: placeId,
            fields: "name,formatted_address,website,photos,rating,address_components",
            key: GoogleAPIKey,
          },
        }
      );

      if (response.data.status === "OK") {
        const placeDetails = response.data.result;
        console.log(placeDetails);
        placeDetailsArray.push(placeDetails);
        // console.log('Place Details:', placeDetails);
      } else {
        console.error("Google Places Details API request failed");
      }
    }
    return placeDetailsArray;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const getLatLongFromPostalCode = async (postalCode) => {
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: postalCode,
          key: GoogleAPIKey,
        },
      }
    );

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      const lat = location.lat;
      const lng = location.lng;
      return { lat, lng };
    } else {
      console.error("Google Geocoding API request failed");
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

async function getPhotoUrl(photoReference) {
  const apiKey = GoogleAPIKey; // Replace with your Google API key
  const maxWidth = 800;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch photo URL");
    }
    //   console.log(response.url);
    return response.url;
  } catch (error) {
    console.error("Error fetching photo URL:", error);
    return null;
  }
}

// weatherData = function to call the weather API()
const fetchWeatherData = async (postalCode) => {
  const apiKey = WeatherAPIKey;
  const unitGroup = 'metric';
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${postalCode}?unitGroup=${unitGroup}&key=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    return null;
  }
};

export const CallGoogleAPI = async (address, date, distance) => {
  const locationLatLng = await getLatLongFromPostalCode(address);
  // console.log(locationLatLng);

  if (locationLatLng) {
    const googlePlacesResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
      {
        params: {
          location: `${locationLatLng.lat},${locationLatLng.lng}`,
          radius: 300000, // will be replace with distance
          type: "resort", //point_of_interest
          keyword: "ski", //skiing
          key: GoogleAPIKey,
        },
      }
    );
    if (googlePlacesResponse.data.status === "OK") {
      const places = googlePlacesResponse.data.results;
      const placeIds = places.map((place) => place.place_id);

      const placeDetails = await fetchPlaceDetails(placeIds);

      // console.log('Place Details:', placeDetails);

      //  const simplifiedResponse =   placeDetails.map((placeDetail) => ({
      //     name: placeDetail.name,
      //     address: placeDetail.formatted_address,
      //     website: placeDetail.website,
      //     photo: placeDetail.photos ? await getPhotoUrl(placeDetail.photos[0].photo_reference) : null,
      //     rating: placeDetail.rating,
      //     // add weather Data (weatherData.)

      // }));
      const simplifiedResponse = await Promise.all(
        placeDetails.map(async (placeDetail) => {
          const photo =
            placeDetail.photos && placeDetail.photos[0]
              ? await getPhotoUrl(placeDetail.photos[0].photo_reference)
              : null;
          
          const postalCodeComponent = placeDetail.address_components.find(component => 
            component.types.includes('postal_code')
          );
          const postalCode = postalCodeComponent ? postalCodeComponent.long_name : null;
          const weatherData = await fetchWeatherData(postalCode);

          const daysFromNow = getDaysFromToday(date) >= 0 ? getDaysFromToday(date) : 0;
          
          const dailyWeatherData = weatherData.days[daysFromNow];
          
          return {
            name: placeDetail.name,
            address: placeDetail.formatted_address,
            website: placeDetail.website,
            photo: photo,
            rating: placeDetail.rating,
            temp: dailyWeatherData.temp,
            wForecast: dailyWeatherData.conditions,
            wind: dailyWeatherData.windspeed,
            sDepth: dailyWeatherData.snowdepth,
          };
        })
      );

      // Filter out places based on keywords
      const filteredResponse = simplifiedResponse.filter((place) => {
        const name = place.name.toLowerCase();

        const keywordsToExclude = [
          "oberson",
          "poubelle",
          "shop",
          "town",
          "school",
          "concordia",
          "benoit",
          "québec",
        ];

        // Check to see if excluded keywords are in the name
        const hasExcludedKeyword = keywordsToExclude.some((keyword) =>
          name.includes(keyword)
        );

        // Include only places that do not have excluded keywords in name
        return !hasExcludedKeyword;
      });

      return filteredResponse;

      //return simplifiedResponse;
    } else {
      console.error("Google Places API request failed");
      return "Google Places API request failed";
    }
  } else {
    console.log("Unable to get location from postal code.");
    return "Unable to get location from postal code";
  }
};

function getDaysFromToday(targetDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(targetDate);
  const diffInMs = date - today;
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
}
