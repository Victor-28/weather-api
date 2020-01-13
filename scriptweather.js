


let cityName = "";


document.getElementById("getWeatherForecast").addEventListener("click", function() {
    cityName = document.getElementById("city").value;

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=01951a6e2ef5df48e90ed4c64b1234fc`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            console.log(data.list);

            var unixTimestamp = data.list[0].dt;
            var date = new Date(unixTimestamp * 1000);
            var day = date.getDate();
            console.log(day);

        })

});




                function drawWeather( d ) {
                    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
                    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);

                    var description = d.weather[0].description;
                    document.getElementById('description').innerHTML = d.weather[0].description;
                    document.getElementById('temp').innerHTML = celcius + '&deg;';
                    document.getElementById('location').innerHTML = d.name;


                    document.getElementById("target").appendChild(temp);


        }
let listD0 = [], listD1 = [], listD2 = [], listD3 = [], listD4 = [];

data.list.forEach(function (list) {

    let DateOfTheList = new Date(list.dt_txt).toDateString();

    switch (DateOfTheList) {
        case date[0]:
            listD0.push(list);
            break;
        case date[1]:
            listD1.push(list);
            break;
        case date[2]:
            listD2.push(list);
            break;
        case date[3]:
            listD3.push(list);
            break;
        case date[4]:
            listD4.push(list);
            break;
        default:
            return;
    }