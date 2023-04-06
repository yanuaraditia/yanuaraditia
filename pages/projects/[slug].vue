<template>
  <section class="py-16 xl:py-20">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <div class="xl:mx-auto xl:w-7/12">
        <span class="text-primary-600 font-medium">Work</span>
        <h1 class="font-bold mb-5 mt-3 text-3xl xl:text-5xl">
          <span v-text="project.fields.title"></span>
        </h1>
        <p class="text-lg mb-7" v-text="project.fields.description"></p>
        <div class="flex gap-3.5 mb-10 place-items-center">
          <div>
            <div class="aspect-square w-16 p-1 border-2 border-primary-600 h-16 rounded-full overflow-hidden">
              <img src="~/assets/yan-reg.webp" class="rounded-full w-full" alt="">
            </div>
          </div>
          <div>
            <div class="font-semibold text-xl">Yanuar Aditia</div>
            <div class="text-sm flex gap-3 dark:text-neutral-400">
              <span v-text="formatDate(project.sys.createdAt)"></span>
              <span>•</span>
              <span>5 minute read</span>
            </div>
          </div>
        </div>
        <div class="mb-3 aspect-video overflow-hidden rounded-xl group-hover:shadow-2xl relative bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-600 dark:to-neutral-800 transition-all">
          <nuxt-img loading="lazy" :src="`https://`+project.fields.image.fields.file.url" :alt="project.fields.image.fields.title" class="w-full absolute left-7 top-7"/>
        </div>
        <div class="prose dark:prose-invert max-w-none" v-html="project.contentRendered"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "slug",
  methods: {
    formatDate(dateString) {
      const options = { year: "numeric", month: "short", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }
  }
}
</script>

<script setup>
import {getSingle} from "~/repositories/projectRepository";

const route = useRoute()
const project = await getSingle(route.params.slug)

useHead({
  title: project.fields.title ?? '',
  meta: [
    {
      name: 'twitter:image',
      content: project.fields.image.fields.file.url
    },
    {
      name: 'og:image',
      content: project.fields.image.fields.file.url
    },
    {
      name: 'description',
      content: project.fields.description
    }
  ]
})

</script>

<style scoped>

</style>
