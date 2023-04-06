<template>
    <section class="py-16 xl:py-20">
        <div class="container px-4 xl:w-9/12 mx-auto">
            <div class="grid xl:grid-cols-5 gap-10">
                <div class="xl:col-span-2">
                    <div class="xl:sticky xl:top-36">
                        <h1 class="font-bold mb-5 text-3xl xl:text-5xl">
                            <span>Blog</span>
                        </h1>
                        <p class="text-lg mb-10">Software engineer specialized in backend development and
                            micro-services
                            ecosystems</p>
                    </div>
                </div>
                <div class="xl:col-span-3">
                    <div class="grid gap-7">
                        <div v-for="blog in blogs" :key="`dm-${blog.sys.id}`"
                             class="relative p-4 xl:p-6 gap-5 bg-white dark:bg-neutral-material-700 dark:hover:bg-neutral-material-600 hover:shadow flex transition-all rounded-3xl group">
                            <div>
                                <div class="bg-primary-500 p-3 rounded-2xl text-neutral-material-500">
                                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5ZM8 5h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                                              fill="currentColor"/>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h2 class="text-lg mb-3 xl:text-2xl font-bold group-hover:text-primary-700 dark:group-hover:text-primary-300"
                                    v-text="blog.fields.title"></h2>
                                <p class="text-sm" v-text="blog.fields.description"></p>
                            </div>
                            <nuxt-link :to="`/blogs/${blog.fields.slug}`" class="absolute inset-0"></nuxt-link>
                        </div>
                    </div>
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
