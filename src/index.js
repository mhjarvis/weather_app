//api key bb240cca395c22bffedb2a9a6e9daa71
// Event Listeners
const cityButton = document.querySelector('.city-button');


cityButton.addEventListener('click', function() {

  let city = document.querySelector('.city-input').value;
  document.querySelector('.city-input').value = '';

  console.log(city);
})




/*
Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.
Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
Set up a simple form that will let users input their location and will fetch the weather info (still just console.log() it).
Display the information on your webpage!
Add any styling you like!
Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.
Push that baby to github and share your solution below!
*/