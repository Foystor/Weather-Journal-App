# Weather Journal App

Real-world project from [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) at Udacity.

An asynchronous web app that combines data from the OpenWeatherMap API and client side (browser) HTML forms to dynamically record a weather journal for users.

For this project, we will be writing most of our code in two files: `server.js` and `website/app.js`.

## Demo

https://user-images.githubusercontent.com/74621252/233825710-c250cc64-feee-404d-ad5a-28230e0ba7e4.mov

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
