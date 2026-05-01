import type { WeatherResponse } from '~/../../server/api/weather.get'

/**
 * Maps an OpenWeatherMap "main" condition to a brand `--color-primary` palette.
 * Each entry returns `{ super, superForeground }` in hex for the site's fixed dark theme.
 */
type WeatherTheme = {
  super: string
  superForeground: string
  /** human label */
  label: string
}

type WeatherKey =
  | 'clear-day'
  | 'clear-night'
  | 'clouds'
  | 'rain'
  | 'drizzle'
  | 'thunderstorm'
  | 'snow'
  | 'mist'
  | 'default'

const PALETTE: Record<WeatherKey, WeatherTheme> = {
  'clear-day': { super: '#ffd27a', superForeground: '#3a2300', label: 'Sunny' },
  'clear-night': {
    super: '#b8c0ff',
    superForeground: '#0f123d',
    label: 'Clear night'
  },
  clouds: { super: '#d2dde8', superForeground: '#1a2129', label: 'Cloudy' },
  rain: { super: '#8fd0ff', superForeground: '#062338', label: 'Rainy' },
  drizzle: { super: '#b8e3ff', superForeground: '#0a2c41', label: 'Drizzle' },
  thunderstorm: {
    super: '#d6c2ff',
    superForeground: '#1d0d4a',
    label: 'Thunderstorm'
  },
  snow: { super: '#eef7ff', superForeground: '#1b2a36', label: 'Snow' },
  mist: {
    super: 'oklch(78.9% 0.154 211.53)',
    superForeground: 'oklch(35.9% 0.144 278.697)',
    label: 'Mist'
  },
  default: { super: '#d9f7b8', superForeground: '#172b00', label: 'Sleman' }
}

const conditionToKey = (
  condition: string | undefined,
  isDay: boolean
): WeatherKey => {
  switch ((condition || '').toLowerCase()) {
    case 'clear':
      return isDay ? 'clear-day' : 'clear-night'
    case 'clouds':
      return 'clouds'
    case 'rain':
      return 'rain'
    case 'drizzle':
      return 'drizzle'
    case 'thunderstorm':
      return 'thunderstorm'
    case 'snow':
      return 'snow'
    case 'mist':
    case 'fog':
    case 'haze':
    case 'smoke':
    case 'dust':
    case 'sand':
    case 'ash':
    case 'squall':
    case 'tornado':
      return 'mist'
    default:
      return 'default'
  }
}

export const useWeather = () => {
  // Persisted last-known theme key. On SSR, Nuxt reads this from the incoming
  // request cookie so the correct color is available before the API call.
  // maxAge matches the server SWR cache (10 min).
  const themeKeyCookie = useCookie<WeatherKey>('wx-key', {
    maxAge: 600,
    sameSite: 'lax',
    default: () => 'default' as WeatherKey
  })

  // If we already know the condition from a previous visit, don't block SSR
  // on the fetch — render from cookie immediately and refresh lazily.
  // First-ever visit (cookie = 'default'): block until the fetch resolves.
  const hasCachedKey = themeKeyCookie.value !== 'default'

  const { data: weather, refresh } = useFetch<WeatherResponse>('/api/weather', {
    key: 'weather-sleman',
    server: true,
    lazy: hasCachedKey,
    default: () => null as unknown as WeatherResponse
  })

  const themeKey = computed<WeatherKey>(() => {
    // Use live data when available; fall back to cookie while lazy fetch is pending.
    if (weather.value) {
      return conditionToKey(weather.value.condition, weather.value.isDay)
    }
    return themeKeyCookie.value
  })

  const theme = computed<WeatherTheme>(() => {
    return PALETTE[themeKey.value]
  })

  // Persist the resolved key back to the cookie so the next visit is instant.
  // Only write on the client — writing during SSR would conflict with the
  // default value Nuxt already scheduled, producing the "overriding cookie" warning.
  watch(
    themeKey,
    (key) => {
      if (import.meta.client && key !== 'default') themeKeyCookie.value = key
    },
    { immediate: true }
  )

  // Apply tokens to <html> so every `bg-primary`, `text-primary`, etc. updates.
  const applyTheme = () => {
    if (!import.meta.client) return
    const root = document.documentElement
    root.style.setProperty('--primary', theme.value.super)
    root.style.setProperty('--primary-foreground', theme.value.superForeground)
  }

  watch([theme], () => applyTheme(), { immediate: true })

  return {
    weather: readonly(weather),
    theme: readonly(theme),
    themeKey: readonly(themeKey),
    refresh
  }
}
