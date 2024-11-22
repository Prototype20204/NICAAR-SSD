var d = new Date();
var n = d.toLocaleDateString();
document.getElementById("date").innerHTML = n;

function getWeather( cityID ) {
  var key = '535f8a50b4bc24608c72fcde2aecb52b';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) 
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  getWeather( 6167865 );
}

function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 

  document.getElementById('cityName').innerHTML = d.name;
  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
  document.getElementById('icon').src = `http://openweathermap.org/img/w/${d.weather[0].icon}.png`;
 }
<div class="weather">
  <div id="date"></div>
  <div id="cityName"></div>
  <img src="" id="icon">
  <div id="temp"></div>
  <div id="description"></div>
</div>
