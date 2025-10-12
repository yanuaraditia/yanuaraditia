<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  type MotionValue
} from 'motion-v'
import type { DockItemData } from './types'

const props = defineProps<{
  className?: string
  to?: string
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

const labelContent = computed(() => {
  const v = props.item.label as any
  return typeof v === 'function' ? v() : v
})
</script>

<template>
  <div
    ref="itemRef"
    :style="{ width: `${currentSize}px`, height: `${currentSize}px` }"
    :class="`relative cursor-pointer inline-flex items-center justify-center ${
      props.className ?? ''
    }`"
    tabindex="0"
    role="button"
    aria-haspopup="true"
    @mouseenter="handleHoverStart"
    @mouseleave="handleHoverEnd"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <NuxtLink :to="props.to">
      <DockIcon :src="item.icon" />

      <DockLabel :isHovered="isHovered">
        <component v-if="typeof labelContent === 'object'" :is="labelContent" />
        <span v-else>{{ String(labelContent) }}</span>
      </DockLabel>
    </NuxtLink>
  </div>
</template>
