<template>
  <div class="relative">
    <button v-if="isSupported" class="absolute top-2 right-2 cursor-pointer">
      <Icon
        :name="
          copied
            ? 'solar:clipboard-check-bold-duotone'
            : 'solar:clipboard-add-line-duotone'
        "
        size="20px"
        @click="copy"
      />
    </button>
    <pre
      ref="slotRef"
      :class="cn('my-0! border mb-2', props.class)"
    ><slot/></pre>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})

const slotRef = useTemplateRef('slotRef')
const { copied, isSupported, copy: copyToClipboard } = useClipboard()

function copy() {
  if (slotRef.value) {
    copyToClipboard(slotRef.value.textContent || '')
  }
}
</script>

<style>
pre code .line {
  display: block;
}
</style>
