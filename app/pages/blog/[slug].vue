<script setup lang="ts">
import { formatDate } from '~/utlils/formatDate'

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

const content = useTemplateRef('content')
const readingTime = computed(() => {
  // show estimated reading time from content var $el
  if (!content.value || !content.value.$el) return ''
  const text = content.value.$el.innerText || ''
  const words = text.split(/\s+/).filter(Boolean).length
  const minutes = Math.ceil(words / 200) // Assuming average reading speed of 200 words per minute
  return `${minutes} min read`
})
</script>

<template>
  <UiCardRead v-if="blog" :item="blog">
    <div class="flex gap-1 items-center mb-2">
      <Icon name="fluent:calendar-16-regular" size="24px" />
      {{ formatDate(blog.date ?? '') }}
    </div>
    <div class="flex gap-1 items-center">
      <Icon name="fluent:timer-16-regular" size="24px" />
      {{ readingTime ?? '-' }}
    </div>
  </UiCardRead>
  <div class="prose max-w-none dark:prose-invert xl:w-9/12 xl:my-24 mx-auto">
    <ContentRenderer v-if="blog" ref="content" :value="blog" />
  </div>
</template>
