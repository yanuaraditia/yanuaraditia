<script setup lang="ts">
const { data: posts } = await useAsyncData('project', () =>
  queryCollection('project').all()
)

const activeBlog = useState<string>(
  'active-entry',
  () => posts.value?.[0]?.id || ''
)
</script>

<template>
  <div>
    <h1
      class="text-2xl xl:text-4xl 2xl:text-5xl mb-3 font-display font-bold leading-tight"
    >
      Project
    </h1>

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
        <div class="stack">
          <h4 class="font-display mb-3 font-semibold">Stacks:</h4>
          <div class="flex gap-2">
            <Icon
              v-for="stack in project?.stacks"
              :key="stack"
              :name="`logos:${stack}`"
              size="20px"
            />
          </div>
        </div>
      </UiCard>
    </div>
  </div>
</template>
