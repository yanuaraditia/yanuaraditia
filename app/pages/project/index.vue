<script setup lang="ts">
const { data: projects } = await useAsyncData('project', () =>
  queryCollection('project').order('id', 'ASC').all()
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
      class="chamfer-sm border-b flex flex-col gap-2 md:flex-row md:justify-between md:items-center bg-background p-6 lg:p-10"
    >
      <h1 class="text-3xl font-bold font-display tracking-tight">Projects</h1>
      <p class="text-on-surface-variant text-base md:text-lg">
        Explore my projects and the technologies I used to build them.
      </p>
    </div>

    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>
