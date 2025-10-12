<template>
  <div
    ref="windowRef"
    :class="[
      'border border-outline-variant/30 rounded-3xl fixed left-1/2 top-1/2 bg-surface/80 backdrop-blur-md shadow-xl flex flex-col cursor-move',
      {
        'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2': !isMounted
      }
    ]"
    :style="{
      left: isMounted ? `${position.x}px` : undefined,
      top: isMounted ? `${position.y}px` : undefined,
      width: isMounted ? `${size.width}px` : '50%',
      height: isMounted ? `${size.height}px` : '45%',
      transform: isMounted ? 'none' : undefined
    }"
    @mousedown="startDrag"
  >
    <div class="absolute top-4 left-4 flex gap-1 pointer-events-none">
      <button
        class="w-3 h-3 bg-red-600 text-transparent hover:text-red-900 rounded-full pointer-events-auto"
        @click="hide = !hide"
      >
        <Icon name="material-symbols:close" size="12px" />
      </button>
      <button
        class="w-3 h-3 bg-outline-variant/40 rounded-full pointer-events-auto"
      ></button>
      <button
        class="w-3 h-3 bg-outline-variant/40 rounded-full pointer-events-auto"
      ></button>
    </div>

    <!-- Resize Handles -->
    <!-- Corner handles -->
    <div
      class="absolute top-0 left-0 w-3 h-3 cursor-nw-resize opacity-0 hover:opacity-100"
      @mousedown="startResize($event, 'top-left')"
    />
    <div
      class="absolute top-0 right-0 w-3 h-3 cursor-ne-resize opacity-0 hover:opacity-100"
      @mousedown="startResize($event, 'top-right')"
    />
    <div
      class="absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize opacity-0 hover:opacity-100"
      @mousedown="startResize($event, 'bottom-left')"
    />
    <div
      class="absolute bottom-0 right-0 w-3 h-3 cursor-se-resize opacity-0 hover:opacity-100"
      @mousedown="startResize($event, 'bottom-right')"
    />

    <!-- Edge handles -->
    <div
      class="absolute top-0 left-3 right-3 h-1 cursor-n-resize opacity-0 hover:opacity-100"
      @mousedown="startResize($event, 'top')"
    />
    <div
      class="absolute bottom-0 left-3 right-3 h-1 cursor-s-resize opacity-0 hover:opacity-100"
      @mousedown="startResize($event, 'bottom')"
    />
    <div
      class="absolute left-0 top-3 bottom-3 w-1 cursor-w-resize opacity-0 hover:opacity-100"
      @mousedown="startResize($event, 'left')"
    />
    <div
      class="absolute right-0 top-3 bottom-3 w-1 cursor-e-resize opacity-0 hover:opacity-100"
      @mousedown="startResize($event, 'right')"
    />

    <slot />
  </div>
</template>

<script setup lang="ts">
const windowRef = useTemplateRef('windowRef')

const isMounted = ref(false)
const hide = ref(false)

// Initialize position and size
const position = ref({
  x: 0,
  y: 0
})

const size = ref({
  width: 0,
  height: 0
})

// Initialize position and size on mount
onMounted(() => {
  if (windowRef.value) {
    const windowWidth = windowRef.value.offsetWidth
    const windowHeight = windowRef.value.offsetHeight
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    position.value = {
      x: (screenWidth - windowWidth) / 2,
      y: (screenHeight - windowHeight) / 2
    }

    size.value = {
      width: windowWidth,
      height: windowHeight
    }

    isMounted.value = true
  }
})

// Drag functionality
let isDragging = false
let dragOffset = { x: 0, y: 0 }

const startDrag = (event: MouseEvent) => {
  // Don't drag if clicking on buttons
  if ((event.target as HTMLElement).tagName === 'BUTTON') {
    return
  }

  isDragging = true
  dragOffset = {
    x: event.clientX - position.value.x,
    y: event.clientY - position.value.y
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  document.body.style.userSelect = 'none'
  document.body.style.cursor = 'grabbing'

  event.preventDefault()
}

const onMouseMove = (event: MouseEvent) => {
  if (!isDragging) return

  const newPosition = {
    x: Math.max(0, event.clientX - dragOffset.x),
    y: Math.max(0, event.clientY - dragOffset.y)
  }

  // Constrain to viewport
  if (windowRef.value) {
    const maxX = window.innerWidth - windowRef.value.offsetWidth
    const maxY = window.innerHeight - windowRef.value.offsetHeight

    newPosition.x = Math.min(newPosition.x, maxX)
    newPosition.y = Math.min(newPosition.y, maxY)
  }

  position.value = newPosition
}

const onMouseUp = () => {
  isDragging = false
  isResizing = false
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mousemove', onResizeMove)
  document.removeEventListener('mouseup', onMouseUp)
  document.body.style.userSelect = ''
  document.body.style.cursor = ''
}

// Resize functionality
let isResizing = false
let resizeDirection = ''
let initialSize = { width: 0, height: 0 }
let initialPosition = { x: 0, y: 0 }
let initialMouse = { x: 0, y: 0 }

const startResize = (event: MouseEvent, direction: string) => {
  event.stopPropagation()
  event.preventDefault()

  isResizing = true
  resizeDirection = direction
  initialSize = { ...size.value }
  initialPosition = { ...position.value }
  initialMouse = { x: event.clientX, y: event.clientY }

  document.addEventListener('mousemove', onResizeMove)
  document.addEventListener('mouseup', onMouseUp)
  document.body.style.userSelect = 'none'
  document.body.style.cursor = getResizeCursor(direction)
}

const onResizeMove = (event: MouseEvent) => {
  if (!isResizing) return

  const deltaX = event.clientX - initialMouse.x
  const deltaY = event.clientY - initialMouse.y

  const newSize = { ...initialSize }
  const newPosition = { ...initialPosition }

  // Calculate new size and position based on resize direction
  if (resizeDirection.includes('right')) {
    newSize.width = Math.max(300, initialSize.width + deltaX)
  }
  if (resizeDirection.includes('left')) {
    newSize.width = Math.max(300, initialSize.width - deltaX)
    newPosition.x = Math.max(0, initialPosition.x + deltaX)
  }
  if (resizeDirection.includes('bottom')) {
    newSize.height = Math.max(200, initialSize.height + deltaY)
  }
  if (resizeDirection.includes('top')) {
    newSize.height = Math.max(200, initialSize.height - deltaY)
    newPosition.y = Math.max(0, initialPosition.y + deltaY)
  }

  // Constrain to viewport
  const maxWidth = window.innerWidth - newPosition.x
  const maxHeight = window.innerHeight - newPosition.y

  newSize.width = Math.min(newSize.width, maxWidth)
  newSize.height = Math.min(newSize.height, maxHeight)

  size.value = newSize
  position.value = newPosition
}

const getResizeCursor = (direction: string): string => {
  const cursors: Record<string, string> = {
    top: 'n-resize',
    bottom: 's-resize',
    left: 'w-resize',
    right: 'e-resize',
    'top-left': 'nw-resize',
    'top-right': 'ne-resize',
    'bottom-left': 'sw-resize',
    'bottom-right': 'se-resize'
  }
  return cursors[direction] || 'default'
}

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mousemove', onResizeMove)
  document.removeEventListener('mouseup', onMouseUp)
})
</script>
