<script setup lang="ts">
useSeoMeta({
  title: 'Yanuar Aditia — Software Engineer',
  description: 'Welcome to my personal website!',
  ogUrl: '/'
})
</script>

<template>
  <div
    class="group flex flex-col"
    :style="{
      viewTransitionName: 'entry'
    }"
  >
    <HomeHero />
    <HomeLatestProjects />
    <HomeLatestArticles />
    <HomeCta />
  </div>
</template>
