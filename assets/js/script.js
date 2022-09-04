var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#city");
var todaysWeather = document.querySelector("#todays-weather");
var citySearchTerm = document.querySelector("#city-search-term");
var currentDay = document.getElementById("currentDay");

var todaysDate = moment();
currentDay.textContent = todaysDate.format("LLLL");

const apiKey = "1f2f85ceec6572234552e9c8ad7aaae0";


var retrieveUsersInput = function (city) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiKey;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
              console.log(data);
                displayCity(data, city);
            })
          } else {
            alert("Error: City Not Found");
          }
        });
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = nameInputEl.value.trim();

    if (cityName) {
        retrieveUsersInput(cityName);
        nameInputEl.value = "";
      } else {
        alert("Please enter a valid city");
      }
    console.log(event);
  };

userFormEl.addEventListener("submit", formSubmitHandler);

var displayWeather = function(city, searchTerm) {
    console.log(city);
    console.log(searchTerm);
    todaysWeather.textContent = "";
    citySearchTerm.textContent = searchTerm;
  };




// var callAPI (onclick,API call, search city, return, display and store data.)
// create variable for; accepting user input, using the API key search and retrieve data, return the information back to the website and load, then store.
// presented with current and future conditions
// When viewing the weather conditions for the city I am presented with: city name, the date, an icon representing the weather condition are favorable, moderate, severe.
// 5 day forecast; Display the date, icon with the weather conditions, temperature, the wind speed, and humidity.
// stored cities: if I click a previously visited city, the current weather conditions will be displayed.