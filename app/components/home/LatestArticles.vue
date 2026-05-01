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
  <section id="articles">
    <div
      class="text-center chamfer-sm border-b flex justify-between lg:items-center bg-background p-6 lg:p-10"
    >
      <h2 class="text-3xl font-bold font-display tracking-tight">
        Latest Articles
      </h2>

      <UiButton variant="accent" as-child>
        <NuxtLink to="/blog">
          View all articles
          <Icon name="lucide:arrow-right" size="16px" class="ml-1" />
        </NuxtLink>
      </UiButton>
    </div>

    <BlogCard v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>
