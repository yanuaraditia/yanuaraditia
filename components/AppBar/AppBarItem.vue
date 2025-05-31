<script setup lang="ts">
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
</script>

<template>
  <div
    :class="{
      'text-secondary': isActive,
      'relative group flex flex-col items-center gap-0.5': true
    }"
  >
    <div
      :class="[
        'p-3 block rounded-full',
        {
          'bg-secondary-container text-on-secondary-container': isActive,
          'group-hover:bg-surface-container-highest': !isActive
        }
      ]"
    >
      <Icon :name="icon" size="24px" />
    </div>
    <NuxtLink :to="props.to" class="absolute inset-0" />
  </div>
</template>
