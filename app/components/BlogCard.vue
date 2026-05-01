<script setup lang="ts">
import { Motion } from 'motion-v'
import type { BlogCollectionItem } from '@nuxt/content'

defineProps<{
  post: BlogCollectionItem
}>()

const formatPostDate = (date?: string | Date) => {
  if (!date) return ''

  try {
    return formatDate(date, {
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
  <Motion
    tag="div"
    :initial="{ opacity: 0, filter: 'blur(12px)' }"
    :while-in-view="{ opacity: 1, filter: 'blur(0px)' }"
    :transition="{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }"
  >
    <article
      class="group chamfer-sm border-b bg-background transition-colors overflow-hidden p-5 md:p-8 lg:p-10"
    >
      <div class="grid md:grid-cols-3 gap-5 lg:gap-12">
        <!-- Left: visual panel -->
        <div
          class="relative overflow-hidden min-h-44 md:min-h-full aspect-video chamfer-sm bg-surface-container"
        >
          <NuxtLink
            :to="post.path"
            class="absolute inset-0 block"
            :aria-label="`Read article ${post.title}`"
          >
            <NuxtImg
              v-if="post.image"
              :src="post.image"
              :alt="post.title"
              class="absolute inset-0 size-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </NuxtLink>

          <!-- Floating date chip -->
          <div
            v-if="post.date"
            class="absolute bottom-4 left-4 chamfer-sm bg-background/90 backdrop-blur-md ring-1 ring-border/40 px-3 py-2 flex items-center gap-2"
          >
            <Icon
              name="solar:calendar-linear"
              size="14px"
              class="text-primary"
            />
            <span class="text-xs text-on-surface font-mono">
              {{ formatPostDate(post.date) }}
            </span>
          </div>
        </div>

        <!-- Right: text -->
        <div class="flex flex-col justify-between gap-6 md:col-span-2">
          <div>
            <p
              class="text-xs font-mono tracking-widest text-on-surface-variant uppercase mb-4"
            >
              Article
            </p>
            <NuxtLink :to="post.path" class="block mb-4">
              <h3
                class="text-2xl md:text-3xl lg:text-4xl font-bold font-display tracking-tight leading-tight"
              >
                {{ post.title }}
              </h3>
            </NuxtLink>
            <p
              v-if="post.description"
              class="text-on-surface-variant text-sm md:text-base line-clamp-3"
            >
              {{ post.description }}
            </p>
          </div>

          <div class="flex items-center justify-between gap-4">
            <UiButton as-child variant="outline" size="sm">
              <NuxtLink :to="post.path" class="group-hover:text-primary">
                Read Article
                <Icon
                  name="solar:round-arrow-right-linear"
                  size="14px"
                  class="transition-transform"
                />
              </NuxtLink>
            </UiButton>
          </div>
        </div>
      </div>
    </article>
  </Motion>
</template>
