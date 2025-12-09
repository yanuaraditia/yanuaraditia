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
    class="group"
    :style="{
      viewTransitionName: 'entry'
    }"
  >
    <div>
      <UiHeading style="view-transition-name: entry-title">
        👋 Hi! I'm Yanuar Aditia, a
        <UiEffectRotatingText
          :texts="[
            'Software Engineer',
            'Software Architect',
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
      <div class="flex lg:mt-10 gap-3">
        <NuxtLink
          to="mailto:me@yan.ad"
          class="px-4 py-2.5 border border-primary bg-primary text-on-primary font-medium"
        >
          Contact Me
        </NuxtLink>
        <NuxtLink
          to="/project"
          class="px-4 py-2.5 bg-surface-container/60 hover:bg-surface-container text-primary font-medium"
        >
          See my Project
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
