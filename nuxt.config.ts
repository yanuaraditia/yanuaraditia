// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@pinia/nuxt',
    ],
    runtimeConfig: {
        public: {
            space: process.env.CTF_SPACE_ID,
            accessToken: process.env.CTF_CDA_ACCESS_TOKEN
        }
    },
    // @ts-ignore
    colorMode: {
        preference: 'light',
        classSuffix: ''
    },
    build: {
        // @ts-ignore
        chunkSizeWarningLimit: 1600,
    },
    css: [
        '~/assets/css/main.css'
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&family=Lora:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap'
                }
            ]
        }
    },
    image: {
        provider: "vercel",
        domains: [
            'avatars0.githubusercontent.com',
            'images.ctfassets.net'
        ]
    }
})
