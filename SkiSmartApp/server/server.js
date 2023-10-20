import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'
import { CallGoogleAPI } from './Controls/APIs_Calls.js';

const app = express();
const PORT = 5500;
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
app.get('/skiAPI', (req, res) => {
    res.send({
        "name": "Ski",
        "address": "Address"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

