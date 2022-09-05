var userFormEl = document.querySelector("#user-form");
var citySearchTermEl = document.querySelector("#city-search-term");
var currentWeatherEl = document.querySelector("#current-weather");
var displayCityEl = document.querySelector("#city");
var currentDayEl = document.getElementById("currentDay");


var todaysDate = moment();
currentDayEl.textContent = todaysDate.format("LLLL");

const apiKey = "c6a9bf78cf3b504fe7e8382ca53765c4";

//calling the API function to get the lat and lon values.
var retrieveUsersInput = function (city) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiKey;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
              console.log(data);
                var lat = data[0].lat;
                var lon = data[0].lon;
                console.log(lat, lon);
                displayCityEl.textContent = city;
                return getWeather(lat, lon);
            })
          } else {
            alert("Error: City Not Found");
          }
        });
};
// Retrieve weather; daily and forecast.
var getWeather = function (lat, lon) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
              console.log(data);

            //get current weather first; temp, wind, humid, uv index
                let currentTemp = document.querySelector("#currentTemp");
                currentTemp.innerHTML = data.current.temp;
                console.log(currentTemp);
                let currentWindEl = document.querySelector("#currentWind");
                currentWindEl.innerHTML = data.current.wind_speed;
                let currentHumidityEl = document.querySelector("#currentHumidity");
                currentHumidityEl.innerHTML = data.current.humidity;
                let currentUvIndexEl = document.querySelector("#currentUvIndex");
                currentUvIndexEl.innerHTML = data.current.uvi;
            
            // get forecast - repeat like current weather create divs and create ids
            // var temp1 = document.querySelector("#temp
            // temp1.innerHTML = data.daily[1].
                //return

                displayWeather(data);
            })
          } else {
            alert("Error: City Not Found");
          }
        });
};


var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = citySearchTermEl.value.trim();

    if (cityName) {
        retrieveUsersInput(cityName);
        citySearchTermEl.value = "";
      } else {
        alert("Please enter a valid city");
      }
    console.log(event);
  };

userFormEl.addEventListener("submit", formSubmitHandler);

var displayWeather = function(data) {
    console.log(data);
    currentWeatherEl.textContent = "Todays Weather is...";
  };
