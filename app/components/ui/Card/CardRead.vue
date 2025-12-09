<script setup lang="ts">
const props = defineProps<{
  item: {
    title: string
    description?: string
    image?: string
    color?: string
    url?: string
  }
  fit?: boolean
}>()
</script>
<template>
  <div
    class="grid gap-3 lg:gap-12 xl:w-9/12 xl:mx-auto lg:items-center"
    :style="{
      viewTransitionName: 'entry'
    }"
  >
    <div
      class="flex bg-white aspect-video overflow-hidden items-center justify-center"
    >
      <NuxtImg
        :src="props.item.image"
        :class="{
          'w-full': !props.fit,
          'w-fit': props.fit
        }"
        alt="Project Image"
      />
    </div>
    <div>
      <div :style="{ viewTransitionName: 'entry-title' }">
        <UiHeading>
          {{ props.item.title }}
        </UiHeading>
        <p class="text-lg">{{ props.item.description }}</p>
        <NuxtLink
          v-if="props.item.url"
          :to="props.item.url"
          class="flex items-center gap-2 text-primary mt-3 font-bold"
        >
          <Icon name="fluent:link-multiple-24-filled" size="16px" />
          <span>{{ props.item.url }}</span>
        </NuxtLink>
      </div>
      <slot />
    </div>
  </div>
</template>
