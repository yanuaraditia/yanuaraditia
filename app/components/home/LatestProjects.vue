<script setup lang="ts">
const { data: projects } = await useAsyncData('latest-project', () =>
  queryCollection('project').order('month', 'DESC').limit(4).all()
)
</script>

<template>
  <section id="work" class="section-shell border-t border-border/70">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Selected systems / 02</p>
        <h2 class="section-title">Work that moves beyond the interface.</h2>
      </div>
      <div class="flex flex-col items-start gap-5 lg:items-end">
        <p class="section-copy lg:text-right">
          A selection of products and platforms spanning frontend systems,
          mobile experiences, backend services, and delivery infrastructure.
        </p>
        <NuxtLink to="/project" class="text-link">
          View project archive
          <Icon name="solar:arrow-right-linear" class="size-4" />
        </NuxtLink>
      </div>
    </div>

    <div
      class="mt-12 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-2"
    >
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>
