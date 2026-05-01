import { defineCachedEventHandler, createError } from '#imports'

/**
 * Server-aggregated current weather (weatherapi.com).
 * Cached with SWR (10 min) so we never hit upstream more than ~6 times/hour.
 */
export interface WeatherResponse {
  /** Normalized bucket — same vocabulary as the previous OWM impl. */
  condition:
    | 'Clear'
    | 'Clouds'
    | 'Rain'
    | 'Drizzle'
    | 'Thunderstorm'
    | 'Snow'
    | 'Mist'
    | string
  /** Free-text description from upstream (e.g. "Patchy rain nearby"). */
  description: string
  /** Upstream icon URL (already absolute). */
  icon: string
  isDay: boolean
  temp: number
  feelsLike: number
  humidity: number
  windSpeed: number // kph
  city: string
  fetchedAt: number
}

interface WeatherApiCurrent {
  location: { name: string; region: string; country: string; localtime: string }
  current: {
    temp_c: number
    feelslike_c: number
    humidity: number
    wind_kph: number
    is_day: 0 | 1
    condition: { text: string; icon: string; code: number }
  }
}

/**
 * Map weatherapi.com condition codes (https://www.weatherapi.com/docs/weather_conditions.json)
 * to our normalized bucket. We only need a coarse classification — the palette
 * in `useWeather.ts` does the rest.
 */
const codeToCondition = (code: number, text: string): string => {
  if (code === 1000) return 'Clear' // Sunny / Clear
  if ([1003, 1006, 1009].includes(code)) return 'Clouds'
  if ([1087, 1273, 1276, 1279, 1282].includes(code)) return 'Thunderstorm'
  if (
    [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(
      code
    )
  )
    return 'Snow'
  if (
    [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(code)
  )
    return 'Rain'
  if ([1150, 1153, 1168, 1171].includes(code)) return 'Drizzle'
  if ([1030, 1135, 1147].includes(code)) return 'Mist'
  // Fall back to upstream text
  return text || 'Clear'
}

export default defineCachedEventHandler(
  async (event): Promise<WeatherResponse> => {
    const config = useRuntimeConfig(event)
    const apiKey = config.weatherApiKey
    const { lat, lon, name } = config.public.weatherLocation

    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage:
          'WeatherAPI key is missing. Set NUXT_WEATHER_API_KEY in your environment.'
      })
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`

    const data = await $fetch<WeatherApiCurrent>(url)
    const c = data.current

    return {
      condition: codeToCondition(c.condition.code, c.condition.text),
      description: c.condition.text,
      icon: c.condition.icon.startsWith('//')
        ? `https:${c.condition.icon}`
        : c.condition.icon,
      isDay: c.is_day === 1,
      temp: Math.round(c.temp_c * 10) / 10,
      feelsLike: Math.round(c.feelslike_c * 10) / 10,
      humidity: c.humidity,
      windSpeed: c.wind_kph,
      city: data.location.name || name,
      fetchedAt: Date.now()
    }
  },
  {
    // Stale-While-Revalidate: serve cached value for 10 min, refresh in background.
    maxAge: 60 * 10,
    swr: true,
    name: 'weather-sleman',
    getKey: () => 'sleman-current'
  }
)
