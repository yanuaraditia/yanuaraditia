<script setup lang="ts">
const { weather, theme } = useWeather()

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

const weatherIcon = computed(() => {
  const c = weather.value?.condition?.toLowerCase()
  const isDay = weather.value?.isDay ?? true
  switch (c) {
    case 'clear':
      return isDay ? 'solar:sun-bold' : 'solar:moon-stars-bold'
    case 'clouds':
      return 'solar:cloud-bold'
    case 'rain':
      return 'solar:cloud-rain-bold'
    case 'drizzle':
      return 'solar:cloud-drizzle-bold'
    case 'thunderstorm':
      return 'solar:cloud-storm-bold'
    case 'snow':
      return 'solar:snowflake-bold'
    default:
      return 'solar:cloud-bold'
  }
})
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
          class="font-display font-bold tracking-tight text-lg text-on-surface hover:text-super transition-colors"
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
        <span
          v-if="weather"
          :title="`${weather.description} · ${weather.temp}°C · ${weather.city}`"
          class="chamfer-sm hidden sm:inline-flex items-center gap-1.5 bg-muted px-2.5 py-1 text-xs"
        >
          <Icon
            :name="weatherIcon"
            size="14px"
            :style="{ color: theme.super }"
          />
          <span class="capitalize font-medium">{{ theme.label }}</span>
          <span class="text-on-surface-variant"
            >{{ Math.round(weather.temp) }}°</span
          >
        </span>

        <div class="flex gap-1">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            :aria-label="social.name"
            target="_blank"
            rel="noopener"
            class="size-8 inline-flex items-center justify-center rounded-md text-on-surface-variant hover:text-super hover:bg-surface-container transition-colors"
          >
            <Icon :name="social.icon" size="16px" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
