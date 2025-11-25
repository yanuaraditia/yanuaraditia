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
    class="rounded-2xl overflow-hidden relative group bg-surface-container/30 backdrop-blur border border-outline-variant/30 grid gap-3"
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
