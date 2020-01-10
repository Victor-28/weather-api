


let cityName = "";


document.getElementById("getWeatherForecast").addEventListener("click", function() {
    cityName = document.getElementById("city").value;

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},be&appid=01951a6e2ef5df48e90ed4c64b1234fc`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data);


        });
});

//fetch(http:localhost)


/*
var r =json.parse (weather.response);
var weather ="current location" + r.current observation display_location.full +"<br/>";
var temp= r.current_observation.temprature_string+"<br/>";
var wind= r.current_observation.wind_string+"<br/>"

document.getElementById("weather").innerHTML=weather;
document.getElementById("temp").innerHTML=temp;
document.getElementById("wind").innerHTML=wind;
*/


