<template>
  <div class="min-h-screen flex items-center justify-center">
    <!-- Welcome Message -->
    <div class="text-center space-y-4 px-6">
      <div class="space-y-2">
        <h1
          class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Welcome
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          to my digital workspace
        </p>
      </div>

      <div class="space-y-2">
        <p class="text-gray-500 dark:text-gray-500">
          macOS-inspired portfolio experience
        </p>
        <div
          class="flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-600"
        >
          <span>Click dock items to explore</span>
          <span>•</span>
          <span>Drag windows around</span>
          <span>•</span>
          <span>Enjoy the experience</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Auto-open About This Mac window on page load
const { openWindow } = useWindowManager()

onMounted(() => {
  // Auto-open the About This Mac window after a short delay
  setTimeout(() => {
    openWindow({
      id: 'about-this-mac',
      title: 'About This Mac',
      component: 'AboutThisMacWindow',
      width: 700,
      height: 600
    })
  }, 1000)
})
</script>
