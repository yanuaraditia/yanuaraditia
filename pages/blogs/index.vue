<template>
  <section class="py-16 xl:py-20">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <h1 class="font-bold mb-5 text-3xl xl:text-5xl">
        <span>Blog</span>
      </h1>
      <p class="text-lg mb-10 xl:w-5/12">Software engineer specialized in backend development and micro-services
        ecosystems</p>
      <div class="grid gap-7">
        <div v-for="blog in blogs" :key="`dm-${blog.sys.id}`"
             class="relative p-4 xl:p-7 border dark:border-neutral-700 hover:bg-white hover:shadow-md dark:hover:bg-neutral-800 transition-all rounded-3xl group">
          <span class="text-sm" v-text="blog.fields.blogCategory.fields.title"></span>
          <h2 class="text-lg mb-3 xl:text-xl font-bold group-hover:text-blue-700 dark:group-hover:text-blue-300"
              v-text="blog.fields.title"></h2>
          <p class="" v-text="blog.fields.description"></p>
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
import {getAllBlogs} from "~/repositories/blogRepository";
const blogs = await getAllBlogs()

useHead({
  title: "Blog"
})
</script>

<style scoped>

</style>
