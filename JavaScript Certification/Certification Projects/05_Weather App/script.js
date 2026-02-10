const getWeatherBtn = document.querySelector("#get-weather-btn");
const cityDropdown = document.querySelector("#city-dropdown");
const weatherInfo = document.querySelector("#weather-info");
const cityName = document.querySelector("#location");
const temp = document.querySelector("#main-temperature");
const type = document.querySelector("#weather-main");
const icon = document.querySelector("#weather-icon");
const humidity = document.querySelector("#humidity");
const feelsLike = document.querySelector("#feels-like");
const windSpeed = document.querySelector("#wind");
const gust = document.querySelector("#wind-gust");
const windDir = document.querySelector("#compass-arrow");

let isWeatherShowing = false;

const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data;
  } catch (error) {
    console.log(error);
    alert("Something went wrong, please try again later");
  }
};

const showWeather = async (city) => {
  const weatherData = await getWeather(city);
  if (!weatherData) return;
  const { main, weather, wind } = weatherData;

  cityName.textContent = weatherData.name ? weatherData.name : "N/A";
  temp.textContent = main.temp ? `${main.temp}°C` : "N/A";
  type.textContent = weather[0].main ? weather[0].main : "N/A";
  icon.src = weather[0].icon ? weather[0].icon : "N/A";
  humidity.textContent = main.humidity ? `${main.humidity}%` : "N/A";
  feelsLike.textContent = main.feels_like ? `${main.feels_like}°C` : "N/A";
  windSpeed.textContent = wind.speed ? `${wind.speed} m/s` : "N/A";
  gust.textContent = wind.gust ? `${wind.gust} m/s` : "N/A";
  windDir.style.transform = `translate(-50%, -50%) rotate(${wind.deg}deg)`;

  if (!isWeatherShowing) {
    weatherInfo.classList.toggle("hidden");
    isWeatherShowing = true;
  }
};

const handleBtnClick = () => {
  const city = cityDropdown.value;
  if (!city) return;

  showWeather(city);
};

getWeatherBtn.addEventListener("click", handleBtnClick);
