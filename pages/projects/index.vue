<template>
    <section class="py-16 xl:py-20">
        <div class="container px-4 xl:w-9/12 mx-auto">
            <div class="grid xl:grid-cols-5 gap-10">
                <div class="xl:col-span-2">
                    <div class="xl:sticky xl:top-36">
                        <h1 class="font-bold mb-5 text-3xl xl:text-5xl">
                            <span>Project</span>
                        </h1>
                        <p class="text-lg mb-10">Main and side-project portfolio. There all my professional
                            project excluding professional</p>
                    </div>
                </div>
                <div class="xl:col-span-3">
                    <div class="grid gap-10">
                        <div v-for="blog in projects" :key="`dm-${blog.sys.id}`" class="relative group hover:shadow transition-all rounded-xl overflow-hidden">
                            <div class="mb-3 aspect-video bg-gradient-to-br from-primary-50 to-primary-200 dark:from-neutral-material-600 dark:to-neutral-material-800">
                                <nuxt-img loading="lazy" :src="`https://`+blog.fields.image.fields.file.url" alt=""
                                          class="w-full absolute left-7 top-7"/>
                            </div>
                                <div class="bottom-0 flex left-0 p-4 rounded-xl right-0 bg-primary-500 bg-opacity-80 text-neutral-material-500 backdrop-blur-2xl absolute">
                                    <h4 class=" font-bold"
                                        v-text="blog.fields.title"></h4>
                                    <svg width="24" height="24" class="ml-auto" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.497 3.002 7.555.001.121.014.088.02.104.034.09.04.063.036.063.042.064.05.063.058.094.11.072.11.053.114.035.105.016.065.01.053.01.148v7.504a1 1 0 0 1-1.993.117l-.007-.117v-5.09L4.706 20.708a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.095L17.583 5.002h-5.086a1 1 0 0 1-.993-.883l-.007-.117a1 1 0 0 1 1-1Z" fill="currentColor"/></svg>
                                </div>
                            <nuxt-link :to="`/projects/${blog.fields.slug}`"
                                       class="absolute inset-0"></nuxt-link>
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
import {getAllProjects} from "~/repositories/projectRepository";

const projects = await getAllProjects()

useHead({
    title: "Project"
})
</script>

<style scoped>

</style>
