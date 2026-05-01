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
      class="chamfer-sm border-b flex flex-col gap-3 md:flex-row md:justify-between md:items-center bg-background p-6 lg:p-10"
    >
      <h2 class="text-3xl font-bold font-display text-primary tracking-tight">
        Latest Articles
      </h2>

      <UiButton variant="outline" as-child>
        <NuxtLink to="/blog">
          View all articles
          <Icon name="solar:arrow-right-linear" size="16px" class="ml-1" />
        </NuxtLink>
      </UiButton>
    </div>

    <BlogCard v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>
