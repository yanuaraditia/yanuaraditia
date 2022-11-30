// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@nuxt/content',
        '@nuxtjs/web-vitals'

    ],
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Inter: [
                300,400,500,600,700,800,900
            ],
            "JetBrains Mono": [
                400,500,600,700
            ]
        }
    },
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
