<template>
  <div
    ref="windowRef"
    :class="`fixed bg-surface-container/30 backdrop-blur-2xl rounded-2xl overflow-hidden transition-all ${
      isActive
        ? 'z-50 shadow-2xl border border-outline-variant/30'
        : 'z-40 shadow-lg border border-outline-variant/20'
    }`"
    :style="windowStyle"
    @mousedown="bringToFront"
  >
    <!-- macOS Title Bar -->
    <div
      ref="titleBarRef"
      class="flex items-center justify-between px-4 py-3 cursor-move select-none"
      @mousedown="handleMouseDown"
    >
      <!-- Traffic Light Buttons -->
      <div class="flex items-center gap-2">
        <button
          aria-label="Close"
          :class="`w-3 h-3 rounded-full transition-colors ${
            isActive
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-gray-400 dark:bg-gray-500 hover:bg-red-500'
          }`"
          @click="closeWindow"
          @mousedown.stop
        />
        <button
          aria-label="Minimize"
          :class="`w-3 h-3 rounded-full transition-colors ${
            isActive
              ? 'bg-yellow-500 hover:bg-yellow-600'
              : 'bg-gray-400 dark:bg-gray-500 hover:bg-yellow-500'
          }`"
          disabled
          @mousedown.stop
        />
        <button
          aria-label="Maximize"
          :class="`w-3 h-3 rounded-full transition-colors ${
            isActive
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gray-400 dark:bg-gray-500 hover:bg-green-500'
          }`"
          disabled
          @mousedown.stop
        />
      </div>

      <!-- Window Title -->
      <div class="flex-1 text-center">
        <slot name="title">
          <h2
            :class="`text-sm font-medium transition-colors ${
              isActive
                ? 'text-gray-900 dark:text-gray-100'
                : 'text-gray-500 dark:text-gray-400'
            }`"
          >
            {{ title }}
          </h2>
        </slot>
      </div>

      <!-- Right spacer to center title -->
      <div class="w-16"></div>
    </div>

    <!-- Window Content -->
    <div class="overflow-auto" :style="{ height: `${height - 60}px` }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useMotionValue, useSpring, type SpringOptions } from 'motion-v'

interface WindowProps {
  id: string
  title: string
  initialX?: number
  initialY?: number
  width?: number
  height?: number
  minWidth?: number
  minHeight?: number
  isActive?: boolean
}

const props = withDefaults(defineProps<WindowProps>(), {
  initialX: 100,
  initialY: 100,
  width: 800,
  height: 600,
  minWidth: 400,
  minHeight: 300,
  isActive: false
})

const emit = defineEmits<{
  close: [id: string]
  minimize: [id: string]
  maximize: [id: string]
  focus: [id: string]
  move: [id: string, x: number, y: number]
}>()

const windowRef = ref<HTMLElement>()
const titleBarRef = ref<HTMLElement>()

// Motion values for smooth animations
const motionX = useMotionValue(props.initialX)
const motionY = useMotionValue(props.initialY)
const motionScale = useMotionValue(0.8)
const motionOpacity = useMotionValue(0)

// Spring animations for smooth movement
const springConfig: SpringOptions = { mass: 0.5, stiffness: 400, damping: 30 }
const animatedX = useSpring(motionX, springConfig)
const animatedY = useSpring(motionY, springConfig)
const animatedScale = useSpring(motionScale, springConfig)
const animatedOpacity = useSpring(motionOpacity, springConfig)

// Window position and size
const width = ref(props.width)
const height = ref(props.height)

// Manual drag implementation
let isDragging = false
let dragStartX = 0
let dragStartY = 0
let windowStartX = 0
let windowStartY = 0

const handleMouseDown = (event: MouseEvent) => {
  isDragging = true
  dragStartX = event.clientX
  dragStartY = event.clientY
  windowStartX = currentX.value
  windowStartY = currentY.value

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  event.preventDefault()
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging) return

  const deltaX = event.clientX - dragStartX
  const deltaY = event.clientY - dragStartY

  const newX = Math.max(0, windowStartX + deltaX)
  const newY = Math.max(0, windowStartY + deltaY)

  motionX.set(newX)
  motionY.set(newY)
  emit('move', props.id, newX, newY)
}

const handleMouseUp = () => {
  isDragging = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
}

// Reactive values for template binding
const currentX = ref(props.initialX)
const currentY = ref(props.initialY)
const currentScale = ref(0.8)
const currentOpacity = ref(0)

// Subscribe to motion value changes
onMounted(() => {
  animatedX.on('change', (value) => {
    currentX.value = value
  })
  animatedY.on('change', (value) => {
    currentY.value = value
  })
  animatedScale.on('change', (value) => {
    currentScale.value = value
  })
  animatedOpacity.on('change', (value) => {
    currentOpacity.value = value
  })
})

// Animated window style
const windowStyle = computed(() => ({
  transform: `translate(${currentX.value}px, ${currentY.value}px) scale(${currentScale.value})`,
  opacity: currentOpacity.value,
  width: `${width.value}px`,
  height: `${height.value}px`,
  minWidth: `${props.minWidth}px`,
  minHeight: `${props.minHeight}px`,
  transformOrigin: 'center center'
}))

// Window entrance animation
const showWindow = () => {
  motionScale.set(1)
  motionOpacity.set(1)
}

// Window exit animation
const hideWindow = () => {
  motionScale.set(0.8)
  motionOpacity.set(0)
}

const bringToFront = () => {
  emit('focus', props.id)
}

const closeWindow = () => {
  // Animate window close
  hideWindow()
  // Emit close after animation delay
  setTimeout(() => {
    emit('close', props.id)
  }, 200)
}

onMounted(() => {
  // Use initial props position instead of centering
  motionX.set(props.initialX)
  motionY.set(props.initialY)

  // Update the current values
  currentX.value = props.initialX
  currentY.value = props.initialY

  // Animate window entrance
  showWindow()
})

onUnmounted(() => {
  // Cleanup animations
  hideWindow()
})
</script>
