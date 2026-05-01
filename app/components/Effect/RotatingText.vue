<script setup lang="ts">
import { AnimatePresence, Motion, type Transition } from 'motion-v'

interface RotatingTextProps {
  texts: string[]
  rotationInterval?: number
  loop?: boolean
  auto?: boolean
  transition?: Transition
  mainClassName?: string
}

const props = withDefaults(defineProps<RotatingTextProps>(), {
  rotationInterval: 2200,
  loop: true,
  auto: true,
  transition: () =>
    ({
      type: 'spring',
      damping: 22,
      stiffness: 240
    }) as Transition,
  mainClassName: ''
})

const cn = (...classes: (string | undefined | null | boolean)[]): string =>
  classes.filter(Boolean).join(' ')

const currentTextIndex = ref(0)
const isClient = import.meta.client
let intervalId: ReturnType<typeof setInterval> | null = null

const next = (): void => {
  const isAtEnd = currentTextIndex.value === props.texts.length - 1
  currentTextIndex.value = isAtEnd
    ? props.loop
      ? 0
      : currentTextIndex.value
    : currentTextIndex.value + 1
}

const cleanupInterval = (): void => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

const startInterval = (): void => {
  if (isClient && props.auto) {
    intervalId = setInterval(next, props.rotationInterval)
  }
}

if (isClient) {
  watch(
    () => [props.auto, props.rotationInterval] as const,
    () => {
      cleanupInterval()
      startInterval()
    },
    { immediate: true }
  )

  onUnmounted(cleanupInterval)
}

const longest = computed(() =>
  props.texts.reduce((a, b) => (b.length > a.length ? b : a), '')
)
</script>

<template>
  <span
    :class="
      cn(
        'relative inline-grid overflow-hidden align-bottom leading-[1.1]',
        mainClassName
      )
    "
  >
    <!-- A11y: real text -->
    <span class="sr-only">{{ texts[isClient ? currentTextIndex : 0] }}</span>

    <!-- Spacer reserves width/height of the longest entry; placed in the same grid cell -->
    <span
      aria-hidden="true"
      class="invisible whitespace-pre col-start-1 row-start-1"
    >
      {{ longest }}
    </span>

    <!-- Animated text shares the same grid cell so it doesn't push layout -->
    <span
      aria-hidden="true"
      class="col-start-1 row-start-1 inline-block relative"
    >
      <AnimatePresence mode="popLayout" :initial="false">
        <Motion
          :key="isClient ? currentTextIndex : 'ssr'"
          tag="span"
          class="inline-block whitespace-pre"
          :initial="{ y: '100%' }"
          :animate="{ y: '0%' }"
          :exit="{ y: '-100%', position: 'absolute' }"
          :transition="transition"
        >
          {{ texts[isClient ? currentTextIndex : 0] }}
        </Motion>
      </AnimatePresence>
    </span>
  </span>
</template>
