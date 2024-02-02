import React from 'react';
import './WeatherInfo.css'; // Импорт стилей

const WeatherInfo = ({ weatherData, forecastData, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData || !forecastData) {
    return null;
  }

  const { name, sys, main, wind, weather } = weatherData;

  return (
    <div>
      {/* ... */}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default WeatherInfo;
