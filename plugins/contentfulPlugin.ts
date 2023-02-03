import { createClient } from "contentful"
import contentful from 'contentful'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient
    return {
        provide: {
            client: createClientFunc({
                space: config.public.space,
                accessToken: config.public.accessToken
            })
        }
    }

})
