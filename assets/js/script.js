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

