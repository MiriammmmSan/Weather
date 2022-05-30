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
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Wether in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°С";
        document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
        document.querySelector(".speed").innerText = "Wind speed " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
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