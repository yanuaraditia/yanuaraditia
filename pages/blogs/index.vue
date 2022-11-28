<template>
  <section class="py-16 xl:mt-14">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <h1 class="font-bold mb-5 text-3xl xl:text-5xl">
        <span>Blog</span>
      </h1>
      <p class="text-lg mb-10 xl:w-5/12">Software engineer specialized in backend development and micro-services ecosystems</p>
      <div class="grid xl:grid-cols-3 gap-5">
        <div v-for="blog in data.blogs" :key="`dm-${blog.sys.id}`" class="relative group">
          <div class="mb-3 aspect-video overflow-hidden rounded-xl group-hover:shadow-2xl transition-all">
            <img :src="blog.fields.image.fields.file.url" alt="" class="w-full">
          </div>
          <span class="text-sm" v-text="blog.fields.blogCategory.fields.title"></span>
          <h4 class="text-lg font-bold group-hover:text-red-700" v-text="blog.fields.title"></h4>
          <nuxt-link :to="`/blogs/${blog.fields.slug}`" class="absolute top-0 left-0 w-full h-full"></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "index",
}
</script>

<script setup>
const {$client} = useNuxtApp()

const {data} = await useAsyncData('data', () => {
  return Promise.all([
      $client.getEntries({
        content_type: "blogs",
        order: '-sys.createdAt',
      })
  ]).then(([blogs]) => {
    return {
      blogs: blogs.items
    }
  })
})

useHead({
  title: "Blog"
})
</script>

<style scoped>

</style>
