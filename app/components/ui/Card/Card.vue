<script setup lang="ts">
const props = defineProps<{
  color?: string
  image?: string
  title: string
  description?: string
  to: string
  fit?: boolean
}>()

const slots = useSlots()
</script>
<template>
  <div
    class="overflow-hidden relative group bg-linear-to-b from-surface-container-high hover:from-secondary-container transition-all grid gap-3"
  >
    <div
      class="thumbnail aspect-video overflow-hidden grayscale-100 group-hover:grayscale-0 flex items-center justify-center"
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
      <div
        class="title"
        :class="{
          'mb-3': slots.default
        }"
      >
        <h3 class="text-xl mb-3 font-display font-bold line-clamp-1">
          {{ props.title }}
        </h3>
        <p class="line-clamp-2">{{ props.description }}</p>
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
