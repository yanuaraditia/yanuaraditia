<script setup lang="ts">
import { Motion } from 'motion-v'

interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}

const props = defineProps<{
  links: TocLink[]
  title?: string
}>()

const activeId = ref<string>('')

// Flatten nested toc into a single array (preserve depth for indent)
const flatLinks = computed<TocLink[]>(() => {
  const out: TocLink[] = []
  const walk = (items?: TocLink[]) => {
    if (!items) return
    for (const i of items) {
      out.push(i)
      walk(i.children)
    }
  }
  walk(props.links)
  return out
})

let observer: IntersectionObserver | null = null

const setupObserver = () => {
  if (!import.meta.client) return
  observer?.disconnect()

  const ids = flatLinks.value.map((l) => l.id)
  const els = ids
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => !!el)

  if (!els.length) return

  const visible = new Set<string>()

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id)
        else visible.delete(entry.target.id)
      }
      const firstVisible = ids.find((id) => visible.has(id))
      if (firstVisible) activeId.value = firstVisible
    },
    {
      rootMargin: '-80px 0px -70% 0px',
      threshold: [0, 1]
    }
  )

  els.forEach((el) => observer!.observe(el))
  if (!activeId.value && ids[0]) activeId.value = ids[0]
}

onMounted(() => {
  nextTick(() => setupObserver())
})

watch(
  () => flatLinks.value.map((l) => l.id).join(','),
  () => nextTick(() => setupObserver())
)

onBeforeUnmount(() => observer?.disconnect())

// Refs for animated indicator measurement
const listRef = useTemplateRef<HTMLUListElement>('listRef')
const itemRefs = ref<Record<string, HTMLLIElement | null>>({})
const setItemRef =
  (id: string) => (el: Element | ComponentPublicInstance | null) => {
    itemRefs.value[id] = (el as HTMLLIElement) ?? null
  }

const indicator = ref({ top: 0, height: 0, visible: false })

const measureIndicator = () => {
  if (!import.meta.client) return
  const list = listRef.value
  const item = activeId.value ? itemRefs.value[activeId.value] : null
  if (!list || !item) {
    indicator.value.visible = false
    return
  }
  const listRect = list.getBoundingClientRect()
  const itemRect = item.getBoundingClientRect()
  indicator.value = {
    top: itemRect.top - listRect.top,
    height: itemRect.height,
    visible: true
  }
}

watch(activeId, () => nextTick(measureIndicator))
watch(
  () => flatLinks.value.map((l) => l.id).join(','),
  () => nextTick(measureIndicator)
)

onMounted(() => {
  nextTick(measureIndicator)
  if (import.meta.client) {
    window.addEventListener('resize', measureIndicator)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('resize', measureIndicator)
  }
})

const handleClick = (e: MouseEvent, id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  e.preventDefault()
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
  history.replaceState(null, '', `#${id}`)
  activeId.value = id
}
</script>

<template>
  <nav
    v-if="flatLinks.length"
    aria-label="Table of contents"
    class="text-sm py-2 lg:py-8"
  >
    <p class="sr-only">
      {{ title ?? 'On this page' }}
    </p>
    <ul
      ref="listRef"
      class="relative flex flex-col gap-px border-l border-border/50"
    >
      <!-- Animated active indicator -->
      <Motion
        as="span"
        aria-hidden="true"
        class="absolute left-0 -ml-px w-px bg-primary pointer-events-none"
        :initial="false"
        :animate="{
          top: indicator.top,
          height: indicator.height,
          opacity: indicator.visible ? 1 : 0
        }"
        :transition="{
          type: 'spring',
          stiffness: 380,
          damping: 32,
          mass: 0.6,
          opacity: { duration: 0.18 }
        }"
        :style="{
          boxShadow: '0 0 8px 0 var(--color-primary)'
        }"
      />

      <li v-for="link in flatLinks" :key="link.id" :ref="setItemRef(link.id)">
        <a
          :href="`#${link.id}`"
          :class="[
            'block py-2 px-4 lg:px-10 transition-colors duration-300',
            activeId === link.id
              ? 'text-primary'
              : 'text-on-surface-variant hover:text-on-surface'
          ]"
          @click="(e) => handleClick(e, link.id)"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
