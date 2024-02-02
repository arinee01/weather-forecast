import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherInfo from '../components/WeatherInfo';

test('WeatherInfo renders correctly', () => {
  const weatherData = {
    name: 'London',
    sys: { country: 'GB' },
    main: { temp: 20, humidity: 70 },
    wind: { speed: 5 },
    weather: [{ description: 'Clear', icon: '01d' }]
  };
  render(<WeatherInfo weatherData={weatherData} />);
  expect(screen.getByText(/London, GB/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperature: 20°C/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed: 5 m\/s/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity: 70%/i)).toBeInTheDocument();
  expect(screen.getByText(/Weather Condition: Clear/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Weather Icon/i)).toBeInTheDocument();
});
