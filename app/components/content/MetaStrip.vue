<script setup lang="ts">
defineProps<{
  date?: string | Date
  readingTime?: string
  editUrl?: string
}>()

const formatted = (d?: string | Date) => {
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch {
    return ''
  }
}
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-3 text-xs text-on-surface-variant"
  >
    <div class="flex flex-wrap items-center gap-4">
      <span v-if="date" class="inline-flex items-center gap-1.5">
        <Icon name="solar:calendar-linear" size="14px" />
        Last updated {{ formatted(date) }}
      </span>
      <span v-if="readingTime" class="inline-flex items-center gap-1.5">
        <Icon name="solar:clock-circle-linear" size="14px" />
        {{ readingTime }}
      </span>
    </div>
    <a
      v-if="editUrl"
      :href="editUrl"
      target="_blank"
      rel="noopener"
      class="inline-flex items-center gap-1.5 hover:text-super transition-colors"
    >
      <Icon name="solar:pen-2-linear" size="14px" />
      Edit this page
    </a>
  </div>
</template>
