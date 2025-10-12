<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { MotionValue } from 'motion-v'

const props = defineProps<{
  className?: string
  isHovered: MotionValue<number>
}>()

const isVisible = ref(false)
let unsub: (() => void) | null = null

onMounted(() => {
  unsub = props.isHovered.on('change', (latest: number) => {
    isVisible.value = latest === 1
  })
})
onUnmounted(() => unsub?.())
</script>

<template>
  <div
    class="absolute -top-10 left-1/2 w-fit whitespace-pre rounded-lg bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 text-xs text-white font-medium shadow-lg border border-white/10"
    :class="props.className"
    role="tooltip"
    :style="{
      transform: 'translateX(-50%)',
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      pointerEvents: 'none'
    }"
  >
    <slot />
  </div>
</template>
