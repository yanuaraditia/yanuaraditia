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
  <section id="projects">
    <div
      class="border-b flex flex-col gap-3 md:flex-row md:justify-between md:items-center bg-background p-6 lg:p-10"
    >
      <h2 class="text-3xl font-bold font-display tracking-tight text-primary">
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

    <div class="lg:grid lg:grid-cols-2 lg:gap-x-px">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
