<template>
  <section class="py-16 xl:mt-14">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <img src="~/assets/gitanuar.png" class="w-full mb-10 rounded-2xl" alt="">
      <div class="grid xl:grid-cols-6 gap-10">
        <div class="xl:col-span-6">
          <h1 class="font-bold mb-5 text-3xl xl:text-5xl xl:w-8/12">
            <span>Hey there! My name is Yanuar Aditia, and Yanuar in short.</span>
          </h1>
        </div>
        <div class="xl:col-span-4">
          <div class="prose dark:prose-invert xl:text-lg max-w-none">
            <p>My name is Yanuar Aditia. Born and raised in Kebumen, Central Java, and currently reside in Yogyakarta. I received my bachelor’s degree in informatics engineering from the University of Amikom Yogyakarta, with a focus on database and web development.</p>
            <p>During my academic years, I participated in various activities to increase my skills in full-stack web development, including winning the AMICTA competition. My project focuses on how to integrate apps into the "internet of things" to handle a parking lot availability issue. Since February 2020, I've been working as a full-stack web developer for TRIES DIGITAL. I was in charge of creating back-end website applications as well as front-end website architecture. As a backend developer, I was able to enhance my skills in the Laravel framework, Rest API, and MySQL.</p>
            <p>During the instability of the company's performance in November 2020, I transferred to my current company name PT. Selalu Siap Solusi (KiriminAja) as software development lead, where I am responsible for researching existing stacks, offering functional changes as needed, creating and delivering new platforms, and resolving current tasks with teammates.</p>
            <p>As a developer who is interested in many new things, I plan to add focus to Product Management and UI / UX development. Furthermore I plan to experiment with new things that are relevant to my current interests.</p>
          </div>
        </div>
        <div class="xl:col-span-2">
          <div class="sticky top-24">
            <div class="prose dark:prose-invert">
              <h3 class="text-xl font-medium">Stack</h3>
              <ul>
                <li>Laravel -> Mostly</li>
                <li>Go Lang</li>
                <li>Jira Software</li>
                <li>Node.js -> Express</li>
                <li>Vue -> Nuxt.js</li>
              </ul>
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
useHead({
  title: "About"
})
</script>

<style scoped>

</style>
