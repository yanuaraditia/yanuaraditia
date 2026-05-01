<script setup lang="ts">
import type { ProjectCollectionItem } from '@nuxt/content'

defineProps<{
  project: ProjectCollectionItem
}>()
</script>

<template>
  <NuxtLink
    :to="project.path"
    class="group block chamfer-sm border-b bg-background transition-colors overflow-hidden"
  >
    <div class="grid md:grid-cols-2">
      <!-- Left: text -->
      <div class="flex flex-col justify-between gap-6 p-8 md:p-10">
        <div>
          <p
            class="text-xs font-mono tracking-widest text-on-surface-variant uppercase mb-4"
          >
            {{
              project.collaborators?.length ? 'Team Project' : 'Solo Project'
            }}
          </p>
          <h3
            class="text-2xl md:text-3xl lg:text-4xl font-bold font-display tracking-tight leading-tight mb-4"
          >
            {{ project.title }}
          </h3>
          <p
            v-if="project.description"
            class="text-on-surface-variant text-sm md:text-base line-clamp-3"
          >
            {{ project.description }}
          </p>
        </div>

        <div class="flex items-center justify-between gap-4">
          <UiButton
            variant="accent"
            size="sm"
            class="group-hover:text-primary"
            tabindex="-1"
          >
            View Project
            <Icon
              name="lucide:arrow-up-right"
              size="14px"
              class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </UiButton>

          <span
            v-if="project.status === 'soon'"
            class="inline-flex items-center gap-1.5 chamfer-sm bg-tertiary-container text-on-tertiary-container px-2.5 py-1 text-xs font-medium"
          >
            <Icon name="lucide:clock" size="12px" />
            soon
          </span>
        </div>
      </div>

      <!-- Right: visual panel -->
      <div
        class="relative overflow-hidden min-h-56 md:min-h-full"
        :style="{
          backgroundColor: project.color || 'var(--color-surface-container)'
        }"
      >
        <NuxtImg
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="absolute inset-0 size-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Floating stack chip (like vite+ "new" badge) -->
        <div
          v-if="project.stacks?.length"
          class="absolute bottom-4 right-4 chamfer-sm bg-background/90 backdrop-blur-md ring-1 ring-border/40 px-3 py-2 flex items-center gap-2"
        >
          <Icon
            v-for="stack in project.stacks.slice(0, 4)"
            :key="stack"
            :name="`lineicons:${stack}`"
            size="16px"
            class="text-on-surface"
          />
          <span
            v-if="project.stacks.length > 4"
            class="text-xs text-on-surface-variant font-mono"
          >
            +{{ project.stacks.length - 4 }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
