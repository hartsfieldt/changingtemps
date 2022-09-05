var userFormEl = document.querySelector("#user-form");
var citySearchTermEl = document.querySelector("#city-search-term");
var currentWeatherEl = document.querySelector("#current-weather");
var displayCityEl = document.querySelector("#city");
var currentDayEl = document.getElementById("currentDay");
var todaysDateEl = document.getElementById("todaysDate");
var searchFormHistory = document.getElementById("recent-search");

recentSearch = [""];

const apiKey = "c6a9bf78cf3b504fe7e8382ca53765c4";

// Created the dates to  list for each weather card. 
var todaysDate = moment();
currentDayEl.textContent = todaysDate.format("LLLL");

var datesListed = moment();
todaysDateEl.textContent = datesListed.format("ll");
let tomorrow = document.querySelector("#tempOne-day");
tomorrow.textContent = moment().add(1, "days").format("ll");
let tomorrow2 = document.querySelector("#tempTwo-day");
tomorrow2.textContent = moment().add(2, "days").format("ll");
let tomorrow3 = document.querySelector("#tempThree-day");
tomorrow3.textContent = moment().add(3, "days").format("ll");
let tomorrow4 = document.querySelector('#tempFour-day');
tomorrow4.textContent = moment().add(4, "days").format("ll");
let tomorrow5 = document.querySelector('#tempFive-day');
tomorrow5.textContent = moment().add(5, "days").format("ll");


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
                let currentWindEl = document.querySelector("#currentWind");
                currentWindEl.innerHTML = data.current.wind_speed;
                let currentHumidityEl = document.querySelector("#currentHumidity");
                currentHumidityEl.innerHTML = data.current.humidity;
                let currentUvIndexEl = document.querySelector("#currentUvIndex");
                currentUvIndexEl.innerHTML = data.current.uvi;

            // get id=fiveday-weather-cards
                let tempOneTempEl = document.querySelector("#tempOne-temp");
                tempOneTempEl.innerHTML = data.daily[2];
                let tempOneWindEl = document.querySelector("#tempOne-wind");
                tempOneWindEl.innerHTML = data.daily[3];
                let tempOneHumidityEl = document.querySelector("#tempOne-humidity");
                tempOneHumidityEl.innerHTML = data.daily[4]

                let tempTwoTempEl = document.querySelector("#tempTwo-temp");
                tempTwoTempEl.innerHTML = data.daily[2];
                let tempTwoWindEl = document.querySelector("#tempTwo-wind");
                tempTwoWindEl.innerHTML = data.daily[3];
                let tempTwoHumidityEl = document.querySelector("#tempTwo-humidity");
                tempTwoHumidityEl.innerHTML = data.daily[4]

                let tempThreeTempEl = document.querySelector("#tempThree-temp");
                tempThreeTempEl.innerHTML = data.daily[2];
                let tempThreeWindEl = document.querySelector("#tempThree-wind");
                tempThreeWindEl.innerHTML = data.daily[3];
                let tempThreeHumidityEl = document.querySelector("#tempThree-humidity");
                tempThreeHumidityEl.innerHTML = data.daily[4]

                let tempFourTempEl = document.querySelector("#tempFour-temp");
                tempFourTempEl.innerHTML = data.daily[2];
                let tempFourWindEl = document.querySelector("#tempFour-wind");
                tempFourWindEl.innerHTML = data.daily[3];
                let tempFourHumidityEl = document.querySelector("#tempFour-humidity");
                tempFourHumidityEl.innerHTML = data.daily[4]

                let tempFiveTempEl = document.querySelector("#tempFive-temp");
                tempFiveTempEl.innerHTML = data.daily[2];
                let tempFiveWindEl = document.querySelector("#tempFive-wind");
                tempFiveWindEl.innerHTML = data.daily[3];
                let tempFiveHumidityEl = document.querySelector("#tempFive-humidity");
                tempFiveHumidityEl.innerHTML = data.daily[4]

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
  };

var searchHistoryLog = function() {
}