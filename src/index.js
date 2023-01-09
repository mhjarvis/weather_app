// api key bb240cca395c22bffedb2a9a6e9daa71

getCurrentWeather('Huntsville');
getForcast('Huntsville');

// Event Listeners
const cityButton = document.querySelector('.city-button');

cityButton.addEventListener('click', function() {

  let city = document.querySelector('.city-input').value;
  document.querySelector('.city-input').value = '';

  console.log(city);

  getCurrentWeather(city);
})



function getForcast(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=bb240cca395c22bffedb2a9a6e9daa71`, {mode: 'cors'}) 
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      forcast(response);
      console.log(response);
    })
}

// api call
function getCurrentWeather(city) {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bb240cca395c22bffedb2a9a6e9daa71`, {mode: 'cors'}) 
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      console.log(response)
      document.querySelector('.city-name').innerHTML = `${response.name} Weather Status`;
      document.querySelector('.current-temperature').innerHTML = `${convertToFarenheit(response.main.temp)} &#xb0;F`;
      document.querySelector('.feels-like').innerHTML = `feels like: ${convertToFarenheit(response.main.feels_like)}&#xb0;F`;
      document.querySelector('.cloud-info').innerHTML = response.weather[0].description;
      document.querySelector('.humidity').innerHTML = `humidity: ${response.main.humidity}%`;
    })
}

// Kelvin to Farenheit conversion
function convertToFarenheit(temp) {
  temp = (temp - 273.15) * 9;
  temp = (temp / 5) + 32;
  return parseInt(temp);
}

/// Populate forcast

function forcast(data) {
  for(let i = 0; i < 6; i++) {

    const container = document.querySelector(`.f${i}`);

    // Set forcast time range
    const time = document.createElement('p');
    let newTime = new Date(data.list[i].dt * 1000); 
    time.classList.add('.time');
    time.innerHTML = `${newTime.getHours()}:00 - ${newTime.getHours() + 3}:00`
    container.appendChild(time);

    // Set temperature forcast
    const temp = document.createElement('p');
    temp.classList.add('.forcast-temp');
    temp.innerHTML = `${convertToFarenheit(data.list[i].main.temp)}&#xb0;F`;
    container.appendChild(temp);

    // Set cloud reading
    const cloud = document.createElement('p');
    cloud.classList.add('.cloud-cover');
    cloud.innerHTML = `${data.list[i].weather[0].description}`;
    container.appendChild(cloud);

  }
} 