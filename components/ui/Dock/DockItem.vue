<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  type MotionValue
} from 'motion-v'
import DockIcon from './DockIcon.vue'
import DockLabel from './DockLabel.vue'
import type { DockItemData } from './types'
import { useWindowManager } from '~/composables/useWindowManager'

const props = defineProps<{
  className?: string
  mouseX: MotionValue<number>
  spring: SpringOptions
  distance: number
  baseItemSize: number
  magnification: number
  item: DockItemData
}>()

const itemRef = ref<HTMLDivElement | null>(null)
const isHovered = useMotionValue<number>(0)
const currentSize = ref<number>(props.baseItemSize)

const mouseDistance = useTransform(props.mouseX, (val: number) => {
  const rect = itemRef.value?.getBoundingClientRect() ?? {
    x: 0,
    width: props.baseItemSize
  }
  return val - rect.x - props.baseItemSize / 2
})

const targetSize = useTransform(
  mouseDistance,
  [-props.distance, 0, props.distance],
  [props.baseItemSize, props.magnification, props.baseItemSize]
)
const size = useSpring(targetSize, props.spring)

let unsubSize: (() => void) | null = null
onMounted(() => {
  unsubSize = size.on('change', (latest: number) => {
    currentSize.value = latest
  })
})
onUnmounted(() => unsubSize?.())

const handleHoverStart = () => isHovered.set(1)
const handleHoverEnd = () => isHovered.set(0)
const handleFocus = () => isHovered.set(1)
const handleBlur = () => isHovered.set(0)

const handleClick = () => {
  // Add bounce animation on click
  const currentSizeValue = currentSize.value
  size.set(currentSizeValue * 0.9)
  setTimeout(() => size.set(currentSizeValue), 100)

  if (props.item.to && props.item.to !== '/') {
    // Use window manager for non-home routes
    const { openWindowById } = useWindowManager()
    const windowId = props.item.to.slice(1) // Remove leading slash
    openWindowById(windowId)
  } else if (props.item.to === '/') {
    // Home route - navigate normally
    navigateTo('/')
  } else if (props.item.onClick) {
    props.item.onClick()
  }
}

const route = useRoute()
const { state: windowState } = useWindowManager()

const isActive = computed(() => {
  if (!props.item.to) return false

  if (props.item.to === '/') {
    // Home is active when no windows are open or we're on home route
    return route.path === '/' && windowState.windows.size === 0
  }

  // Check if window is open for this route
  const windowId = props.item.to.slice(1) // Remove leading slash
  const window = windowState.windows.get(windowId)
  return window && !window.isMinimized
})
</script>

<template>
  <div
    ref="itemRef"
    :style="{ width: `${currentSize}px`, height: `${currentSize}px` }"
    :class="`relative cursor-pointer inline-flex items-center justify-center bg-transparent ${
      props.className ?? ''
    }`"
    tabindex="0"
    role="button"
    aria-haspopup="true"
    @mouseenter="handleHoverStart"
    @mouseleave="handleHoverEnd"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="handleClick"
  >
    <DockIcon>
      <img
        :src="props.item.icon"
        :alt="props.item.label"
        class="w-full h-full object-contain"
      />
    </DockIcon>

    <!-- Active indicator dot -->
    <div
      v-if="isActive"
      class="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
    />

    <DockLabel :is-hovered="isHovered">
      <span>{{ props.item.label }}</span>
    </DockLabel>
  </div>
</template>
