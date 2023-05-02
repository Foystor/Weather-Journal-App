# Weather Journal App

Real-world project from [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) at Udacity.

An asynchronous web app that combines data from the OpenWeatherMap API and client side (browser) HTML forms to dynamically record a weather journal for users.

For this project, we will be writing most of our code in two files: `server.js` and `website/app.js`.

## Demo

https://user-images.githubusercontent.com/74621252/235630706-9fc41835-a875-459d-a0b4-6c5e6008751f.mov

## Technologies

- Node.js
- Express
- Async Javascript
  - Async Fetch
  - Async Promises
- HTTP Requests & Routes

## Usage

Make sure [Node.js](https://nodejs.org/en/download) is installed and in your PATH.

1. In the `root` directory:

```
$ git clone https://github.com/Foystor/Weather-Journal-App.git
```

2. Get to the `weather-journal-app` directory:

```
$ cd weather-journal-app
```

3. Install packages with NPM:

```
$ npm install express cors body-parser
```

4. Start the server:

```
$ node server.js
```

5. Navigate to http://localhost:8000/

## Built With

- [cors](https://github.com/expressjs/cors) - For cross origin allowance.
- [body-parser](https://github.com/expressjs/body-parser) - Express version 4 and above require this extra middle-ware layer to handle a POST request. It used to be an internal part of the Express framework, but now we have to install it separately.

## License

[MIT License](LICENSE)
