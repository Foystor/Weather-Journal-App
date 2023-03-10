// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});


/* Routes */
// GET route
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route
app.post('/addWeather', (req, res) => {
    const data = req.body;

    projectData = {
        temp: data.temp,
        date: data.date,
        feel: data.feel
    };

    res.send(projectData);
});