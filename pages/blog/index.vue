<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const activeBlog = useState<string>(
  'active-blog',
  () => posts.value?.[0]?.id || ''
)
</script>

<template>
  <div>
    <h1
      class="text-2xl xl:text-4xl 2xl:text-5xl mb-3 font-display font-bold leading-tight"
    >
      Blog
    </h1>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  </div>
</template>
