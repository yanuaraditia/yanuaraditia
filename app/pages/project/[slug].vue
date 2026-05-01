<script setup lang="ts">
const route = useRoute()
const { slug } = route.params

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryCollection('project').path(route.path).first()
)

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}

useSeoMeta({
  title: project.value.title,
  description: project.value.description,
  ogImage: project.value.image ?? '',
  ogUrl: project.value.path
})

const content = useTemplateRef('content')
const readingTime = computed(() => {
  if (!content.value || !content.value.$el) return ''
  const text = (content.value.$el as HTMLElement).innerText || ''
  const words = text.split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
})

const tocLinks = computed(() => project.value?.body?.toc?.links ?? [])

const editUrl = computed(
  () =>
    `https://github.com/yanuaraditia/yan-ad/edit/main/content/project/${slug}.md`
)

const isTeam = computed(() => (project.value?.collaborators?.length ?? 0) > 0)
</script>

<template>
  <div v-if="project" :style="{ viewTransitionName: 'entry' }">
    <div
      class="grid md:grid-cols-2 gap-6 lg:gap-10 items-start bg-background p-4 md:p-6 lg:p-10 chamfer-sm-bottom border-b"
    >
      <header class="min-w-0">
        <p
          class="text-xs font-semibold uppercase tracking-wider text-super mb-3"
        >
          {{ isTeam ? 'Team Project' : 'Solo Project' }}
        </p>
        <h1
          class="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight"
        >
          {{ project.title }}
        </h1>
        <p
          v-if="project.description"
          class="mt-4 text-lg text-on-surface-variant leading-relaxed"
        >
          {{ project.description }}
        </p>

        <div v-if="project.url" class="my-5">
          <UiButton
            as-child
            variant="accent"
            size="sm"
            class="group-hover:text-primary"
          >
            <NuxtLink :href="project.url" target="_blank" rel="noopener">
              <Icon name="solar:link-linear" size="16px" />
              Visit project
            </NuxtLink>
          </UiButton>
        </div>

        <div class="sticky top-24 flex flex-col gap-6 text-sm">
          <div
            v-if="project.stacks?.length"
            :style="{ viewTransitionName: 'project-stacks' }"
          >
            <p
              class="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Tech Stack
            </p>
            <div
              class="flex flex-wrap gap-2"
              :style="{ viewTransitionName: 'entry-subs' }"
            >
              <span
                v-for="stack in project.stacks"
                :key="stack"
                class="chamfer-sm inline-flex items-center gap-1.5 bg-muted px-2.5 py-1.5 text-xs"
              >
                <Icon
                  :name="`lineicons:${stack}`"
                  class="text-super"
                  size="14px"
                />
                {{ stack }}
              </span>
            </div>
          </div>

          <div v-if="project.collaborators?.length">
            <p
              class="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Teammates
            </p>
            <div class="flex -space-x-2">
              <a
                v-for="collaborator in project.collaborators"
                :key="collaborator"
                :href="`https://github.com/${collaborator}`"
                target="_blank"
                rel="noopener"
                :title="collaborator"
              >
                <NuxtImg
                  :src="`https://github.com/${collaborator}.png`"
                  :alt="collaborator"
                  class="size-8 rounded-full border-2 border-background"
                />
              </a>
            </div>
          </div>

          <div v-if="project.status">
            <p
              class="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
            >
              Status
            </p>
            <span
              class="chamfer-sm inline-flex items-center gap-1.5 bg-muted px-2.5 py-1 text-xs capitalize"
            >
              <span
                class="size-1.5 rounded-full"
                :class="
                  project.status === 'running'
                    ? 'bg-emerald-500'
                    : 'bg-amber-500'
                "
              />
              {{ project.status }}
            </span>
          </div>
        </div>
      </header>
      <div
        v-if="project.image"
        class="chamfer-sm overflow-hidden aspect-video w-full"
        :style="{ backgroundColor: project.color || 'var(--muted)' }"
      >
        <NuxtImg
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
    <div class="bg-background chamfer-sm">
      <div class="grid lg:grid-cols-4 lg:divide-x">
        <!-- Left: TOC -->
        <aside class="hidden lg:block">
          <div class="sticky top-16">
            <ContentToc :links="tocLinks" />
          </div>
        </aside>

        <!-- Center: article -->
        <div class="lg:col-span-3 px-4 md:px-6 lg:px-10 py-10 lg:py-14">
          <ContentMetaStrip
            :date="project.date"
            :reading-time="readingTime"
            :edit-url="editUrl"
          />

          <div
            class="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-24"
          >
            <ContentRenderer ref="content" :value="project" />
          </div>

          <footer
            class="mt-16 pt-6 border-t border-border/50 flex items-center justify-between"
          >
            <NuxtLink
              to="/project"
              class="inline-flex items-center gap-2 text-sm hover:text-super transition-colors"
            >
              <Icon name="solar:arrow-left-linear" size="16px" />
              Back to all projects
            </NuxtLink>
            <a
              :href="editUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-super transition-colors"
            >
              <Icon name="solar:pen-2-linear" size="14px" />
              Suggest an edit
            </a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
