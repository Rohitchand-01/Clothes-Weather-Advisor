// lib/getWeather.ts
export async function getWeatherByCoords(lat: number, lon: number) {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  if (!apiKey) {
    console.error("OpenWeatherMap API key is not defined in environment variables.");
    throw new Error("Failed to fetch weather due to missing API key.");
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
  );

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error("Failed to fetch weather: Unauthorized - Invalid API key.");
    }
    const errorText = await res.text();
    console.error(`OpenWeatherMap API error: ${res.status} - ${errorText}`);
    throw new Error(`Failed to fetch weather: HTTP error ${res.status}`);
  }

  try {
    return await res.json();
  } catch (error) {
    console.error("Error parsing JSON response:", error);
    throw new Error("Failed to parse weather data.");
  }
}

export async function getWeatherByCity(city: string) {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  if (!apiKey) {
    console.error("OpenWeatherMap API key is not defined in environment variables.");
    throw new Error("Failed to fetch weather due to missing API key.");
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error(`Failed to fetch weather for ${city}: Unauthorized - Invalid API key.`);
    }
    const errorText = await res.text();
    console.error(`OpenWeatherMap API error for ${city}: ${res.status} - ${errorText}`);
    throw new Error(`Failed to fetch weather for ${city}: HTTP error ${res.status}`);
  }

  try {
    return await res.json();
  } catch (error) {
    console.error(`Error parsing JSON response for ${city}:`, error);
    throw new Error(`Failed to parse weather data for ${city}.`);
  }
}