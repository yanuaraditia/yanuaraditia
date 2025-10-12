<script setup lang="ts">
const props = defineProps<{
  className?: string
  src?: string
}>()
</script>

<template>
  <div :class="`flex items-center justify-center ${props.className ?? ''}`">
    <img
      v-if="props.src"
      :src="props.src"
      alt="icon"
      class="w-16 h-16 object-contain"
    />
  </div>
</template>
