"use client";

import { useEffect, useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { OutfitCard } from "@/components/OutfitCard";
import { getWeatherByCoords } from "@/lib/getWeather";
import { suggestOutfit } from "@/lib/outfitLogic";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [weather, setWeather] = useState<any>(null);
  const [outfit, setOutfit] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const gender = localStorage.getItem("gender");
    const style = localStorage.getItem("style");

    // Redirect to home page if no preferences are set in localStorage
    if (!gender || !style) {
      router.push("/");
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const data = await getWeatherByCoords(latitude, longitude);
            setWeather(data);

            const temperature = data?.main?.temp;
            const condition = data?.weather?.[0]?.main.toLowerCase() || "clear";

            const outfitSuggestion = suggestOutfit(temperature, style, condition, gender);
            setOutfit(outfitSuggestion);
          } catch (err: any) {
            console.error("Error fetching weather or suggesting outfit:", err);
            setError(err.message || "Failed to load data.");
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          console.error("Error getting geolocation:", err);
          setError("Could not retrieve location. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, [router]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!weather) return <div className="text-center mt-20">No weather data available.</div>;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <WeatherCard weather={weather} />
      <div className="my-6" />
      <OutfitCard outfit={outfit} />
    </main>
  );
}
