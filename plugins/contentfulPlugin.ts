import pkg from 'contentful'
const {createClient} = pkg
// import {createClient} from "contentful"; // Uncomment if local

export default defineNuxtPlugin(() => {
    return {
        provide: {
            client :createClient({
                space: "m1s8s1116oid",
                accessToken: "ITiGiToNRjGXCFS1D0OygkG6wluPq3uXZ2OOVC62FOI"
            })
        }
    }

})
