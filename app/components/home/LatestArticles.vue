<script setup lang="ts">
import type { BlogCollectionItem, CollectionQueryBuilder } from '@nuxt/content'

const { data: posts } = await useAsyncData('home-posts', () =>
  (queryCollection('blog') as CollectionQueryBuilder<BlogCollectionItem>)
    .order('date', 'DESC')
    .limit(3)
    .all()
)
</script>

<template>
  <section
    id="articles"
    class="chamfer-sm bg-background px-6 md:px-10 py-16 lg:py-24"
  >
    <div class="text-center mb-12 lg:mb-16">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-3"
      >
        Latest Articles
      </h2>
      <p class="text-on-surface-variant text-base md:text-lg">
        Notes, lessons learned, and things I find worth writing down.
      </p>
    </div>

    <div class="max-w-3xl mx-auto">
      <ul class="border-t border-outline-variant/40">
        <li
          v-for="post in posts"
          :key="post.id"
          class="border-b border-outline-variant/40"
        >
          <NuxtLink
            :to="post.path"
            class="group/item flex items-center gap-4 py-4 px-2 -mx-2 transition-colors hover:bg-surface-container/60"
          >
            <div
              class="shrink-0 size-12 chamfer-sm overflow-hidden flex items-center justify-center ring-1 ring-outline-variant/40 bg-surface-container"
            >
              <NuxtImg
                v-if="post.image"
                :src="post.image"
                :alt="post.title"
                class="size-full object-cover"
              />
              <Icon
                v-else
                name="solar:notes-bold"
                size="20px"
                class="text-on-surface-variant"
              />
            </div>

            <div class="flex-1 min-w-0">
              <h3 class="font-semibold truncate">{{ post.title }}</h3>
              <p v-if="post.description" class="text-sm line-clamp-1">
                {{ post.description }}
              </p>
              <p v-if="post.date" class="text-xs mt-1">
                {{
                  new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })
                }}
              </p>
            </div>

            <Icon
              name="lucide:arrow-up-right"
              size="20px"
              class="shrink-0 transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-primary"
            />
          </NuxtLink>
        </li>
      </ul>

      <div class="mt-8 text-center">
        <UiButton variant="accent" as-child>
          <NuxtLink to="/blog">
            Read all articles
            <Icon name="lucide:arrow-right" size="16px" class="ml-1" />
          </NuxtLink>
        </UiButton>
      </div>
    </div>
  </section>
</template>
