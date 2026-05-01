<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

useSeoMeta({
  title: 'Blog',
  description: 'Read my latest blog posts and insights.',
  ogUrl: '/blog'
})
</script>

<template>
  <section>
    <div
      class="chamfer-sm border-b flex flex-col gap-2 md:flex-row md:justify-between md:items-center bg-background p-6 lg:p-10"
    >
      <h1 class="text-3xl font-bold font-display tracking-tight">Blog</h1>
      <p class="text-on-surface-variant text-base md:text-lg">
        Read my latest blog posts and insights.
      </p>
    </div>

    <BlogCard v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>
