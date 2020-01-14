


let cityName = "";


document.getElementById("getWeatherForecast").addEventListener("click", function() {
    cityName = document.getElementById("city").value;
    console.log(cityName);

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=01951a6e2ef5df48e90ed4c64b1234fc&units=metric`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            //console.log(data)
            //console.log(data.list);
            //console.log(data.list[0].main.temp)
            //console.log(data.list[17].weather[0].main)
            //var unixTimestamp = data.list[0].dt;
            //var date = new Date(unixTimestamp * 1000);
            //var day = date.getDate();
            //console.log(day);
            let temp = [];
            for (let i = 0; i <40; i++) {
                temp.push(data.list[i].main.temp);

            }

            console.log(temp);
           var day1temp= temp.slice(0,8);
           var day2temp= temp.slice(8,16);
           var day3temp= temp.slice(16,24);
           var day4temp= temp.slice(24,32);
           var day5temp= temp.slice(32,40);
            console.log(day1temp);
            let arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
            console.log(Math.round(arrAvg(day5temp)));


            document.getElementById("tempday1").innerHTML=  "Today " +Math.round(arrAvg(day1temp)) +"° celcius";
            document.getElementById("tempday2").innerHTML=  "Tomorrow " +Math.round(arrAvg(day2temp)) +"° celcius";
            document.getElementById("tempday3").innerHTML=  "Day after Tomorrow "+Math.round(arrAvg(day3temp)) +"° celcius";
            document.getElementById("tempday4").innerHTML=  "Next Four days "+Math.round(arrAvg(day4temp)) +"° celcius";
            document.getElementById("tempday4").innerHTML=  "Next Five days "+Math.round(arrAvg(day5temp)) +"° celcius"

        })
});

/* function drawWeather( d ) {
                    var celcius = Math.round(parseFloat(d.main.temp));
                    var fahrenheit = Math.round(((parseFloat(d.main.temp))*1.8)+32);
                    var description = d.weather[0].description;
                    document.getElementById('description').innerHTML = d.weather[0].description;
                    document.getElementById('temp').innerHTML = celcius + '&deg;';
                    document.getElementById('location').innerHTML = d.name;
                    document.getElementById("target").appendChild(temp);
        }

        //code explanation
/*I worked with getting data out of the list in weather which contain 0-40
I did the same in the main also
Using for loop (let i = 0; i <40; i++)

let arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length    i got this from google to get the average
doing this 5 times*/
