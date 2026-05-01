import type { WeatherResponse } from '~/../../server/api/weather.get'

/**
 * Maps an OpenWeatherMap "main" condition to a brand `--color-super` palette.
 * Each entry returns `{ super, superForeground }` in hex.
 *
 * Light/Dark variants keep enough contrast for AA text.
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

const PALETTE: Record<WeatherKey, { light: WeatherTheme; dark: WeatherTheme }> =
  {
    'clear-day': {
      light: { super: '#e08a00', superForeground: '#ffffff', label: 'Sunny' },
      dark: { super: '#ffc266', superForeground: '#3a2300', label: 'Sunny' }
    },
    'clear-night': {
      light: {
        super: '#3b3f7a',
        superForeground: '#ffffff',
        label: 'Clear night'
      },
      dark: {
        super: '#a8b0ff',
        superForeground: '#10133a',
        label: 'Clear night'
      }
    },
    clouds: {
      light: { super: '#5b6b7c', superForeground: '#ffffff', label: 'Cloudy' },
      dark: { super: '#b6c2cf', superForeground: '#1a2129', label: 'Cloudy' }
    },
    rain: {
      light: { super: '#0f6cb6', superForeground: '#ffffff', label: 'Rainy' },
      dark: { super: '#7cc4ff', superForeground: '#062338', label: 'Rainy' }
    },
    drizzle: {
      light: { super: '#3a8ec8', superForeground: '#ffffff', label: 'Drizzle' },
      dark: { super: '#9fd2f5', superForeground: '#0a2c41', label: 'Drizzle' }
    },
    thunderstorm: {
      light: {
        super: '#5b3aa8',
        superForeground: '#ffffff',
        label: 'Thunderstorm'
      },
      dark: {
        super: '#c5a8ff',
        superForeground: '#1d0d4a',
        label: 'Thunderstorm'
      }
    },
    snow: {
      light: { super: '#4f7a9a', superForeground: '#ffffff', label: 'Snow' },
      dark: { super: '#dfeefb', superForeground: '#1b2a36', label: 'Snow' }
    },
    mist: {
      light: { super: '#6b7a73', superForeground: '#ffffff', label: 'Mist' },
      dark: { super: '#c2cec7', superForeground: '#1a221d', label: 'Mist' }
    },
    default: {
      light: { super: '#253d05', superForeground: '#ffffff', label: 'Sleman' },
      dark: { super: '#c7e79e', superForeground: '#172b00', label: 'Sleman' }
    }
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
  const colorMode = useColorMode()

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
    const isDark = colorMode.value === 'dark'
    return PALETTE[themeKey.value][isDark ? 'dark' : 'light']
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

  // Apply tokens to <html> so every `bg-super`, `text-super`, etc. updates.
  const applyTheme = () => {
    if (!import.meta.client) return
    const root = document.documentElement
    root.style.setProperty('--color-super', theme.value.super)
    root.style.setProperty(
      '--color-super-foreground',
      theme.value.superForeground
    )
  }

  watch([theme], () => applyTheme(), { immediate: true })

  watch(
    () => colorMode.value,
    () => nextTick(applyTheme)
  )

  return {
    weather: readonly(weather),
    theme: readonly(theme),
    themeKey: readonly(themeKey),
    refresh
  }
}
