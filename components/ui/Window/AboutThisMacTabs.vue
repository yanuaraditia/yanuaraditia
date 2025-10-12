<template>
  <div class="flex justify-center">
    <TabsRoot
      class="w-auto"
      :model-value="activeTab"
      @update:model-value="setActiveTab"
    >
      <TabsList
        class="grid w-full grid-cols-4 bg-gray-200 dark:bg-gray-800 rounded-lg p-1 border border-outline-variant/30"
      >
        <TabsTrigger
          v-for="tab in tabs"
          :key="tab.id"
          :value="tab.id"
          class="px-3 py-1 text-xs font-medium rounded-md transition-colors duration-200 data-[state=active]:bg-white data-[state=active]:dark:bg-gray-700 data-[state=active]:text-gray-900 data-[state=active]:dark:text-white data-[state=active]:shadow-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:pointer-events-none disabled:opacity-50"
        >
          {{ tab.label }}
        </TabsTrigger>
      </TabsList>
    </TabsRoot>
  </div>
</template>

<script setup lang="ts">
import { TabsRoot, TabsList, TabsTrigger } from 'reka-ui'

defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  updateTab: [tabId: string]
}>()

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work History' },
  { id: 'devices', label: 'Tech Stack' }
]

const setActiveTab = (tabId: string) => {
  emit('updateTab', tabId)
}
</script>
