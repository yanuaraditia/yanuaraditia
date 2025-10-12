<script setup lang="ts">
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
    class="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#111] px-2 py-0.5 text-xs text-white transition-all duration-200"
    :class="props.className"
    role="tooltip"
    :style="{
      transform: 'translateX(-50%)',
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden'
    }"
  >
    <slot />
  </div>
</template>
