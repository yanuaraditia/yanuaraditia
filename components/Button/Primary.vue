<script setup lang="ts">
defineProps<{
  to: string | Function,
  label: string,
  type?: 'solid' | 'outline'
}>()

const types = {
  solid: 'bg-primary-700 text-white dark:bg-primary-500 dark:text-primary-950 dark:hover:bg-primary-600',
  outline: 'ring-2 ring-primary-700 ring-inset hover:text-white text-primary-800 hover:bg-primary-700 dark:ring-primary-500 dark:hover:bg-primary-500 dark:hover:text-primary-950 dark:text-primary-500'
}
</script>

<template>
  <div :class="[
      'relative text-lg font-medium rounded-full py-3 px-6 text-center transition-all',
      (types[type ?? 'solid'])
  ]">
    <div>
      <span v-text="label"></span>
    </div>
    <NuxtLink v-if="typeof to == 'string'" :to="to" class="absolute inset-0"></NuxtLink>
  </div>
</template>

<style scoped>

</style>
