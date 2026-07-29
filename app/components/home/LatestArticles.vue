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
  <section id="articles" class="border-b py-10 lg:py-24">
    <div
      class="container mx-auto flex flex-col gap-3 md:flex-row md:justify-between md:items-center"
    >
      <h2
        class="text-3xl font-bold font-display tracking-tight text-primary mb-5 lg:mb-10"
      >
        Latest Articles
      </h2>

      <UiButton variant="outline" as-child>
        <NuxtLink to="/blog">
          View all articles
          <Icon name="solar:arrow-right-linear" size="16px" class="ml-1" />
        </NuxtLink>
      </UiButton>
    </div>

    <div class="container mx-auto">
      <div class="border divide-y">
        <BlogCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>
