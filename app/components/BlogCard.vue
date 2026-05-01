<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'

defineProps<{
  post: BlogCollectionItem
}>()

const formatDate = (d?: string | Date) => {
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch {
    return ''
  }
}
</script>

<template>
  <NuxtLink
    :to="post.path"
    class="group block chamfer-sm border-b bg-background transition-colors overflow-hidden"
  >
    <div class="grid md:grid-cols-2">
      <!-- Left: visual panel -->
      <div
        class="relative overflow-hidden min-h-56 md:min-h-full bg-surface-container"
      >
        <NuxtImg
          v-if="post.image"
          :src="post.image"
          :alt="post.title"
          class="absolute inset-0 size-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Floating date chip -->
        <div
          v-if="post.date"
          class="absolute bottom-4 left-4 chamfer-sm bg-background/90 backdrop-blur-md ring-1 ring-border/40 px-3 py-2 flex items-center gap-2"
        >
          <Icon
            name="solar:calendar-linear"
            size="14px"
            class="text-super"
          />
          <span class="text-xs text-on-surface font-mono">
            {{ formatDate(post.date) }}
          </span>
        </div>
      </div>

      <!-- Right: text -->
      <div class="flex flex-col justify-between gap-6 p-8 md:p-10">
        <div>
          <p
            class="text-xs font-mono tracking-widest text-on-surface-variant uppercase mb-4"
          >
            Article
          </p>
          <h3
            class="text-2xl md:text-3xl lg:text-4xl font-bold font-display tracking-tight leading-tight mb-4"
          >
            {{ post.title }}
          </h3>
          <p
            v-if="post.description"
            class="text-on-surface-variant text-sm md:text-base line-clamp-3"
          >
            {{ post.description }}
          </p>
        </div>

        <div class="flex items-center justify-between gap-4">
          <UiButton
            variant="accent"
            size="sm"
            class="group-hover:text-primary"
            tabindex="-1"
          >
            Read Article
            <Icon
              name="lucide:arrow-up-right"
              size="14px"
              class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </UiButton>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
