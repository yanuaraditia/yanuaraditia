<script setup lang="ts">
import type { ProjectCollectionItem } from '@nuxt/content'

defineProps<{
  project: ProjectCollectionItem
}>()
</script>

<template>
  <article
    class="group border-b bg-background transition-colors overflow-hidden p-5 md:p-8 lg:p-10"
  >
    <div class="flex flex-col justify-between gap-6 md:col-span-2">
      <div>
        <div class="flex gap-2 mb-4">
          <UiBadge variant="outline">
            {{
              (project.collaborators?.length || 0) > 1
                ? 'Team Project'
                : 'Solo Project'
            }}
          </UiBadge>
          <UiBadge variant="outline">
            <Icon
              :name="
                project.active
                  ? 'solar:check-circle-linear'
                  : 'solar:close-circle-linear'
              "
              size="12px"
            />
            {{ project.active ? 'Active' : 'Inactive' }}
          </UiBadge>
        </div>
        <NuxtLink :to="project.path" class="mb-4 flex gap-2 items-center">
          <Icon
            v-if="project.icon"
            :name="project.icon"
            size="32px"
            class="text-primary"
          />
          <h3
            class="text-2xl md:text-3xl font-bold font-display tracking-tight leading-tight"
          >
            {{ project.title }}
          </h3>
        </NuxtLink>
        <p
          v-if="project.description"
          class="text-on-surface-variant text-sm md:text-base line-clamp-2"
        >
          {{ project.description }}
        </p>
      </div>
    </div>
  </article>
</template>
