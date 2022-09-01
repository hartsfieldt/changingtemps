var APIKey = "1f2f85ceec6572234552e9c8ad7aaae0";

var retrieveUsersInput = function (city) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}";

    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
        });
      });
};

retrieveUsersInput();

// var callAPI (onclick,API call, search city, return, display and store data.)

// create variable for; accepting user input, using the API key search and retrieve data, return the information back to the website and load, then store.
// presented with current and future conditions




// When viewing the weather conditions for the city I am presented with: city name, the date, an icon representing the weather condition are favorable, moderate, severe.


// 5 day forecast; Display the date, icon with the weather conditions, temperature, the wind speed, and humidity.




// stored cities: if I click a previously visited city, the current weather conditions will be displayed.