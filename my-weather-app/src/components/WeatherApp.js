import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import './WeatherApp.css'; // Импорт стилей

const WeatherApp = () => {
  return (
    <div className="container">
      <h1>Weather App</h1>
      <WeatherForm />
      <WeatherInfo />
    </div>
  );
};

export default WeatherApp;
