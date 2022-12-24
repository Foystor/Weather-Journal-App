/* Global Variables */
const serverUrl = 'http://localhost:3000';
const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=028f1a9d317578516fd3770eef8e37e7&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


/* Events */
// Get zipcode
document.querySelector('#generate').addEventListener('click', () => {
    const code = document.querySelector('#zip').value;
    const feeling = document.querySelector('#feelings').value;

    getWeather(apiBaseUrl, code, apiKey)
    .then(function(data) {
        const temp = data.main.temp;

        postData(`${serverUrl}/addWeather`, {temp: temp, date: newDate, feeling: feeling});
    });
});


/* Requests */
// GET request to the OpenWeatherMap API
const getWeather = async (baseUrl, zipCode, key) => {
    const res = await fetch(baseUrl + zipCode + key);

    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log('error', error);
    }
};

// POST request to add the API data, as well as data entered by the user, to the app
const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await res.json();
        return newData;
    } catch(error) {
        console.log('error', error);
    }
};