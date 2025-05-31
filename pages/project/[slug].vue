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
</script>

<template>
  <UiCardRead :item="project">
    <div class="mb-5" :style="{ viewTransitionName: 'project-stacks' }">
      <h3 class="font-display mb-2 text-sm font-semibold">Stacks:</h3>
      <div class="flex gap-2">
        <Icon
          v-for="stack in project?.stacks"
          :key="stack"
          :name="`logos:${stack}`"
          size="20px"
        />
      </div>
    </div>
    <div>
      <h3 class="font-display mb-2 text-sm font-semibold">Teammate:</h3>
      <div class="flex -space-x-3">
        <NuxtImg
          v-for="collaborator in project?.collaborators"
          :key="collaborator"
          :src="`https://github.com/${collaborator}.png`"
          class="w-8 h-8 rounded-full border border-outline-variant"
        />
      </div>
    </div>
  </UiCardRead>

  <div class="prose max-w-none dark:prose-invert">
    <ContentRenderer v-if="project" :value="project" />
  </div>
</template>
