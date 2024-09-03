"use client"
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CloudIcon, MapPinIcon, ThermometerIcon } from "lucide-react";

// Define the API_KEY and type for weather data
const API_KEY = 'de7bf3dd53bd737f80a064ec0b825fb3';

// Define the type for the weather data response
interface WeatherData {
  main?: {
    temp?: number;
  };
  weather?: Array<{
    description?: string;
  }>;
}

const WeatherComponent: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<WeatherData | null>(null);

  const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getWeather = async (location: string | null) => {
    let url: string | undefined;

    if (location) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    } else {
      try {
        const position = await getCurrentPosition();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      } catch (error) {
        console.error('Error getting geolocation:', error);
        return; // Exit if there's an error getting geolocation
      }
    }

    if (url) {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result: WeatherData = await response.json();
        setData(result);
        setLocation('')
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onBtnCall = () => {
    getWeather(location);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <div className="w-full max-w-md mx-auto text-center bg-white shadow-lg rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Weather Widget</h2>
        <p className="text-gray-600">Search for the current weather conditions in your city.</p>
      </div>
      <div className="mb-6">
        <form className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Enter a city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-gray-300 rounded-md"
          />
          <Button
            onClick={onBtnCall}
            disabled={isLoading}
            className={`py-2 px-4 rounded-md text-white ${isLoading ? 'bg-gray-500' : 'bg-blue-500'} hover:bg-blue-600 transition`}
          >
            {isLoading ? 'Loading...' : 'Search'}
          </Button>
        </form>
      </div>
      <div className="mt-6 grid gap-4">
        {data && (
          <>
            {/* Display temperature with icon */}
            <div className="flex items-center gap-2 text-gray-800">
              <ThermometerIcon className="w-6 h-6" />
              <span>{data.main?.temp}°C</span> {/* Adjust based on the weather data structure */}
            </div>
            {/* Display weather description with icon */}
            <div className="flex items-center gap-2 text-gray-800">
              <CloudIcon className="w-6 h-6" />
              <span>{data.weather?.[0]?.description}</span> {/* Adjust based on the weather data structure */}
            </div>
          
          </>
        )}
      </div>
    </div>
  </div>
  );
};

export default WeatherComponent;
