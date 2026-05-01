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
    :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
    :viewport="{ once: true, margin: '-80px' }"
  >
    <NuxtLink
      :to="project.path"
      class="group block chamfer-sm border-b bg-background transition-colors overflow-hidden p-8 md:p-10"
    >
      <div class="grid md:grid-cols-3 gap-5 lg:gap-12">
        <!-- Left: text -->
        <div class="flex flex-col justify-between gap-6 md:col-span-2">
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
              class="group-hover:text-super"
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
          class="relative overflow-hidden min-h-56 aspect-video chamfer-sm md:min-h-full"
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
  </Motion>
</template>
