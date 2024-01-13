import { fetchWeatherData } from "../Controls/APIs_Calls"; // The path to your weather module
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const mockWeatherData = {
  days: [
    {
      temp: 10,
      conditions: "Clear",
      windspeed: 5,
      snowdepth: 0,
    },
    {
      temp: 10,
      conditions: "Clear",
      windspeed: 5,
      snowdepth: 0,
    },
  ],
}

beforeEach(() => {
  fetch.resetMocks();
});

describe("fetchWeatherData", () => {
  it("fetches weather data successfully", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockWeatherData));
    
    const weatherData = await fetchWeatherData("10001", new Date());

    expect(fetch).toHaveBeenCalledTimes(1);
    
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("10001"),
      expect.any(Object)
    );

    expect(weatherData).toEqual({
      temp: 10,
      wForecast: "Clear",
      wind: 5,
      sDepth: 0,
    });
  });

  it('returns N/A for all values on error', async () => {
    fetch.mockReject(new Error('Fake network error'));
  
    const consoleSpy = jest.spyOn(console, 'error');
  
    const result = await fetchWeatherData("10001", new Date());
    
    expect(fetch).toHaveBeenCalledTimes(1);
    
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("10001"),
      expect.any(Object)
    );
    
    expect(consoleSpy).toHaveBeenCalledWith('Error fetching weather data ', expect.any(Error));
    
    expect(result).toEqual({
      temp: "N/A",
      wForecast: "N/A",
      wind: "N/A",
      sDepth: "N/A",
    });
  
    consoleSpy.mockRestore();
  });
});
