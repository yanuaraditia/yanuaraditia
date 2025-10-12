<script setup lang="ts">
import type { DockItemData } from '~/components/ui/Dock/types'
const items: DockItemData[] = [
  {
    icon: '/icon/home.png',
    label: 'Home',
    to: '/'
  },
  {
    icon: '/icon/blog.png',
    label: 'Blog',
    to: '/blog'
  },
  {
    icon: '/icon/project.png',
    label: 'Projects',
    to: '/project'
  },
  {
    icon: '/icon/about.png',
    label: 'About This Mac',
    onClick: () => {
      const { openWindow } = useWindowManager()
      openWindow({
        id: 'about-this-mac',
        title: 'About This Mac',
        component: 'AboutThisMacWindow',
        width: 700,
        height: 600
      })
    }
  },
  {
    icon: '/icon/github.png',
    label: 'GitHub',
    onClick: () =>
      navigateTo('https://github.com/yanuaraditia', {
        external: true,
        open: { target: '_blank' }
      })
  },
  {
    icon: '/icon/linkedin.png',
    label: 'LinkedIn',
    onClick: () =>
      navigateTo('https://linkedin.com/in/yanuaraditia', {
        external: true,
        open: { target: '_blank' }
      })
  },
  {
    icon: '/icon/instagram.png',
    label: 'Instagram',
    onClick: () =>
      navigateTo('https://instagram.com/_______yanuar', {
        external: true,
        open: { target: '_blank' }
      })
  }
]
</script>
<template>
  <NuxtLoadingIndicator color="var(--color-primary)" />

  <!-- macOS Menu Bar -->
  <UiAppBarMacOSMenuBar />

  <!-- Background -->
  <div class="fixed w-screen h-screen pointer-events-none">
    <UiBgGradual
      :hue-shift="0"
      :noise-intensity="0"
      :scanline-intensity="0"
      :speed="0.5"
      :scanline-frequency="0"
      :warp-amount="0"
      :resolution-scale="1"
    />
  </div>

  <!-- Main Content -->
  <div class="relative z-100 pt-7">
    <NuxtPage />
    <UiWindowContainer />
    <UiDock :items="items" />
  </div>
</template>

<style>
/* Disable body scroll for desktop experience */
html,
body {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

/* Ensure consistent macOS desktop experience */
#__nuxt {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
