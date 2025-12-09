<script setup lang="ts">
import { cn } from '@/utlils/tailwind'
const props = defineProps<{
  label: string
  to?: string
  icon: string
  activeIcon: string
}>()

const route = useRoute()
const isActive = computed(() => {
  if (!props.to) return
  if (props.to === '/') {
    return route.path === '/'
  }
  return route.path === props.to || route.path.startsWith(props.to)
})

const icon = computed(() => {
  return isActive.value ? props.activeIcon : props.icon
})

const { isLoading } = useLoadingIndicator()
</script>

<template>
  <div
    :class="
      cn(
        'relative group flex items-center gap-1 font-medium bg-linear-to-b px-3.5 py-3',
        {
          'from-primary/30 text-primary': isActive
        }
      )
    "
  >
    <div class="shrink-0">
      <Icon
        :name="isLoading && isActive ? 'svg-spinners:bars-rotate-fade' : icon"
        size="20px"
      />
    </div>
    <span> {{ props.label }} </span>
    <NuxtLink :to="props.to" class="absolute inset-0" />
  </div>
</template>
