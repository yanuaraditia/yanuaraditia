<template>
  <SectionBase add-class="relative">
    <SectionContainer>
      <div class="grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        <div class="xl:order-1">
          <a class="inline-block px-3.5 border rounded-full py-1 text-sm font-medium mb-5 border-primary-800 border-dashed dark:border-primary-300 bg-primary-600 text-primary-800 dark:text-primary-300 bg-opacity-10"
             href="mailto:hi@yanuar.dev">hi@yanuar.dev</a>
          <Headline>
            <span>👋 Hi! </span>
            <span>I'm Yanuar Aditia, a </span>
            <span class="text-primary-600 dark:text-primary-500">Product Lead & Designer</span>
          </Headline>
          <p class="xl:text-lg mb-7 xl:w-9/12 text-neutral-600 dark:text-neutral-400">I have been working as a Web
            Developer for <span v-text="`+` + (new Date().getFullYear() - 2018)"></span> years. I am looking forward to
            collaborate with you!</p>
          <ul class="grid gap-y-3 mb-10">
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>Product must be authentic</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>Solve pain elegantly</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="text-primary-800 dark:text-primary-300">✓</span>
              <span>User testing, feedback, and validation</span>
            </li>
          </ul>
          <div class="flex flex-col lg:flex-row gap-3">
            <ButtonPrimary to="/projects" label="See my work"/>
            <ButtonPrimary to="/about" type="outline" label="About me"/>
          </div>
        </div>
      </div>
    </SectionContainer>
  </SectionBase>
</template>

<script setup lang="ts">
import Headline from "~/components/Typo/Headline.vue";

const desc = "I’m from Indonesia and I have been working as a Software Engineer for more than 3 years. Currently I work for KiriminAja as Technical Lead since 2020. I am looking forward to collaborate with you!"

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
