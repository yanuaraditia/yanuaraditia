<script setup lang="ts">
import type { ProjectCollectionItem } from '@nuxt/content'
import { Motion } from 'motion-v'

const props = withDefaults(
  defineProps<{
    project: ProjectCollectionItem
    index?: number
  }>(),
  { index: 0 }
)
</script>

<template>
  <Motion
    tag="article"
    class="group relative min-h-[360px] overflow-hidden bg-background p-6 transition-colors hover:bg-surface sm:p-8"
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true, margin: '-8% 0px' }"
    :transition="{ duration: 0.55, delay: (props.index % 2) * 0.08 }"
  >
    <NuxtLink
      :to="project.path"
      class="absolute inset-0 z-20"
      :aria-label="`View ${project.title}`"
    />
    <div
      class="technical-grid absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
    />

    <div class="relative z-10 flex h-full flex-col">
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-center gap-3">
          <Icon
            v-if="project.icon"
            :name="project.icon"
            class="size-7 text-primary"
          />
          <span
            v-else
            class="flex size-8 items-center justify-center border border-border font-mono text-xs text-primary"
          >
            {{ String(props.index + 1).padStart(2, '0') }}
          </span>
          <span
            class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            >case file</span
          >
        </div>
        <span class="font-mono text-[10px] text-muted-foreground">{{
          project.month
        }}</span>
      </div>

      <div class="mt-auto pt-16">
        <h3
          class="max-w-lg text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl"
        >
          {{ project.title }}
        </h3>
        <p
          class="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
        >
          {{ project.description }}
        </p>

        <div
          class="mt-7 flex items-end justify-between gap-5 border-t border-border pt-5"
        >
          <div class="flex flex-wrap gap-2">
            <span
              v-for="stack in project.stacks"
              :key="stack"
              class="tech-tag"
              >{{ stack }}</span
            >
          </div>
          <span
            class="flex size-10 shrink-0 items-center justify-center border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <Icon name="solar:arrow-up-right-linear" class="size-4" />
          </span>
        </div>
      </div>
    </div>
  </Motion>
</template>
