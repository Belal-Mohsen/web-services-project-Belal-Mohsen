import express from 'express';
import bodyParser from 'body-parser';
import { CallGoogleAPI } from './Controls/APIs_Calls.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/APIRequest', async (req, res) => {
    const { address, date, distance } = req.body;
    const simplifiedResponse = await CallGoogleAPI(address, distance);
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
app.get('/skiAPI', (req, res) => {
    res.send({
        "name": "Ski",
        "address": "Address"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

