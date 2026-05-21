<script setup lang="ts">
const socials = [
  {
    name: 'GitHub',
    icon: 'mdi:github',
    url: 'https://github.com/yan-ad'
  },
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    url: 'https://linkedin.com/in/yan-ad'
  },
  {
    name: 'Instagram',
    icon: 'mdi:instagram',
    url: 'https://instagram.com/yan_ad_'
  }
]
</script>

<template>
  <header class="bg-muted h-16">
    <div
      class="flex items-center bg-background border-b chamfer-sm-bottom justify-between h-full px-6 md:px-10"
    >
      <!-- Left: brand + nav -->
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/"
          class="font-display font-bold tracking-tight text-lg text-primary"
        >
          yan.ad
        </NuxtLink>

        <nav class="flex items-center gap-1">
          <AppBarItem
            to="/"
            label="Home"
            icon="solar:tea-cup-broken"
            active-icon="solar:tea-cup-bold"
          />
          <AppBarItem
            to="/project"
            label="Project"
            icon="solar:case-broken"
            active-icon="solar:case-bold"
          />
          <AppBarItem
            to="/blog"
            label="Blog"
            icon="solar:notes-broken"
            active-icon="solar:notes-bold"
          />
        </nav>
      </div>

      <!-- Right: weather chip + socials -->
      <div class="flex items-center gap-2">
        <div class="hidden sm:flex gap-1">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            :aria-label="social.name"
            target="_blank"
            rel="noopener"
            class="size-8 inline-flex items-center justify-center rounded-md text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
          >
            <Icon :name="social.icon" size="16px" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
