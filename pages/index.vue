<script setup lang="ts">
useSeoMeta({
  title: 'Homepage',
  description: 'Welcome to my personal website!',
  ogUrl: '/'
})

const stacks = [
  'vuejs',
  'react',
  'nuxt',
  'nextjs',
  'tailwindcss',
  'laravel',
  'docker'
]
</script>
<template>
  <div
    :style="{
      viewTransitionName: 'entry'
    }"
  >
    <div>
      <NuxtImg
        src="/me.jpeg"
        style="view-transition-name: entry-image"
        class="rounded-2xl w-20 h-20 mb-3 lg:mb-10 border-2 border-white shadow-2xl"
        alt="Yanuar Aditia"
      />
      <UiHeading style="view-transition-name: entry-title">
        👋 Hi! I'm Yanuar Aditia, a
        <UiEffectRotatingText
          :texts="[
            'Software Engineer',
            'Gamer',
            'Principal Engineer',
            'Tech Lead'
          ]"
          class="text-primary"
        >
          Software Engineer
        </UiEffectRotatingText>
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
      <div class="flex gap-3 lg:mt-10">
        <NuxtLink
          to="mailto:me@yan.ad"
          class="px-4 py-2.5 border border-primary bg-primary text-on-primary rounded-lg font-medium"
        >
          Contact Me
        </NuxtLink>
        <NuxtLink
          to="/project"
          class="px-4 py-2.5 bg-surface-container/40 border border-outline-variant/40 backdrop-blur-lg text-primary rounded-lg font-medium"
        >
          See my Project
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
