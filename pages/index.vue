<template>
  <section class="py-16 xl:py-22 relative border-b border-b-neutral-300 border-dashed dark:border-b-neutral-700">
    <div class="container px-4 xl:w-9/12 mx-auto relative">
      <div class="grid xl:grid-cols-2 xl:items-center">
        <div class="xl:order-2">
          <div class="mx-auto w-64 xl:w-96 relative bg-gradient-to-t from-neutral-100 to-neutral-200 shadow-lg dark:to-neutral-700 dark:from-neutral-800 rounded-2xl mb-10 px-5 pt-5">
            <nuxt-img src="~/assets/my-photo.webp" class="inline-block w-64 xl:w-96 relative rounded-2xl" loading="lazy" alt="Yanuar Reg" />
            <span style="transform: rotate(-5deg)" class="w-full border-blue-600 border-dashed dark:border-blue-300 border-2 absolute h-full top-0 left-0 right-0 bottom-0 rounded-2xl"></span>
            <div class="absolute bg-neutral-100 flex place-items-center gap-5 shadow-lg p-2 rounded-2xl bottom-0 right-0 -translate-x-1/4 -translate-y-1/4">
              <div class="aspect-square w-8 h-8">
                <img src="~/assets/coffee-emoji.webp" alt="Kopi Lambada" class="w-full" width="24" height="24"/>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:order-1">
          <h1 class="mb-5 font-medium xl:leading-tight text-3xl xl:text-5xl">
            <span>Hi! </span>
            <span class="text-blue-500">I'm Yanuar, </span>
            <span>a </span>
            <span class="font-bold">Junior Product Manager </span>
            <span>based in Yogyakarta, ID</span>
          </h1>
          <p class="xl:text-lg mb-8 xl:w-9/12 text-neutral-600 dark:text-neutral-400">I have been working as a Software Engineer for +3 years. I am looking forward to collaborate with you!</p>
          <ul class="grid gap-y-3 mb-10">
            <li class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <span>Product must be authentic</span>
            </li>
            <li class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <span>Solve pain elegantly</span>
            </li>
            <li class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <span>User testing, feedback, and validation</span>
            </li>
          </ul>
          <div class="inline-flex gap-3 mx-auto">
            <div>
              <nuxt-link to="/contact" class="block shadow-md border border-blue-700 bg-blue-600 text-white dark:hover:bg-blue-300 dark:border-blue-200 dark:hover:border-blue-400 hover:shadow-lg font-medium transition-all px-6 relative py-3 dark:bg-blue-200 dark:text-blue-900 rounded-xl">
                <span>Contact Me</span>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/about" class="block shadow-md border bg-white dark:bg-neutral-800 text-blue-800 dark:text-blue-300 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:hover:border-blue-400 hover:shadow-lg font-medium transition-all px-6 relative py-3 rounded-xl">
                <span>About Me</span>
              </nuxt-link>
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
