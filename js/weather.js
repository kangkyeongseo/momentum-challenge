const tempBox = document.querySelector(".weather-container__temp");
const weatherBox = document.querySelector(".weather-container__weather");
const cityBox = document.querySelector(".weather-container__city");

function successGetPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "8b46d1d2fb5be43ae110f89a6e57cab0";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = Math.round(data.main.temp);
      const weather = data.weather[0].main;
      const city = data.name;

      tempBox.innerText = `${temp}°C`;
      weatherBox.innerText = weather;
      cityBox.innerHTML = city;
    });
}

function errorGetPosition() {
  console.log("Sorry, no position available.");
  weatherBox.innerText = "Sorry, no position available.";
}

navigator.geolocation.getCurrentPosition(successGetPosition, errorGetPosition);
