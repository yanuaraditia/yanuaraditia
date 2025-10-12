<script setup lang="ts">
import type { DockItemData } from '~/components/dock/types'

const socials = [
  {
    name: 'GitHub',
    icon: 'mdi:github',
    url: 'https://github.com/yanuaraditia'
  },
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    url: 'https://linkedin.com/in/yanuaraditia'
  },
  {
    name: 'Instagram',
    icon: 'mdi:instagram',
    url: 'https://instagram.com/_______yanuar'
  }
]

const items: DockItemData[] = [
  {
    icon: '/images/icon/finder.png',
    label: 'Dock',
    to: '/'
  },
  {
    icon: '/images/icon/home.png',
    label: 'Home',
    to: '/'
  },
  {
    icon: '/images/icon/project.png',
    label: 'Projects',
    to: '/project'
  },
  {
    icon: '/images/icon/blog.png',
    label: 'Blog',
    to: '/blog'
  },
  {
    icon: '/images/icon/settings.png',
    label: 'About Me',
    to: '/about'
  }
]
</script>
<template>
  <NuxtLoadingIndicator color="var(--color-primary)" />

  <div class="lg:ml-24 mb-16 lg:mb-0 px-6 py-6 lg:px-24 lg:py-12">
    <NuxtPage />
    <footer class="mt-6 lg:mt-10 lg:flex lg:justify-between">
      <p>&copy; {{ new Date().getFullYear() }} by Yanuar Aditia</p>
      <div class="flex gap-4 mt-4 lg:mt-0">
        <NuxtLink
          v-for="social in socials"
          :key="social.name"
          :to="social.url"
          class="text-secondary hover:text-primary bg-surface-container hover:bg-surface-container-high rounded-full p-1 transition-colors"
        >
          <Icon :name="social.icon" size="20px" />
        </NuxtLink>
      </div>
    </footer>
  </div>
  <Dock :items="items" />
</template>
