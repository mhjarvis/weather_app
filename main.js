/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// api key bb240cca395c22bffedb2a9a6e9daa71

getWeatherData('Huntsville');

// Event Listeners
const cityButton = document.querySelector('.city-button');


cityButton.addEventListener('click', function() {

  let city = document.querySelector('.city-input').value;
  document.querySelector('.city-input').value = '';

  console.log(city);

  getWeatherData(city);
})


// api call
function getWeatherData(city) {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bb240cca395c22bffedb2a9a6e9daa71`, {mode: 'cors'}) 
/*     .then(function(response) {
      console.log(response.json())
    }) */
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      console.log(response.main)
      document.querySelector('.city-name').innerHTML = response.name;
      document.querySelector('.current-temperature').innerHTML = `${response.main.temp} &#xb0;F`;
    })
}


/*
Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.
Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
Set up a simple form that will let users input their location and will fetch the weather info (still just console.log() it).
Display the information on your webpage!
Add any styling you like!
Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.
Push that baby to github and share your solution below!
*/
/******/ })()
;