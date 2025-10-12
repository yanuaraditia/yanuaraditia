<script setup lang="ts">
useSeoMeta({
  title: 'Homepage',
  description: 'Welcome to my personal website!',
  ogUrl: '/'
})

const stacks = [
  'vuejs',
  'nuxt',
  'typescript',
  'tailwindcss',
  'vite',
  'laravel',
  'mongodb',
  'mysql',
  'docker'
]
</script>
<template>
  <WindowTitle>Welcome To My Portfolio</WindowTitle>
  <WindowContent
    class="grid gap-3 lg:gap-12 lg:grid-cols-2 2xl:py-20 lg:items-center"
    :style="{
      viewTransitionName: 'entry'
    }"
  >
    <NuxtImg
      src="/logo.png"
      style="view-transition-name: entry-image"
      class="lg:order-last"
    />
    <div>
      <NuxtLink
        to="mailto:me@yan.ad"
        class="inline-block border border-primary text-primary font-medium bg-surface-container border-dashed px-3.5 rounded-full mb-3 py-1 text-sm"
      >
        me@yan.ad
      </NuxtLink>
      <UiHeading style="view-transition-name: entry-title">
        👋 Hi! I'm Yanuar Aditia, a
        <span class="text-primary">Software Engineer</span>
      </UiHeading>
      <p class="xl:text-lg mb-7 xl:w-9/12">
        I have been working as a Software Engineer for +7 years. I am looking
        forward to collaborate with you!
      </p>
      <div
        class="flex gap-3 mb-6 flex-wrap text-primary"
        style="view-transition-name: entry-subs"
      >
        <Icon
          v-for="stack in stacks"
          :key="stack"
          :name="`lineicons:${stack}`"
          size="28px"
        />
      </div>
      <div class="flex gap-3 lg:mt-16">
        <NuxtLink
          to="/project"
          class="px-6 py-3.5 border border-primary bg-primary text-on-primary rounded-full font-semibold"
        >
          See my Project
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="px-6 py-3.5 border border-primary text-primary rounded-full font-semibold"
        >
          About me
        </NuxtLink>
      </div>
    </div>
  </WindowContent>
</template>
