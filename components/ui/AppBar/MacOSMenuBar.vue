<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 h-7 bg-black/20 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 text-white text-sm select-none"
  >
    <!-- Left Side - App Menu -->
    <div class="flex items-center gap-4">
      <!-- Apple Logo / App Icon -->
      <div class="flex items-center gap-2">
        <div
          class="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
        >
          <span class="text-xs font-bold text-white">Y</span>
        </div>
        <span class="font-medium transition-all duration-200">{{
          activeWindowTitle
        }}</span>
        <span v-if="windowCount > 0" class="text-xs opacity-60 ml-1">
          ({{ windowCount }})
        </span>
      </div>

      <!-- Menu Items -->
      <div class="flex items-center gap-4 opacity-75">
        <button
          v-if="windowState.activeWindowId"
          class="hover:bg-white/10 px-2 py-0.5 rounded text-xs transition-colors"
        >
          File
        </button>
        <button
          v-if="windowState.activeWindowId"
          class="hover:bg-white/10 px-2 py-0.5 rounded text-xs transition-colors"
        >
          Edit
        </button>
        <button
          v-if="windowState.activeWindowId"
          class="hover:bg-white/10 px-2 py-0.5 rounded text-xs transition-colors"
        >
          View
        </button>
        <button
          class="hover:bg-white/10 px-2 py-0.5 rounded text-xs transition-colors"
          :class="{ 'opacity-50': windowCount === 0 }"
        >
          Window
        </button>
      </div>
    </div>

    <!-- Right Side - System Status -->
    <div class="flex items-center gap-3 text-xs">
      <!-- Battery Indicator (fake) -->
      <div class="flex items-center gap-1 opacity-75">
        <div class="w-6 h-3 border border-white/40 rounded-sm relative">
          <div class="absolute inset-0.5 bg-green-400 rounded-sm w-4/5"></div>
          <div
            class="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/40 rounded-r"
          ></div>
        </div>
        <span class="text-[10px]">85%</span>
      </div>

      <!-- WiFi Indicator -->
      <div class="flex items-center opacity-75">
        <svg class="w-4 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 21L15.6 16.2C14.6 15.45 13.35 15 12 15S9.4 15.45 8.4 16.2L12 21ZM12 11C14.76 11 17.2 12.05 19.1 13.7L21 12C18.5 9.8 15.4 8.5 12 8.5S5.5 9.8 3 12L4.9 13.7C6.8 12.05 9.24 11 12 11Z"
          />
        </svg>
      </div>

      <!-- Date & Time -->
      <div class="flex items-center gap-1 font-medium">
        <span>{{ formattedDate }}</span>
        <span>{{ formattedTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowManager } from '~/composables/useWindowManager'

const currentTime = ref(new Date())
const { state: windowState } = useWindowManager()

// Get active window title and info
const activeWindowTitle = computed(() => {
  if (!windowState.activeWindowId) return 'Yanuar'

  const activeWindow = windowState.windows.get(windowState.activeWindowId)
  return activeWindow ? activeWindow.title : 'Yanuar'
})

const windowCount = computed(() => {
  return windowState.windows.size
})

const formattedTime = computed(() => {
  return currentTime.value.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
})

const formattedDate = computed(() => {
  return currentTime.value.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
})

let timeInterval: ReturnType<typeof setInterval>

onMounted(() => {
  // Update time every second
  timeInterval = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>
