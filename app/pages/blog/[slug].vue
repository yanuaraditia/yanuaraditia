<script setup lang="ts">
const route = useRoute()
const { slug } = route.params

const { data: blog } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(route.path).first()
)

if (!blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog not found'
  })
}

useSeoMeta({
  title: blog.value.title,
  description: blog.value.description,
  ogImage: blog.value.image ?? '',
  ogUrl: blog.value.path
})

const content = useTemplateRef('content')

const readingTime = computed(() => {
  if (!content.value || !content.value.$el) return ''
  const text = (content.value.$el as HTMLElement).innerText || ''
  const words = text.split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
})

const tocLinks = computed(() => blog.value?.body?.toc?.links ?? [])

const editUrl = computed(
  () =>
    `https://github.com/yanuaraditia/yan-ad/edit/main/content/blog/${slug}.md`
)

const formattedDate = computed(() => {
  if (!blog.value?.date) return ''
  try {
    return new Date(blog.value.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return ''
  }
})
</script>

<template>
  <div v-if="blog" :style="{ viewTransitionName: 'entry' }">
    <div
      class="grid md:grid-cols-2 gap-6 lg:gap-10 items-start bg-background p-5 md:p-6 lg:p-10 chamfer-sm-bottom border-b"
    >
      <header class="min-w-0">
        <p
          class="text-xs font-semibold uppercase tracking-wider text-primary mb-3"
        >
          Article
        </p>
        <h1
          class="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight"
        >
          {{ blog.title }}
        </h1>
        <p
          v-if="blog.description"
          class="mt-4 text-lg text-on-surface-variant leading-relaxed"
        >
          {{ blog.description }}
        </p>

        <div class="flex flex-wrap gap-3 text-sm mt-8">
          <span
            v-if="formattedDate"
            class="chamfer-sm inline-flex items-center gap-1.5 bg-muted px-2.5 py-1.5 text-xs"
          >
            <Icon
              name="solar:calendar-linear"
              class="text-primary"
              size="14px"
            />
            {{ formattedDate }}
          </span>

          <span
            v-if="readingTime"
            class="chamfer-sm inline-flex items-center gap-1.5 bg-muted px-2.5 py-1.5 text-xs"
          >
            <Icon
              name="solar:clock-circle-linear"
              class="text-primary"
              size="14px"
            />
            {{ readingTime }}
          </span>
        </div>
      </header>
      <div
        v-if="blog.image"
        class="chamfer-sm overflow-hidden aspect-video bg-muted w-full"
      >
        <NuxtImg
          :src="blog.image"
          :alt="blog.title"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="bg-background chamfer-sm">
      <div class="grid lg:grid-cols-4 lg:divide-x">
        <!-- Left: TOC -->
        <aside class="hidden lg:block">
          <div class="sticky top-16">
            <Toc :links="tocLinks" />
          </div>
        </aside>

        <!-- Center: article -->
        <div class="lg:col-span-3 px-4 md:px-6 lg:px-10 py-10 lg:py-14">
          <div
            class="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-24"
          >
            <ContentRenderer ref="content" :value="blog" />
          </div>

          <footer
            class="mt-16 pt-6 border-t border-border/50 flex items-center justify-between"
          >
            <NuxtLink
              to="/blog"
              class="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Icon name="solar:arrow-left-linear" size="16px" />
              Back to all articles
            </NuxtLink>
            <a
              :href="editUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
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
