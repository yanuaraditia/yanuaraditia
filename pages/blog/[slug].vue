<script setup lang="ts">
const route = useRoute()
const { slug } = route.params
const { data: blog } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(route.path).first()
)
</script>

<template>
  <UiCardRead v-if="blog" :item="blog" />
  <div class="prose max-w-none dark:prose-invert">
    <ContentRenderer v-if="blog" :value="blog" />
  </div>
</template>
