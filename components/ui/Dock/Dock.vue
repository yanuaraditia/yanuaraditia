<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions
} from 'motion-v'
import DockItem from './DockItem.vue'
import type { DockProps } from './types'

const props = withDefaults(defineProps<DockProps>(), {
  className: '',
  distance: 150,
  panelHeight: 68,
  baseItemSize: 56,
  dockHeight: 256,
  magnification: 72,
  spring: () => ({ mass: 0.05, stiffness: 300, damping: 20 } as SpringOptions)
})

const mouseX = useMotionValue<number>(Infinity)
const isHovered = useMotionValue<number>(0)
const currentHeight = ref<number>(props.panelHeight)

const maxHeight = computed(() =>
  Math.max(props.dockHeight, props.magnification + props.magnification / 2 + 4)
)

const heightRow = useTransform(
  isHovered,
  [0, 1],
  [props.panelHeight, maxHeight.value]
)
const height = useSpring(heightRow, props.spring)

let unsubscribeHeight: (() => void) | null = null
onMounted(() => {
  unsubscribeHeight = height.on('change', (latest: number) => {
    currentHeight.value = latest
  })
})
onUnmounted(() => unsubscribeHeight?.())

const handleMouseMove = (event: MouseEvent) => {
  isHovered.set(1)
  mouseX.set(event.pageX)
}
const handleMouseLeave = () => {
  isHovered.set(0)
  mouseX.set(Infinity)
}
</script>

<template>
  <!-- Guard SSR -->
  <client-only>
    <div
      :style="{ height: currentHeight + 'px', scrollbarWidth: 'none' }"
      class="mx-2 flex max-w-full items-center"
    >
      <div
        :class="`${props.className} fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-1 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl pt-1 pb-1 px-2`"
        :style="{ height: props.panelHeight + 'px' }"
        role="toolbar"
        aria-label="Application dock"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <DockItem
          v-for="(item, index) in props.items"
          :key="index"
          :class-name="item.className"
          :mouse-x="mouseX"
          :spring="props.spring"
          :distance="props.distance"
          :magnification="props.magnification"
          :base-item-size="props.baseItemSize"
          :item="item"
        />
      </div>
    </div>
  </client-only>
</template>
