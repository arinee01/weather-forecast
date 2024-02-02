import { getWeather, getForecast } from '../utils/api';

test('getWeather returns correct data', async () => {
  const data = await getWeather('London', 'metric');
  expect(data.name).toBe('London');
  expect(data.main.temp).toBeDefined();
  // Добавьте дополнительные проверки при необходимости
});

test('getForecast returns correct data', async () => {
  const data = await getForecast('London', 'metric');
  expect(data.city.name).toBe('London');
  expect(data.list).toHaveLength(5);
  // Добавьте дополнительные проверки при необходимости
});