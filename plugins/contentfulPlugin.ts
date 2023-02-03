import * as pkg from 'contentful'
const {createClient} = pkg

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    return {
        provide: {
            client :createClient({
                space: config.public.space,
                accessToken: config.public.accessToken
            })
        }
    }

})
