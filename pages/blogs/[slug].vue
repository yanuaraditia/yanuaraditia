<template>
  <section class="py-16 xl:mt-14">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <div class="xl:mx-auto xl:w-7/12">
        <span v-text="data.blog.fields.blogCategory.fields.title"></span>
        <h1 class="font-bold mb-5 mt-3 text-3xl xl:text-5xl">
          <span v-text="data.blog.fields.title"></span>
        </h1>
        <p class="text-lg mb-7" v-text="data.blog.fields.description"></p>
        <div class="flex gap-3.5 mb-10 place-items-center">
          <div>
            <div class="aspect-square w-16 h-16 rounded-full overflow-hidden">
              <img src="~/assets/yan-reg.png" class="w-full" alt="">
            </div>
          </div>
          <div>
            <div class="font-semibold text-xl">Yanuar Aditia</div>
            <div class="text-sm flex gap-3 dark:text-neutral-400">
              <span v-text="formatDate(data.blog.sys.createdAt)"></span>
              <span>•</span>
              <span>5 minute read</span>
            </div>
          </div>
        </div>
        <img :src="data.blog.fields.image.fields.file.url" :alt="data.blog.fields.image.fields.title" class="w-full rounded-lg mb-5" loading="lazy"/>
        <div class="prose dark:prose-invert max-w-none" v-html="rendered"></div>
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
import 'highlight.js/styles/qtcreator-dark.css'
let md = ref("");
let rendered = ref("");

const {$client} = useNuxtApp()
const route = useRoute()
const {data} = await useAsyncData('blog', () => {
  return Promise.all([
    $client.getEntries({
      content_type: "blogs",
      'fields.slug[in]': route.params.slug,
      order: '-sys.createdAt',
    })
  ]).then(([blogs]) => {
    return {
      blog: blogs.items[0]
    }
  })
})

if (typeof data['_rawValue'].blog === 'undefined') {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found"
  })

}

rendered = useNuxtApp().$mdit.render(data['_rawValue'].blog.fields.content);

useHead({
  title: data['_rawValue'].blog.fields.title,
  meta: [
    {
      name: 'twitter:image',
      content: data['_rawValue'].blog.fields.image.fields.file.url
    },
    {
      name: 'og:image',
      content: data['_rawValue'].blog.fields.image.fields.file.url
    },
    {
      name: 'description',
      content: data['_rawValue'].blog.fields.description
    }
  ]
})
</script>

<style scoped>

</style>
