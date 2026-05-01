<script setup lang="ts">
import { Motion } from 'motion-v'
import type { ProjectCollectionItem } from '@nuxt/content'

defineProps<{
  project: ProjectCollectionItem
}>()
</script>

<template>
  <Motion
    tag="div"
    :initial="{ opacity: 0, filter: 'blur(12px)' }"
    :while-in-view="{ opacity: 1, filter: 'blur(0px)' }"
    :transition="{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }"
  >
    <article
      class="group chamfer-sm border-b bg-background transition-colors overflow-hidden p-5 md:p-8 lg:p-10"
    >
      <div class="grid md:grid-cols-3 gap-5 lg:gap-12">
        <!-- Left: text -->
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
            <NuxtLink :to="project.path" class="block mb-4">
              <h3
                class="text-2xl md:text-3xl lg:text-4xl font-bold font-display tracking-tight leading-tight"
              >
                {{ project.title }}
              </h3>
            </NuxtLink>
            <p
              v-if="project.description"
              class="text-on-surface-variant text-sm md:text-base line-clamp-3"
            >
              {{ project.description }}
            </p>
          </div>

          <div class="flex items-center gap-4">
            <UiButton as-child size="sm">
              <NuxtLink :to="project.path">
                View Project
                <Icon
                  name="solar:round-arrow-right-linear"
                  size="14px"
                  class="transition-transform"
                />
              </NuxtLink>
            </UiButton>

            <UiButton
              v-if="project.github_url"
              as-child
              variant="outline"
              size="sm"
            >
              <NuxtLink
                :href="project.github_url"
                target="_blank"
                rel="noopener"
              >
                <Icon name="mdi:github" size="14px" />
                GitHub
              </NuxtLink>
            </UiButton>
          </div>
        </div>

        <!-- Right: visual panel -->
        <div
          class="relative overflow-hidden min-h-44 md:min-h-56 aspect-video chamfer-sm"
          :style="{
            backgroundColor: project.color || 'var(--color-surface-container)'
          }"
        >
          <NuxtLink
            :to="project.path"
            class="absolute inset-0 block"
            :aria-label="`View project ${project.title}`"
          >
            <NuxtImg
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="absolute inset-0 size-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </NuxtLink>

          <!-- Floating stack chip (like vite+ "new" badge) -->
          <div
            v-if="project.stacks?.length"
            class="absolute bottom-4 right-4 chamfer-sm bg-background/90 backdrop-blur-md ring-1 ring-border/40 px-3 py-2 flex items-center gap-2 pointer-events-none"
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
    </article>
  </Motion>
</template>
