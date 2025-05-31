<script setup lang="ts">
const route = useRoute()
const { slug } = route.params
const { data: blog } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(route.path).first()
)

if (!blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog not found'
  })
}

useSeoMeta({
  title: blog.value.title,
  description: blog.value.description,
  ogImage: blog.value.image ?? '',
  ogUrl: blog.value.path
})
</script>

<template>
  <UiCardRead v-if="blog" :item="blog" />
  <div class="prose max-w-none dark:prose-invert xl:w-9/12 xl:my-24 mx-auto">
    <ContentRenderer v-if="blog" :value="blog" />
  </div>
</template>
