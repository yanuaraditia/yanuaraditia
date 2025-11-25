<script setup lang="ts">
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
</script>
<template>
  <NuxtLoadingIndicator color="var(--color-primary)" />
  <div
    class="px-6 py-6 lg:px-24 lg:py-12 2xl:max-w-6xl mx-auto flex min-h-screen items-center justify-center"
  >
    <div>
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
  </div>
  <AppBar />
</template>
