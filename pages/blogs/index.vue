<template>
  <section class="py-16 xl:py-24">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <h1 class="font-bold mb-5 text-3xl xl:text-5xl">
        <span>Blog</span>
      </h1>
      <p class="text-lg mb-10 xl:w-5/12">Software engineer specialized in backend development and micro-services ecosystems</p>
      <div class="grid xl:grid-cols-3 gap-7">
        <div v-for="blog in blogs" :key="`dm-${blog.sys.id}`" class="relative p-4 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all bg-red-100 rounded-3xl group">
          <div class="mb-3 aspect-video bg-white dark:bg-neutral-700 overflow-hidden rounded-xl group-hover:shadow-2xl transition-all">
            <nuxt-img :src="`https://`+blog.fields.image.fields.file.url" :alt="blog.fields.title"
                      sizes="sm:464px lg:396px"
                      class="w-full"/>
          </div>
          <span class="text-sm" v-text="blog.fields.blogCategory.fields.title"></span>
          <h4 class="text-lg font-bold group-hover:text-red-700 dark:group-hover:text-neutral-300" v-text="blog.fields.title"></h4>
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
import {useBlogStore} from "~/stores/blogStore";

const store = useBlogStore()
await store.fetchBlogs()
const blogs = computed(()=> store.getBlogs)

useHead({
  title: "Blog"
})
</script>

<style scoped>

</style>
