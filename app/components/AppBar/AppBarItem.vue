<script setup lang="ts">
import { cn } from '~/utils/tailwind'

const props = defineProps<{
  label: string
  to?: string
  icon: string
  activeIcon: string
}>()

const route = useRoute()
const isActive = computed(() => {
  if (!props.to) return false
  if (props.to === '/') return route.path === '/'
  return route.path === props.to || route.path.startsWith(props.to)
})

const icon = computed(() => (isActive.value ? props.activeIcon : props.icon))

const { isLoading } = useLoadingIndicator()
</script>

<template>
  <NuxtLink
    :to="props.to"
    :class="
      cn(
        'relative inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
        isActive
          ? 'text-primary'
          : 'text-on-surface-variant hover:text-on-surface'
      )
    "
  >
    <span>{{ props.label }}</span>
  </NuxtLink>
</template>
