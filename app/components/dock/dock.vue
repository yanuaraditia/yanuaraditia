<script setup lang="ts">
import {
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions
} from 'motion-v'
import type { DockItemData, DockProps } from './types'

const props = withDefaults(defineProps<DockProps>(), {
  className: '',
  distance: 200,
  panelHeight: 70,
  baseItemSize: 50,
  dockHeight: 256,
  magnification: 70,
  spring: () => ({ mass: 0.1, stiffness: 150, damping: 12 } as SpringOptions)
})

const items: DockItemData[] = [
  {
    icon: '/images/icon/finder.png',
    label: 'Dock',
    to: '/'
  },
  {
    icon: '/images/icon/home.png',
    label: 'Launchpad',
    to: '/launchpad'
  },
  {
    icon: '/images/icon/project.png',
    label: 'Projects',
    to: '/project'
  },
  {
    icon: '/images/icon/blog.png',
    label: 'Blog',
    to: '/blog'
  },
  {
    icon: '/images/icon/settings.png',
    label: 'About Me',
    to: '/about'
  },
  {
    icon: '/images/icon/terminal.png',
    label: 'Terminal',
    to: '/terminal'
  },
  {
    icon: '/images/icon/github.png',
    label: 'GitHub',
    to: 'https://github.com/yanuaraditia'
  },
  {
    icon: '/images/icon/linkedin.png',
    label: 'LinkedIn',
    to: 'https://linkedin.com/in/yanuaraditia'
  }
]

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
  <div
    :style="{ height: currentHeight + 'px', scrollbarWidth: 'none' }"
    class="mx-2 flex fixed max-w-full items-center"
  >
    <div
      :class="
        cn(
          'fixed bottom-2 left-1/2 transform backdrop-blur-2xl shadow-xl -translate-x-1/2 flex items-end w-fit gap-2 rounded-3xl border-outline-variant/30 border pb-2 px-3',
          props.className
        )
      "
      :style="{ height: props.panelHeight + 'px' }"
      role="toolbar"
      aria-label="Application dock"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <DockItem
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
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
</template>
