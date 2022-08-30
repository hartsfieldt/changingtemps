var apiUrl = "1f2f85ceec6572234552e9c8ad7aaae0";

var listEl = document.getElementById("myData");

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