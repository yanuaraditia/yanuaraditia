<template>
  <section class="pb-16 pt-1 xl:pt-16 relative">
    <div class="container px-4 xl:w-9/12 mx-auto relative">
      <div class="grid xl:grid-cols-2 xl:items-center">
        <div class="xl:order-2">
            <div class="mx-auto xl:w-96 mb-10 p-1 rounded-2xl bg-gradient-to-br shadow-lg xl:shadow-2xl from-primary-400 to-primary-900 dark:from-primary-300 dark:to-primary-800">
              <div class="relative group bg-gradient-to-t text-center overflow-hidden from-neutral-300 to-neutral-200 dark:to-neutral-800 dark:from-neutral-900 rounded-xl px-5 pt-5">
                <span class="bg-primary-900 dark:bg-primary-400 group-hover:scale-150 transition-all absolute animate-pulse rounded-full bottom-0 translate-y-1/2 blur-3xl left-0 w-full aspect-square bottom-0"></span>
                <nuxt-img src="/assets/my-photo.webp" class="inline-block w-64 xl:w-96 relative rounded-2xl" loading="lazy" alt="Yanuar Reg" />
                <div class="absolute z-50 bg-neutral-100 flex place-items-center gap-5 shadow-lg p-2 rounded-xl bottom-0 right-0 -translate-x-1/4 -translate-y-1/4">
                  <div class="aspect-square w-8 h-8">
                    <nuxt-img src="/assets/coffee-emoji.webp" alt="Kopi Lambada" class="w-full" width="24px" height="24px"/>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="xl:order-1">
          <a class="inline-block px-3.5 border rounded-full py-1 text-sm font-medium mb-5 border-primary-800 border-dashed dark:border-primary-300 bg-primary-600 text-primary-800 dark:text-primary-300 bg-opacity-10" href="mailto:hi@yanuar.dev">hi@yanuar.dev</a>
          <h1 class="mb-5 font-semibold xl:leading-tight text-3xl xl:text-5xl">
            <span>👋 Hi! </span>
            <span class="text-neutral-material-400 dark:text-primary-500">I'm Yanuar, </span>
            <span>a Junior Product Manager </span>
            <span>based in Yogyakarta 🇮🇩</span>
          </h1>
          <p class="xl:text-lg mb-8 xl:w-9/12 text-neutral-600 dark:text-neutral-400">I have been working as a Software Engineer for +3 years. I am looking forward to collaborate with you!</p>
          <ul class="grid gap-y-3 mb-10">
            <li class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-neutral-material-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <span>Product must be authentic</span>
            </li>
            <li class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-neutral-material-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <span>Solve pain elegantly</span>
            </li>
            <li class="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-neutral-material-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <span>User testing, feedback, and validation</span>
            </li>
          </ul>
            <div class="bg-primary-500 inline-flex items-center font-medium gap-3 pl-5 pr-4 rounded-full text-neutral-material-500 hover:bg-primary-600 transition-all py-3 text-lg relative">
                <span>Let's connect with me</span>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.704 4.284a1 1 0 1 0-1.403 1.424L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78l-6.925-6.823Z" fill="currentColor"/></svg>
                <nuxt-link to="/contact" class="absolute inset-0"/>
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
