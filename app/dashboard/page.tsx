'use client'

import { useEffect, useState } from 'react'
import { WeatherCard } from '@/components/WeatherCard'
import { OutfitCard } from '@/components/OutfitCard'
import { SuggestionCard, SuggestionCardProps } from '@/components/SuggestionCard' // Explicitly import SuggestionCardProps
import { getWeatherByCoords } from '@/lib/getWeather'
import { suggestOutfit } from '@/lib/outfitLogic'
import { useRouter } from 'next/navigation'
import { FaLightbulb } from 'react-icons/fa'

export default function Dashboard() {
  const [weather, setWeather] = useState<any>(null)
  const [outfit, setOutfit] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [suggestion, setSuggestion] = useState<string>('') // New state for suggestion
  const router = useRouter()

  useEffect(() => {
    // Check localStorage early to prevent rendering content before redirecting
    const gender = localStorage.getItem('gender')
    const style = localStorage.getItem('style')

    if (!gender || !style) {
      // Immediately redirect if gender or style is missing
      router.push('/')
      return
    }

    // If localStorage is valid, proceed to fetch weather data
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords
          try {
            const data = await getWeatherByCoords(latitude, longitude)
            setWeather(data)

            const temperature = data?.main?.temp
            const condition = data?.weather?.[0]?.main.toLowerCase() || 'clear'

            const outfitSuggestion = suggestOutfit(temperature, style, condition, gender)
            setOutfit(outfitSuggestion)

            // Suggestion based on temperature
            let tempSuggestion = ''
            if (temperature < 0) {
              tempSuggestion = 'It’s quite cold! Layer up for warmth.'
            } else if (temperature < 10) {
              tempSuggestion = 'Consider adding a jacket or sweater for comfort.'
            } else if (temperature < 20) {
              tempSuggestion = 'Perfect weather for a light jacket or long sleeves!'
            } else if (temperature < 30) {
              tempSuggestion = 'It’s warm! Stay cool with lighter clothing.'
            } else {
              tempSuggestion = 'It’s hot! Don’t forget sunscreen and stay hydrated!'
            }

            // Add style-based suggestion
            if (style === 'casual') {
              tempSuggestion += ' A casual look is perfect for today!'
            } else if (style === 'formal') {
              tempSuggestion += ' You can’t go wrong with a formal outfit.'
            } else if (style === 'sporty') {
              tempSuggestion += ' Sporty outfits are a great choice for comfort.'
            }

            setSuggestion(tempSuggestion) // Update suggestion based on temperature and style
          } catch (err: any) {
            console.error('Error fetching weather or suggesting outfit:', err)
            setError('Failed to load weather data.')
          } finally {
            setLoading(false)
          }
        },
        (err) => {
          console.error('Error getting geolocation:', err)
          setError('Could not retrieve location. Please enable location services.')
          setLoading(false)
        }
      )
    } else {
      setError('Geolocation is not supported by your browser.')
      setLoading(false)
    }
  }, [router])

  if (loading)
    return (
      <div className="text-center mt-20 text-lg font-medium text-gray-600 animate-pulse">
        Loading your personalized recommendations...
      </div>
    )
  if (error)
    return <div className="text-center mt-20 text-lg text-red-500">{error}</div>
  if (!weather)
    return (
      <div className="text-center mt-20 text-gray-500">
        No weather data available.
      </div>
    )

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e0f7fa] to-[#ffffff] p-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Your Weather & Outfit Dashboard
      </h1>
      <p className="text-gray-600 text-lg mb-10 text-center max-w-xl px-4">
        Based on your location and preferences, here’s what you should wear today!
      </p>

      <div className="w-full max-w-2xl space-y-8">
        <div className="transition-shadow duration-300 hover:shadow-xl rounded-xl bg-white shadow-md p-6">
          <WeatherCard weather={weather} />
        </div>

        <div className="transition-shadow duration-300 hover:shadow-xl rounded-xl bg-white shadow-md p-6">
          <OutfitCard outfit={outfit} />
        </div>

        <SuggestionCard
          title="Pro Tip"
          suggestion={suggestion} 
          icon={<FaLightbulb />}
        />
      </div>
    </main>
  )
}
