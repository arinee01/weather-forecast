import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WeatherForm from '../components/WeatherForm';

test('WeatherForm renders correctly', () => {
  render(<WeatherForm />);
  expect(screen.getByLabelText(/Enter city/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Select unit/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Get Weather/i })).toBeInTheDocument();
});

test('WeatherForm handles form submission', async () => {
  const mockOnWeatherData = jest.fn();
  const mockOnError = jest.fn();
  render(<WeatherForm onWeatherData={mockOnWeatherData} onError={mockOnError} />);
  
  fireEvent.change(screen.getByLabelText(/Enter city/i), { target: { value: 'London' } });
  fireEvent.change(screen.getByLabelText(/Select unit/i), { target: { value: 'metric' } });
  fireEvent.click(screen.getByRole('button', { name: /Get Weather/i }));

  await waitFor(() => {
    expect(mockOnWeatherData).toHaveBeenCalledTimes(1);
  });
});