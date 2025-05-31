<script setup lang="ts">
const { data: posts } = await useAsyncData('project', () =>
  queryCollection('project').all()
)

const activeBlog = useState<string>(
  'active-entry',
  () => posts.value?.[0]?.id || ''
)

useSeoMeta({
  title: 'Projects',
  description: 'Explore my projects and the technologies I used to build them.',
  ogUrl: '/project'
})
</script>

<template>
  <div>
    <UiHeading>Project</UiHeading>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <UiCard
        v-for="project in posts"
        :key="project.id"
        :class="{
          'active-entry': activeBlog === project.id
        }"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :to="project.path"
        :color="project.color"
        @mouseenter="activeBlog = project.id"
      >
        <div class="flex stack gap-2">
          <Icon
            v-for="stack in project?.stacks"
            :key="stack"
            :name="`lineicons:${stack}`"
            size="20px"
          />
        </div>
      </UiCard>
    </div>
  </div>
</template>
