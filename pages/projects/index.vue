<template>
  <section class="py-16 xl:py-20">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <h1 class="font-bold mb-5 text-3xl xl:text-5xl">
        <span>Project</span>
      </h1>
      <p class="text-lg mb-10 xl:w-5/12">Main and side-project portfolio. There all my professional project excluding professional</p>
      <div class="grid xl:grid-cols-3 gap-10">
        <div v-for="blog in projects" :key="`dm-${blog.sys.id}`" class="relative group">
          <div class="mb-3 aspect-video overflow-hidden rounded-xl group-hover:shadow-2xl relative bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-600 dark:to-neutral-800 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-blue-600 transition-all">
            <nuxt-img loading="lazy" :src="`https://`+blog.fields.image.fields.file.url" alt="" class="w-full absolute left-7 top-7"/>
          </div>
          <h4 class="text-lg xl:text-xl mb-3 font-bold group-hover:text-blue-700" v-text="blog.fields.title"></h4>
          <p v-text="blog.fields.description" class="text-sm dark:text-neutral-400"></p>
          <nuxt-link :to="`/projects/${blog.fields.slug}`" class="absolute top-0 left-0 w-full h-full"></nuxt-link>
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
import {getAllProjects} from "~/repositories/projectRepository";

const projects = await getAllProjects()

useHead({
  title: "Project"
})
</script>

<style scoped>

</style>
