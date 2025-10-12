<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const activeBlog = useState<string>(
  'active-blog',
  () => posts.value?.[0]?.id || ''
)

useSeoMeta({
  title: 'Blog',
  description: 'Read my latest blog posts and insights.',
  ogUrl: '/blog'
})
</script>

<template>
  <WindowTitle>Blog</WindowTitle>

  <WindowContent class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <UiCard
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :description="post.description"
      :image="post.image"
      :to="post.path"
      :class="{
        'active-entry': activeBlog === post.id
      }"
      @mouseenter="activeBlog = post.id"
    />
  </WindowContent>
</template>
