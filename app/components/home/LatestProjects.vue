<script setup lang="ts">
import type {
  CollectionQueryBuilder,
  ProjectCollectionItem
} from '@nuxt/content'

const { data: projects } = await useAsyncData('home-projects', () =>
  (queryCollection('project') as CollectionQueryBuilder<ProjectCollectionItem>)
    .order('id', 'ASC')
    .limit(3)
    .all()
)
</script>

<template>
  <section id="projects">
    <div
      class="text-center chamfer-sm border-b flex justify-between lg:items-center bg-background p-6 lg:p-10"
    >
      <h2 class="text-3xl font-bold font-display tracking-tight">
        Latest Projects
      </h2>

      <UiButton variant="accent" as-child>
        <NuxtLink to="/project">
          View all projects
          <Icon name="lucide:arrow-right" size="16px" class="ml-1" />
        </NuxtLink>
      </UiButton>
    </div>

    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>
