<script setup lang="ts">
import type {
  CollectionQueryBuilder,
  ProjectCollectionItem
} from '@nuxt/content'

const { data: projects } = await useAsyncData('home-projects', () =>
  (queryCollection('project') as CollectionQueryBuilder<ProjectCollectionItem>)
    .order('month', 'DESC')
    .limit(4)
    .all()
)
</script>

<template>
  <section id="projects" class="border-b py-10 lg:py-24">
    <div
      class="container mx-auto flex flex-col gap-3 md:flex-row md:justify-between md:items-center"
    >
      <h2
        class="text-3xl font-bold font-display tracking-tight text-primary mb-5 lg:mb-10"
      >
        Latest Projects
      </h2>

      <UiButton variant="outline" as-child>
        <NuxtLink to="/project">
          View all projects
          <Icon
            name="solar:round-arrow-right-linear"
            size="16px"
            class="ml-1"
          />
        </NuxtLink>
      </UiButton>
    </div>

    <div class="container mx-auto">
      <div class="lg:grid lg:grid-cols-2 divide-x divide-y border">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
