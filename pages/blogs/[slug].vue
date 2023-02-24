<template>
  <section class="py-16 xl:py-24">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <div class="xl:mx-auto xl:w-7/12">
        <span v-text="blog.fields.blogCategory.fields.title"></span>
        <h1 class="font-bold mb-5 mt-3 xl:leading-tight text-3xl xl:text-5xl">
          <span v-text="blog.fields.title"></span>
        </h1>
        <p class="text-lg mb-7" v-text="blog.fields.description"></p>
        <div class="flex gap-3.5 mb-10 place-items-center">
          <div>
            <div class="aspect-square w-16 h-16 rounded-full overflow-hidden">
              <img src="~/assets/yan-reg.png" class="w-full" alt="">
            </div>
          </div>
          <div>
            <div class="font-semibold text-xl">Yanuar Aditia</div>
            <div class="text-sm flex gap-3 dark:text-neutral-400">
              <span v-text="formatDate(blog.sys.createdAt)"></span>
              <span>•</span>
              <span>5 minute read</span>
            </div>
          </div>
        </div>
        <nuxt-img :src="`https://`+blog.fields.image.fields.file.url" :alt="blog.fields.image.fields.title" class="w-full rounded-lg mb-5" loading="lazy"/>
        <div class="prose dark:prose-invert max-w-none" v-html="blog.contentRendered"></div>
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
import 'highlight.js/styles/monokai-sublime.css'
import {MarkedRenderer} from "~/utils/markedRenderer";

const {$client} = useNuxtApp()
const route = useRoute()
const blog = ref({})

await useAsyncData('blog', () => {
  return Promise.all([
    $client.getEntries({
      content_type: "blogs",
      'fields.slug[in]': route.params.slug,
      order: '-sys.createdAt',
    })
  ]).then(([blogs]) => {
    blog.value = blogs.items[0];

    const render = MarkedRenderer(blog.value.fields.content)
    blog.value.contentRendered = render.rendered
    blog.value.toc = render.toc
  })
})

if (typeof blog === 'undefined') {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found"
  })
}

useHead({
  title: blog.value.fields.title ?? '',
  meta: [
    {
      name: 'twitter:image',
      content: blog.value.fields.image.fields.file.url
    },
    {
      name: 'og:image',
      content: blog.value.fields.image.fields.file.url
    },
    {
      name: 'description',
      content: blog.value.fields.description
    }
  ]
})
</script>

<style scoped>

</style>
