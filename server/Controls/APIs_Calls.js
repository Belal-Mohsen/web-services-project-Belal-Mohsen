import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const GoogleAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const fetchPlaceDetails = async (placeIds) => {
    try {
        const placeDetailsArray = [];
        for (const placeId of placeIds) {
            const response = await axios.get(
                'https://maps.googleapis.com/maps/api/place/details/json',
                {
                    params: {
                        place_id: placeId,
                        fields: 'name,formatted_address,website,photos,rating',
                        key: GoogleAPIKey,
                    },
                }
            );

            if (response.data.status === 'OK') {
                const placeDetails = response.data.result;
                placeDetailsArray.push(placeDetails);
                // console.log('Place Details:', placeDetails);
            } else {
                console.error('Google Places Details API request failed');
            }
        }
        return placeDetailsArray;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

const getLatLongFromPostalCode = async (postalCode) => {
    try {
        const response = await axios.get(
            'https://maps.googleapis.com/maps/api/geocode/json',
            {
                params: {
                    address: postalCode,
                    key: GoogleAPIKey,
                },
            }
        );

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            const lat = location.lat;
            const lng = location.lng;
            return { lat, lng };
        } else {
            console.error('Google Geocoding API request failed');
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
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
        throw new Error('Failed to fetch photo URL');
      }
    //   console.log(response.url);
      return response.url;
    } catch (error) {
      console.error('Error fetching photo URL:', error);
      return null; 
    }
  }

// weatherData = function to call the weather API()


  export const CallGoogleAPI = async (address, distance)=>{
    const locationLatLng = await getLatLongFromPostalCode(address);
    // console.log(locationLatLng);

    if (locationLatLng) {
        const googlePlacesResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
            {
                params: {
                    location: `${locationLatLng.lat},${locationLatLng.lng}`,
                    radius: 300000, // will be replace with distance
                    type: 'resort',
                    keyword: 'ski',
                    key: GoogleAPIKey,
                },
            }
        );
        if (googlePlacesResponse.data.status === 'OK') {
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
              
                  return {
                    name: placeDetail.name,
                    address: placeDetail.formatted_address,
                    website: placeDetail.website,
                    photo: photo,
                    rating: placeDetail.rating,
                    // add weather Data (weatherData.)
                  };
                })
              );

            
            return simplifiedResponse;
        } else {
            console.error('Google Places API request failed');
            return "Google Places API request failed";
            
        }
    } else {
        console.log('Unable to get location from postal code.');
        return "Unable to get location from postal code";
    }
  }