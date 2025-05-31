<script setup lang="ts">
const props = defineProps<{
  item: {
    title: string
    description?: string
    image?: string
    color?: string
    url?: string
  }
}>()
</script>
<template>
  <div
    class="rounded-2xl bg-surface-container p-3 grid lg:grid-cols-2 gap-3 lg:gap-12"
    :style="{
      viewTransitionName: 'entry'
    }"
  >
    <div
      :style="{
        backgroundColor: props.item.color ?? '#ffffff',
        viewTransitionName: 'entry-image'
      }"
      class="rounded-2xl flex h-full overflow-hidden items-center justify-center"
    >
      <NuxtImg
        :src="props.item.image"
        class="h-fit w-fit"
        alt="Project Image"
      />
    </div>
    <div class="lg:order-first p-3 lg:p-10">
      <div class="mb-5" :style="{ viewTransitionName: 'entry-title' }">
        <h1 class="text-2xl xl:text-3xl mb-3 font-display font-bold">
          {{ props.item.title }}
        </h1>
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
