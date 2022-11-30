<template>
  <section class="py-16 xl:mt-14">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <div class="xl:w-8/12 mx-auto text-center">
        <div class="aspect-square mx-auto w-64 relative rounded-full mb-10">
          <span class="w-full border-red-500 border border-dashed absolute w-full h-full scale-110 rounded-full"></span>
          <img src="~/assets/yan-reg.png" class="inline-block w-64 aspect-square relative rounded-full shadow-lg" loading="lazy" alt="" />
          <div class="absolute bg-red-50 flex place-items-center gap-5 shadow-lg p-2 rounded-full bottom-0 right-0 -translate-x-1/4 -translate-y-1/4">
            <div class="aspect-square w-8 h-8">
              <img src="~/assets/coffee-emoji.png" alt="Kopi Lambada" class="w-full" width="24" height="24">
            </div>
          </div>
        </div>
        <h1 class="font-bold mb-5 text-3xl xl:text-5xl">
          <span>Hello, <span class="text-red-500">Yanuar</span> is here. </span>
        </h1>
        <p class="xl:text-lg mb-8 xl:w-9/12 xl:mx-auto">I’m from Indonesia and I have been working as a Software Engineer for more than 3 years. Currently I work for KiriminAja as Technical Lead since 2020. I am looking forward to collaborate with you!</p>
        <div class="inline-flex gap-3 mx-auto">
          <div>
            <nuxt-link to="/projects" class="block hover:bg-red-700 transition-all pr-6 pl-14 relative py-3.5 bg-red-600 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-5 -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
              </svg>
              <span>Project</span>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/about" class="block hover:bg-red-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 transition-all px-6 relative py-3.5 bg-red-100 text-red-700 rounded-full">
              <span>About Me</span>
            </nuxt-link>
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
