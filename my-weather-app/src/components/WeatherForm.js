import React, { useState } from 'react';
import { getWeather, getForecast } from '../utils/api';
import './WeatherForm.css'; // Импорт стилей

const WeatherForm = ({ onWeatherData, onError }) => {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const currentWeather = await getWeather(city, unit);
      const forecast = await getForecast(city, unit);
      onWeatherData(currentWeather, forecast);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      setError('City not found or API error');
      onError('City not found or API error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... */}
      {error && <div>Error: {error}</div>}
    </form>
  );
};

export default WeatherForm;
