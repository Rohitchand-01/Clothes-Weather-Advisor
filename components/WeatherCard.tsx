import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MapPinIcon, ThermometerIcon, CloudSunIcon } from "lucide-react";

export function WeatherCard({ weather }: { weather: any }) {
  const location = weather?.name;
  const temperature = weather?.main?.temp;
  const condition = weather?.weather?.[0]?.main;
  const iconCode = weather?.weather?.[0]?.icon;

  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl transition-all">
      <CardHeader className="flex items-center gap-2 pb-0">
        <CloudSunIcon className="text-yellow-500 dark:text-yellow-300" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Current Weather
        </h3>
      </CardHeader>
      <CardContent className="pt-2 space-y-2 text-gray-700 dark:text-gray-300">
        <p className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5 text-blue-500" />
          Location: <span className="font-medium">{location}</span>
        </p>
        <p className="flex items-center gap-2">
          <ThermometerIcon className="w-5 h-5 text-red-500" />
          Temperature: <span className="font-medium">{temperature}°C</span>
        </p>
        <p className="flex items-center gap-2">
          <img
            src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt="weather icon"
            className="w-8 h-8"
          />
          Condition: <span className="capitalize font-medium">{condition}</span>
        </p>
      </CardContent>
    </Card>
  );
}
