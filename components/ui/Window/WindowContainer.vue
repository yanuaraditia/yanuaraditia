<template>
  <div class="fixed inset-0 pointer-events-none">
    <!-- Desktop Background -->
    <div class="absolute inset-0 pointer-events-auto">
      <slot name="background" />
    </div>

    <!-- Windows as Dialogs -->
    <UiWindowMacOSWindow
      v-for="window in visibleWindows"
      :id="window.id"
      :key="window.id"
      :title="window.title"
      :initial-x="window.x"
      :initial-y="window.y"
      :width="window.width"
      :height="window.height"
      :is-active="window.isActive"
      :is-open="!window.isMinimized"
      @close="handleWindowClose"
      @minimize="windowManager.minimizeWindow"
      @maximize="windowManager.maximizeWindow"
      @focus="windowManager.focusWindow"
      @move="windowManager.moveWindow"
    >
      <!-- Custom title for AboutThisMacWindow -->
      <template v-if="window.component === 'AboutThisMacWindow'" #title>
        <UiWindowAboutThisMacTabs
          :active-tab="aboutActiveTab"
          @update-tab="aboutActiveTab = $event"
        />
      </template>

      <!-- Window Content -->
      <div v-if="window.component === 'BlogWindow'" class="p-6">
        <UiHeading class="mb-6">Blog</UiHeading>
        <div class="space-y-4">
          <p class="text-gray-600 dark:text-gray-400">
            Welcome to my blog! Here you'll find my latest thoughts, tutorials,
            and insights about web development, technology, and more.
          </p>
          <div class="grid gap-4">
            <div
              class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <h3 class="font-semibold mb-2">Recent Posts</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Blog posts will be loaded here...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="window.component === 'ProjectWindow'" class="p-6">
        <UiHeading class="mb-6">Projects</UiHeading>
        <div class="space-y-4">
          <p class="text-gray-600 dark:text-gray-400">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning experience.
          </p>
          <div class="grid gap-4 md:grid-cols-2">
            <div
              class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <h3 class="font-semibold mb-2">Featured Projects</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Project showcase will be loaded here...
              </p>
            </div>
            <div
              class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <h3 class="font-semibold mb-2">Open Source</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Open source contributions and projects...
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Window Content -->
      <div v-if="window.component === 'BlogWindow'" class="p-6">
        <UiHeading class="mb-6">Blog</UiHeading>
        <div class="space-y-4">
          <p class="text-gray-600 dark:text-gray-400">
            Welcome to my blog! Here you'll find my latest thoughts, tutorials,
            and insights about web development, technology, and more.
          </p>
          <div class="grid gap-4">
            <div
              class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <h3 class="font-semibold mb-2">Recent Posts</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Blog posts will be loaded here...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="window.component === 'ProjectWindow'" class="p-6">
        <UiHeading class="mb-6">Projects</UiHeading>
        <div class="space-y-4">
          <p class="text-gray-600 dark:text-gray-400">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning experience.
          </p>
          <div class="grid gap-4 md:grid-cols-2">
            <div
              class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <h3 class="font-semibold mb-2">Featured Projects</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Project showcase will be loaded here...
              </p>
            </div>
            <div
              class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <h3 class="font-semibold mb-2">Open Source</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Open source contributions and projects...
              </p>
            </div>
          </div>
        </div>
      </div>

      <UiWindowAboutThisMacContent
        v-else-if="window.component === 'AboutThisMacWindow'"
        :active-tab="aboutActiveTab"
      />

      <div v-else class="p-6">
        <p class="text-gray-500">Unknown window type: {{ window.component }}</p>
      </div>
    </UiWindowMacOSWindow>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useWindowManager } from '~/composables/useWindowManager'

const windowManager = useWindowManager()

// State for AboutThisMac window tabs
const aboutActiveTab = ref('overview')

const visibleWindows = computed(() => {
  return Array.from(windowManager.state.windows.values())
    .filter((window) => !window.isMinimized)
    .sort((a, b) => a.zIndex - b.zIndex)
})

const handleWindowClose = (id: string) => {
  // Add slight delay for close animation
  setTimeout(() => {
    windowManager.closeWindow(id)
  }, 150)
}

onMounted(() => {
  // Restore windows from URL on page load
  windowManager.restoreFromURL()
})
</script>

<style scoped>
/* Window transition animations */
.window-enter-active,
.window-leave-active {
  transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.window-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.window-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}

.window-move {
  transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
