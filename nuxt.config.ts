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
    '@nuxtjs/color-mode'
  ],

  css: ['~/assets/css/main.css'],

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

  content: {
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
