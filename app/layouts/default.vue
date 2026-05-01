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
    url: 'https://instagram.com/yan_ad_'
  }
]
</script>

<template>
  <NuxtLoadingIndicator color="var(--color-primary)" />

  <!-- Outer wrapper: full-bleed background -->
  <div class="min-h-screen flex justify-center">
    <!-- Framed container: vertical borders running full-height create the cubical frame -->
    <div
      class="container mx-auto border-x border-border/30 flex flex-col bg-muted"
    >
      <!-- Top bar (sticky, full-width) -->
      <div class="sticky top-0 z-50">
        <AppBar />
      </div>

      <!-- Page content -->
      <main class="flex-1">
        <NuxtPage />
      </main>

      <!-- Footer with top border to close the frame -->
      <footer
        class="border-t px-6 md:px-10 py-6 text-sm text-current/80 bg-background chamfer-sm-top flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <p>&copy; {{ new Date().getFullYear() }} Yanuar Aditia</p>
        <div class="flex gap-2">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.url"
            :aria-label="social.name"
            class="size-8 inline-flex items-center justify-center rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
          >
            <Icon :name="social.icon" size="18px" />
          </NuxtLink>
        </div>
      </footer>
    </div>
  </div>
</template>
