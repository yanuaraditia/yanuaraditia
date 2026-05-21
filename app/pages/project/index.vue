<script setup lang="ts">
const { data: projects } = await useAsyncData('project', () =>
  queryCollection('project').order('month', 'DESC').all()
)

useSeoMeta({
  title: 'Projects',
  description: 'Explore my projects and the technologies I used to build them.',
  ogUrl: '/project'
})
</script>

<template>
  <section>
    <div
      class="border-b flex flex-col gap-2 md:flex-row md:justify-between md:items-center bg-background p-6 lg:p-10"
    >
      <h1 class="text-3xl font-bold font-display tracking-tight">Projects</h1>
      <p class="text-on-surface-variant text-base md:text-lg">
        Explore my projects and the technologies I used to build them.
      </p>
    </div>

    <div class="lg:grid lg:grid-cols-2 lg:gap-x-px">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
