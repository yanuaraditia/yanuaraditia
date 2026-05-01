import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    viewTransition: true
  },
  colorMode: {
    preference: 'system',
    classSuffix: '',
    storage: 'cookie',
    storageKey: 'gondes-mode'
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'shadcn-nuxt'
  ],

  css: ['@/assets/css/main.css'],

  icon: {
    mode: 'svg'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: {
    provider: 'google',
    defaults: {
      weights: ['400', '500', '600', '700', '800'],
      styles: ['normal', 'italic']
    }
  },

  routeRules: {
    '/about': {
      redirect: '/'
    },
    '/me': {
      redirect: '/'
    },
    '/api/weather': {
      // Set swr for 10 minutes, matching the cache settings in server/api/weather.get.ts. This
      // ensures the client gets a cached response immediately, while the server refreshes in the background.
      swr: 60 * 10
    }
  },

  runtimeConfig: {
    weatherApiKey: process.env.NUXT_WEATHER_API_KEY,
    public: {
      weatherLocation: {
        lat: -7.7172,
        lon: 110.3554,
        name: 'Sleman, Yogyakarta'
      }
    }
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    },
    build: {
      markdown: {
        highlight: {
          langs: [
            'vue',
            'js',
            'ts',
            'php',
            'shell',
            'bash',
            'go',
            'json',
            'yaml',
            'sql',
            'css',
            'scss'
          ]
        }
      }
    }
  }
})
