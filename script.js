
let weather = {
    "apiKey": "79b07a4c9f91b97f0ce0de14c17c3947",
    fetchWeather: function (city) {
        fetch(
         "https://api.openweathermap.org/data/2.5/weather?q=" 
         + city 
         + "&units=metric&appid="
         + this.apiKey
         )
        .then((response => response.json()))
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { description, main } = data.weather[0];
        const { name } = data;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Wether in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°С";
        document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
        document.querySelector(".speed").innerText = "Wind speed " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        if(main === "Clear"){
            document.body.style.background = 
        'url(img/clear_sky.jpeg)'; 
        }if(main == "Clouds"){
            document.body.style.background = 
        'url(img/broken_clouds.jpeg)';
        }if(main === "Rain"){
            document.body.style.background = 
        'url(img/shower_rain.jpeg))';
        }if(main === "Drizzle"){
            document.body.style.background = 
        'url(img/drizzle.jpeg)';
        }if(main === "Thunderstorm"){
            document.body.style.background = 
        'url(img/thunderstorm.jpeg)';
        }if(main === "Snow"){
            document.body.style.background = 
        'url(img/snow.jpeg)';
        }if(main === "Mist"){
            document.body.style.background = 
        'url(img/mist.jpeg)';
        }if(main === "Smoke"){
            document.body.style.background = 
        'url(img/smoke.jpeg)';
        }if(main === "Haze"){
            document.body.style.background = 
        'url(img/haze.jpeg)';
        }if(main === "Dust"){
        document.body.style.background = 
        'url(img/dust.jpeg)';
        }if(main === "Fog"){
            document.body.style.background = 
        'url(img/fog.jpeg)';
        }if(main === "Sand"){
            document.body.style.background = 
        'url(img/sand.jpeg)';
        }if(main === "Squall"){
            document.body.style.background = 
            'url(img/squall.jpeg)';
        }if(main === "Tornado"){
            document.body.style.background = 
            'url(img/tornado.jpeg)';
        }
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    } 
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("tokyo");