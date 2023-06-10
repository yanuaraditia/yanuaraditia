<template>
  <section-base override-class="pt-7 lg:pt-28 lg:pb-0" add-class="bg-neutral-800 dark:bg-neutral-950 text-white">
    <Container>
      <div class="mb-7 lg:mb-28">
        <div class="text-lg flex gap-1 mb-5">
          <h1 v-text="project.fields.title"></h1>
          <span>—</span>
        </div>
        <p class="font-display xl:leading-tight text-3xl xl:text-5xl" v-text="project.fields.description"></p>
      </div>
    </Container>
    <nuxt-img :src="`https://`+project.fields.image.fields.file.url" :alt="project.fields.image.fields.title"
              class="w-full mb-5" loading="lazy"/>
  </section-base>
  <SectionBase>
    <Container>
      <div class="grid xl:grid-cols-5 gap-10">
        <div class="xl:col-span-2">
          <div class="grid gap-7 xl:gap-10 xl:sticky xl:top-36">
            <div class="grid gap-3">
              <h3 class="font-bold font-display text-xl" v-text="project.fields.title"></h3>
              <p v-text="project.fields.projectDesc"></p>
              <div>
                <NuxtLink
                    class="inline-block py-1 border-2 border-primary-800 text-primary-900 text-sm px-2.5 dark:text-white dark:border-neutral-700 rounded-full"
                    :to="project.fields.webUrl">Visit
                  Website
                </NuxtLink>
              </div>
            </div>
            <div class="grid gap-3">
              <h3 class="font-bold font-display text-xl">Headquarters</h3>
              <p v-text="project.fields.headquarters"></p>
            </div>
            <div class="grid gap-3">
              <h3 class="font-bold font-display text-xl">Industry</h3>
              <p v-text="project.fields.industry"></p>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3">
          <div class="prose dark:prose-invert max-w-none" v-html="project.contentRendered"></div>
        </div>
      </div>
    </Container>
  </SectionBase>
</template>

<script setup lang="ts">
import {getSingle} from "~/repositories/projectRepository";
import Container from "~/components/Section/Container.vue";

const route = useRoute()
const project = await getSingle(route.params.slug)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}

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
