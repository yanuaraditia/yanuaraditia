<template>
  <section class="py-16 xl:pt-10 xl:pb-20 relative overflow-hidden">
    <div class="container px-4 xl:w-9/12 mx-auto relative">
      <img src="~/assets/gitanuar.webp" loading="lazy" class="w-full mb-10 rounded-2xl" alt="Gitania & Yanuar"/>
      <div class="relative">
        <h1 class="font-bold mb-5 text-3xl xl:leading-tight xl:text-5xl xl:w-8/12">
          <span>Hey there! My name is Yanuar Aditia, and Yanuar in short.</span>
        </h1>
        <div class="grid xl:grid-cols-6 gap-10">
          <div class="xl:col-span-2 xl:order-2">
            <div class="sticky top-24">
              <div class="prose dark:prose-invert">
                <h3 class="text-xl font-medium">Skills</h3>
                <ul>
                  <li>Product Management</li>
                  <li>Team Manager</li>
                  <li>Research & Development</li>
                  <li>UX Research</li>
                  <li>Supply Chain Management</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4">
            <div class="prose mb-3 xl:mb-5 dark:prose-invert xl:text-lg max-w-none">
              <p>My name is Yanuar Aditia. Born and raised in Kebumen, Central Java, and currently reside in Yogyakarta.
                I received my bachelor’s degree in informatics engineering from the University of Amikom Yogyakarta,
                with a focus on database and web development.</p>
              <p>During my academic years, I participated in various activities to increase my skills in full-stack web
                development, including winning the AMICTA competition. My project focuses on how to integrate apps into
                the "internet of things" to handle a parking lot availability issue. Since February 2020, I've been
                working as a full-stack web developer for TRIES DIGITAL. I was in charge of creating back-end website
                applications as well as front-end website architecture. As a backend developer, I was able to enhance my
                skills in the Laravel framework, Rest API, and MySQL.</p>
              <p>During the instability of the company's performance in November 2020, I transferred to my current
                company name PT. Selalu Siap Solusi (KiriminAja) as software development lead, where I am responsible
                for researching existing stacks, offering functional changes as needed, creating and delivering new
                platforms, and resolving current tasks with teammates.</p>
              <p>As a developer who is interested in many new things, I plan to add focus to Product Management and UI /
                UX development. Furthermore I plan to experiment with new things that are relevant to my current
                interests.</p>
            </div>
            <h2 class="text-xl font-bold mb-3">Work Experience</h2>
            <div class="grid gap-3">
              <div class="py-3 px-4 gap-4 xl:py-4 xl:px-5 shadow-sm relative flex bg-white rounded-3xl dark:bg-neutral-material-600" v-for="(work, key) in histories" :key="`work-${key}`">
                  <div>
                      <div class="p-2 rounded-lg bg-primary-500 text-neutral-material-500">
                          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.527 21.068 8.294 14H5.75a.75.75 0 0 1-.72-.956l3-10.5A.75.75 0 0 1 8.75 2h7a.75.75 0 0 1 .712.987L14.79 8h4.46a.75.75 0 0 1 .54 1.27l-1.687 1.758a6.5 6.5 0 0 0-7.046 7.342l-3.262 3.4c-.532.554-1.455.044-1.269-.702ZM17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm3.354-7.146-4 4a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.708l1.646 1.647 3.646-3.647a.5.5 0 0 1 .708.708Z" fill="currentColor"/></svg>
                      </div>
                  </div>
                  <div>
                    <h4 v-text="work.place" class="text-sm"></h4>
                    <h5 v-text="work.position" class="font-medium text-xl"></h5>
                    <div class="text-xs absolute top-4 text-neutral-500 dark:text-neutral-material-300 right-4">
                      <span v-text="work.start"></span>
                      <span> - </span>
                      <span v-text="work.end ? work.end : 'Present'"></span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about"
}
</script>
<script setup>
import {getAllHistories} from "~/repositories/projectRepository";

const histories = await getAllHistories()

useHead({
  title: "About"
})
</script>

<style scoped>

</style>
