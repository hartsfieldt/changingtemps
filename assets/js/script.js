var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + "1f2f85ceec6572234552e9c8ad7aaae0";

//var listEl = document.getElementById("myData");
var APIKEY = "1f2f85ceec6572234552e9c8ad7aaae0";


fetch(apiUrl)
.then(function(response) {
    if (response.ok) {
        return response.json()
        .then(function(data) {

            var docArray = data.drinks;
            for (var i = 0; i < docArray.length; i ++) {
                var listEl = document.createElement('li')
                listItem.textContent = docArray[i].strdrink;
                listEl.appendChild(listItem);
            }
        });
    }
    else {
        alert(error + "something went wrong. Please try again later.");
    }
})
.catch(function(error) {
    alert(error + "something went wrong. Please try again later.");
});


//https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys resource blog 

//var city; -Construct a Query URL to Make the API Call
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}