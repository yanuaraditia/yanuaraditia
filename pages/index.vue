<template>
  <section class="py-16 xl:py-28 relative border-b border-b-neutral-300 border-dashed dark:border-b-neutral-700">
    <span class="bg-red-200 z-0 dark:bg-red-900 dark:bg-opacity-20 w-96 h-96 absolute rounded-full blur-3xl scale-150 bottom-0 left-0 -translate-x-1/2 translate-y-1/4"></span>
    <div class="container px-4 xl:w-9/12 mx-auto relative">
      <div class="grid xl:grid-cols-2 xl:items-center">
        <div class="xl:order-2">
          <div class="aspect-square mx-auto w-64 xl:w-72 relative rounded-full mb-10">
            <span class="w-full border-red-500 border border-dashed absolute w-full animate-pulse h-full scale-110 rounded-full"></span>
            <nuxt-img src="/yan-reg.png" class="inline-block w-64 xl:w-72 aspect-square relative rounded-full shadow-lg" loading="lazy" alt="Yanuar Reg" />
            <div class="absolute bg-red-50 flex place-items-center gap-5 shadow-lg p-2 rounded-full bottom-0 right-0 -translate-x-1/4 -translate-y-1/4">
              <div class="aspect-square w-8 h-8">
                <nuxt-img src="/coffee-emoji.png" alt="Kopi Lambada" class="w-full" width="24" height="24"/>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:order-1">
          <h1 class="mb-5 font-medium xl:leading-tight text-3xl xl:text-5xl">
            <span>Hi! </span>
            <span class="text-red-500">I'm Yanuar, </span>
            <span>a </span>
            <span class="font-bold">SOFTWARE ENGINEER </span>
            <span>based in</span>
            <span class="font-semibold"> Indonesia</span>
          </h1>
          <p class="xl:text-lg mb-8 xl:w-9/12 text-neutral-600 dark:text-neutral-400">I have been working as a Software Engineer for +3 years. I am looking forward to collaborate with you!</p>
          <div class="inline-flex gap-3 mx-auto">
            <div>
              <nuxt-link to="/contact" class="block bg-red-600 text-white dark:hover:bg-red-300 hover:shadow-lg font-medium transition-all px-6 relative py-3 dark:bg-red-200 dark:text-red-900 rounded-full">
                <span>Contact Me</span>
              </nuxt-link>
            </div>
            <div class="flex gap-3">
              <a aria-label="Linkedin Official yanuar" href="https://linkedin.com/in/yanuaraditia" class="inline-block p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-red-200 aspect-square bg-red-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <line x1="8" y1="11" x2="8" y2="16"></line>
                  <line x1="8" y1="8" x2="8" y2="8.01"></line>
                  <line x1="12" y1="16" x2="12" y2="11"></line>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a aria-label="Github Yanuar" href="https://www.github.com/yanuaraditia" class="inline-block p-3 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-red-200 aspect-square bg-red-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "index"
}
</script>

<script setup>
const desc ="I’m from Indonesia and I have been working as a Software Engineer for more than 3 years. Currently I work for KiriminAja as Technical Lead since 2020. I am looking forward to collaborate with you!"
useHead({
  title: "Yanuar Aditia",
  meta: [
    {
      content: desc,
      name: "description"
    },
    {
      content: desc,
      name: "og:description"
    },
    {
      content: "Yanuar Aditia",
      name: "og:title"
    },
    {
      content: "https://yan.my.id",
      name: "og:url"
    },
  ]
})
</script>

<style scoped>

</style>
