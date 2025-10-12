<script setup lang="ts">
const props = defineProps<{
  className?: string
}>()
</script>

<template>
  <div :class="`flex items-center justify-center ${props.className ?? ''}`">
    <slot />
  </div>
</template>
