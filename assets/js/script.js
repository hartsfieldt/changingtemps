var recentSearch = JSON.parse(localStorage.getItem("cityName")) || [];

var userFormEl = document.querySelector("#user-form");
var citySearchTermEl = document.querySelector("#city-search-term");
var currentWeatherEl = document.querySelector("#current-weather");
var displayCityEl = document.querySelector("#city");
var todaysDateEl = document.getElementById("todaysDate");
var searchHistoryContainerEl = document.querySelector("#search-history-container");
var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");




const apiKey = "c6a9bf78cf3b504fe7e8382ca53765c4";

// Created the dates to  list for each weather card.
var datesListed = moment();
todaysDateEl.textContent = datesListed.format("LLLL");
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
    var apiUrl = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
              console.log(data);
                let imageIcon = document.createElement("img");
                imageIcon.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.current.weather[0].icon +"@2x.png");
                displayCityEl.append(imageIcon);

                let weatherIcon1 = document.createElement("img");
                weatherIcon1.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.daily[1].weather[0].icon +"@2x.png");
                icon1.append(weatherIcon1);

                let weatherIcon2 = document.createElement("img");
                weatherIcon2.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.daily[2].weather[0].icon +"@2x.png");
                icon2.append(weatherIcon2);

                let weatherIcon3 = document.createElement("img");
                weatherIcon3.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.daily[3].weather[0].icon +"@2x.png");
                icon3.append(weatherIcon3);

                let weatherIcon4 = document.createElement("img");
                weatherIcon4.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.daily[4].weather[0].icon +"@2x.png");
                icon4.append(weatherIcon4);

                let weatherIcon5 = document.createElement("img");
                weatherIcon5.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.daily[5].weather[0].icon +"@2x.png");
                icon5.append(weatherIcon5);


            //Get current and feature (5day) weather; temp, wind, humid, uv index.
                let currentTemp = document.querySelector("#currentTemp");
                currentTemp.innerHTML = "Temperature: " + data.current.temp + " °F";

                let currentWindEl = document.querySelector("#currentWind");
                currentWindEl.innerHTML = "Wind Speed: " + data.current.wind_speed + " MPH";
                let currentHumidityEl = document.querySelector("#currentHumidity");
                currentHumidityEl.innerHTML = "Humidity: " + data.current.humidity + "%";
                let currentUvIndexEl = document.querySelector("#currentUvIndex");
                var currentUvScore = Math.round(data.current.uvi)
                currentUvIndexEl.innerHTML = "UV Index: " + currentUvScore + " Out of 10";
                if (currentUvScore >= 5 && currentUvScore <= 7) {
                  currentUvIndexEl.classList.add("moderate");
                } else if (currentUvScore <= 4) {
                  currentUvIndexEl.classList.add("favorable");
                } else if (currentUvScore >= 8){
                  currentUvIndexEl.classList.add("severe");
                } else {
                  console.log(currentUvScore);
                };

                let tempOneTempEl = document.querySelector("#tempOne-temp");
                tempOneTempEl.innerHTML = "Temp: " + data.daily[1].temp.day + " °F";
                let tempOneWindEl = document.querySelector("#tempOne-wind");
                tempOneWindEl.innerHTML = "Wind: " + data.daily[1].wind_speed  + " MPH";
                let tempOneHumidityEl = document.querySelector("#tempOne-humidity");
                tempOneHumidityEl.innerHTML = "Humidity: " + data.daily[1].humidity + "%";

                let tempTwoTempEl = document.querySelector("#tempTwo-temp");
                tempTwoTempEl.innerHTML = "Temp: " + data.daily[2].temp.day + " °F";
                let tempTwoWindEl = document.querySelector("#tempTwo-wind");
                tempTwoWindEl.innerHTML = "Wind: " + data.daily[2].wind_speed  + " MPH";
                let tempTwoHumidityEl = document.querySelector("#tempTwo-humidity");
                tempTwoHumidityEl.innerHTML = "Humidity: " + data.daily[2].humidity + "%";

                let tempThreeTempEl = document.querySelector("#tempThree-temp");
                tempThreeTempEl.innerHTML = "Temp: " + data.daily[3].temp.day + " °F";
                let tempThreeWindEl = document.querySelector("#tempThree-wind");
                tempThreeWindEl.innerHTML = "Wind: " + data.daily[3].wind_speed  + " MPH";
                let tempThreeHumidityEl = document.querySelector("#tempThree-humidity");
                tempThreeHumidityEl.innerHTML = "Humidity: " + data.daily[3].humidity + "%";

                let tempFourTempEl = document.querySelector("#tempFour-temp");
                tempFourTempEl.innerHTML = "Temp: " + data.daily[4].temp.day + " °F";
                let tempFourWindEl = document.querySelector("#tempFour-wind");
                tempFourWindEl.innerHTML = "Wind: " + data.daily[4].wind_speed  + " MPH";
                let tempFourHumidityEl = document.querySelector("#tempFour-humidity");
                tempFourHumidityEl.innerHTML = "Humidity: " + data.daily[4].humidity + "%";

                let tempFiveTempEl = document.querySelector("#tempFive-temp");
                tempFiveTempEl.innerHTML = "Temp: " + data.daily[5].temp.day + " °F";
                let tempFiveWindEl = document.querySelector("#tempFive-wind");
                tempFiveWindEl.innerHTML = "Wind: " + data.daily[5].wind_speed  + " MPH";
                let tempFiveHumidityEl = document.querySelector("#tempFive-humidity");
                tempFiveHumidityEl.innerHTML = "Humidity: " + data.daily[5].humidity + "%";

            })
          } else {
            alert("Error: City Not Found");
          }
        });
};

var formSubmitHandler = function(event) {
    searchHistoryContainerEl.innerHTML = "";
    event.preventDefault();
    var cityName = citySearchTermEl.value.trim();
    console.log(recentSearch)
    recentSearch.unshift(cityName);
    localStorage.setItem("cityName", JSON.stringify(recentSearch));

    if (cityName) {
        retrieveUsersInput(cityName);
        citySearchTermEl.value = "";
      } else {
        alert("Please enter a valid city");
      }
    for (let i = 0; i < recentSearch.length; i++) {
     console.log(recentSearch[i]);
     let btnEl = document.createElement("button")
     btnEl.classList = "btn btn-success mb-3";
     btnEl.textContent = recentSearch[i]
     searchHistoryContainerEl.appendChild(btnEl);
    };
    console.log(event);
  };

userFormEl.addEventListener("submit", formSubmitHandler);

  for (let i = 0; i < recentSearch.length; i++) {
    console.log('from last for loop>>>', recentSearch[i]);
    let btnEl = document.createElement("button")
    btnEl.classList = "btn btn-success mb-3";
    btnEl.textContent = recentSearch[i]
    searchHistoryContainerEl.appendChild(btnEl);
   };

   document.getElementById('search-history-container').addEventListener("click", function () {
      var isButton = event.target.nodeName === 'BUTTON';
      if (!isButton) {
        return;
      }
        retrieveUsersInput(event.target.textContent);
        console.log(event.target.textContent)
   });
