const API_KEY = 'your_api_key'; // Замените 'your_api_key' на ваш ключ API

const getWeather = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('City not found or API error');
  }
  const data = await response.json();
  return data;
};

const getForecast = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('City not found or API error');
  }
  const data = await response.json();
  return data;
};

export { getWeather, getForecast };