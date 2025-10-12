<script setup lang="ts">
const props = defineProps<{
  color?: string
  image?: string
  title: string
  description?: string
  to: string
  fit?: boolean
}>()
</script>
<template>
  <div
    class="rounded-2xl overflow-hidden relative group hover:bg-surface-container-high bg-surface-container grid gap-3"
  >
    <div
      class="rounded-xl thumbnail aspect-video overflow-hidden flex items-center justify-center"
      :style="{
        backgroundColor: props.color
      }"
    >
      <NuxtImg
        :src="props.image"
        :class="{
          'w-full': !props.fit
        }"
        alt="Project Image"
      />
    </div>
    <div class="p-6 pt-3">
      <div class="mb-3 title">
        <h3 class="text-xl mb-3 font-display font-bold">
          {{ props.title }}
        </h3>
        <p class="line-clamp-3">{{ props.description }}</p>
      </div>
      <slot />
    </div>
    <NuxtLink
      :to="props.to"
      class="absolute inset-0 z-10"
      aria-label="View Project Details"
    />
  </div>
</template>
