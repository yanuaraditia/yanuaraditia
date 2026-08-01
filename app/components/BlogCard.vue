<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'
import { Motion } from 'motion-v'

const props = withDefaults(
  defineProps<{
    post: BlogCollectionItem
    index?: number
  }>(),
  { index: 0 }
)

const publishedDate = computed(() =>
  new Date(props.post.date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
)
</script>

<template>
  <Motion
    tag="article"
    class="group relative flex min-h-[340px] flex-col bg-background p-6 transition-colors hover:bg-surface sm:p-8"
    :initial="{ opacity: 0, y: 22 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true, margin: '-8% 0px' }"
    :transition="{ duration: 0.5, delay: props.index * 0.08 }"
  >
    <NuxtLink
      :to="post.path"
      class="absolute inset-0 z-20"
      :aria-label="`Read ${post.title}`"
    />

    <div
      class="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
    >
      <span>note / {{ String(props.index + 1).padStart(2, '0') }}</span>
      <time :datetime="String(post.date)">{{ publishedDate }}</time>
    </div>

    <div class="mt-auto pt-16">
      <h3
        class="text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-3xl"
      >
        {{ post.title }}
      </h3>
      <p class="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground">
        {{ post.description }}
      </p>
      <div
        class="mt-7 flex items-center justify-between border-t border-border pt-5"
      >
        <span
          class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
          >Read field note</span
        >
        <Icon
          name="solar:arrow-right-linear"
          class="size-4 text-primary transition-transform group-hover:translate-x-1"
        />
      </div>
    </div>
  </Motion>
</template>
