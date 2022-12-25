/* Global Variables */
const serverUrl = 'http://localhost:3000';
const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=028f1a9d317578516fd3770eef8e37e7&units=imperial';


/* Events */
function generateEntry() {
    const code = document.querySelector('#zip').value;
    const feel = document.querySelector('#feelings').value;
    // create a new date instance dynamically
    const d = new Date();
    const newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;

    getWeather(apiBaseUrl, code, apiKey)
    .then(data => {
        postData(`${serverUrl}/addWeather`, {
            temp: data.main.temp,
            date: newDate,
            feel: feel
        })
        .then(() => updateUI());
    });
}

document.querySelector('#generate').addEventListener('click', generateEntry);


/* Requests */
// GET request to the OpenWeatherMap API
const getWeather = async (baseUrl, zipCode, key) => {
    const res = await fetch(baseUrl + zipCode + key);

    try {
        const data = await res.json();
        console.log('Data from OpenWeatherMap', data);
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
        console.log('projectData after POST', data);
        return newData;
    } catch(error) {
        console.log('error', error);
    }
};

// Retrieve data from the app and updates the UI dynamically
const updateUI = async () => {
    const res = await fetch(`${serverUrl}/all`);

    try {
        const data = await res.json();
        console.log('Data for UI update', data);
        // update UI
        document.querySelector('#date').textContent = `Date: ${data.date}`;
        document.querySelector('#temp').textContent = `Temperature: ${Math.round(data.temp)} K`;
        document.querySelector('#content').textContent = `Feelings: ${data.feel}`;
    } catch(error) {
        console.log('error', error);
    }
};