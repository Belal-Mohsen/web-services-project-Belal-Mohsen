import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'
import { CallGoogleAPI, fetchWeatherData } from './Controls/APIs_Calls.js';
import cities_data from './Controls/Data_Calls.js';

const app = express();
const PORT = 5000;
const DISTANCE_API = 150;
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");
app.use(express.static(buildPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/APIRequest', async (req, res) => {
    const { address, date, distance } = req.body;
    const simplifiedResponse = await CallGoogleAPI(address, date, distance);
    console.log(simplifiedResponse);
    if(simplifiedResponse === 'Google Places API request failed') {
        res.status(500).json({ error: 'Google Places API request failed' });
    }
    else if (simplifiedResponse === 'Unable to get location from postal code'){
        res.status(500).json({ error: 'Unable to get location from postal code' });
    } 
    else res.json({ data: simplifiedResponse });
});


// Our API
// we will change it later to return data from our DB
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

  app.get('/skicities', async (req, res) => {
    // skicities?city=CityName&date=15-10-2023
    try {
        const cityName = req.query.city;
        const date = req.query.date; 
        

        if (!cityName || !date) {
            return res.status(400).json({ error: 'City name and date are required' });
        }

        let cityPostal = cities_data.cities[cityName] || 'City not found';
        if(cityPostal == 'City not found'){
            return res.status(400).json({ error: 'City not found' });
        }

        const skiCitiesData = await CallGoogleAPI(cityPostal, date, DISTANCE_API);

        const weatherPromises = skiCitiesData.map(async (cityData) => {
            const postalCode = cityData.postalCode; 
            const weatherResponse = await fetchWeatherData(postalCode, date); 
            return {
                cityData: cityData,
                weatherData: weatherResponse
            };
        });

        const combinedData = await Promise.all(weatherPromises);

        res.json(combinedData);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/weather/:postalCode', async (req, res) => {
    const { postalCode } = req.params;
    const { date } = req.query;
    try {
        const weatherData= await fetchWeatherData(postalCode, date);
        res.json(weatherData);
    } catch(err) {
        res.status(500).send(err.message);
    }
});