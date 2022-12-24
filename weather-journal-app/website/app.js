/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=028f1a9d317578516fd3770eef8e37e7&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


/* Events */
// Get zipcode
document.querySelector('#generate').addEventListener('click', () => {
    const zipCode = document.querySelector('#zip').value;
    getWeather(baseUrl, zipCode, apiKey);
});


/* Requests */
// GET request to the OpenWeatherMap API
const getWeather = async (baseUrl, zipCode, apiKey) => {
    const res = await fetch(baseUrl + zipCode + apiKey);

    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log('error', error);
    }
};