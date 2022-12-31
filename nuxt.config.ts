// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@nuxt/content',
        '@nuxtjs/web-vitals'
    ],
    runtimeConfig: {
        public: {

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
            link         : [
                {
                    rel : 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                },
                {
                    rel : 'preconnect',
                    href: 'https://fonts.gstatic.com'
                },
                {
                    rel : 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400;1,500&family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap'
                }
            ]
        }
    },
    image: {
        provider: "vercel",
        screens: {
            sm: 464,
            lg: 396,
            xl: 716
        },
        domains: [
            'avatars0.githubusercontent.com',
            'images.ctfassets.net'
        ]
    }
})
