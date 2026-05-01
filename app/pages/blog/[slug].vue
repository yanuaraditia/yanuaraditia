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
</script>

<template>
  <article
    v-if="blog"
    class="bg-background border-t border-border/40"
    :style="{ viewTransitionName: 'entry' }"
  >
    <div class="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-10 py-10 lg:py-14">
      <div class="grid lg:grid-cols-[14rem_minmax(0,1fr)_14rem] gap-10">
        <!-- Left: TOC -->
        <aside class="hidden lg:block">
          <div class="sticky top-24">
            <ContentToc :links="tocLinks" />
          </div>
        </aside>

        <!-- Center: article -->
        <div class="min-w-0">
          <ContentMetaStrip
            :date="blog.date"
            :reading-time="readingTime"
            :edit-url="editUrl"
          />

          <header class="mt-8 mb-10">
            <p
              class="text-xs font-semibold uppercase tracking-wider text-(--color-primary) mb-3"
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
          </header>

          <div
            v-if="blog.image"
            class="chamfer-sm overflow-hidden bg-muted mb-10 aspect-video"
          >
            <NuxtImg
              :src="blog.image"
              :alt="blog.title"
              class="w-full h-full object-cover"
            />
          </div>

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
              class="inline-flex items-center gap-2 text-sm hover:text-(--color-primary) transition-colors"
            >
              <Icon name="solar:arrow-left-linear" size="16px" />
              Back to all articles
            </NuxtLink>
            <a
              :href="editUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-(--color-primary) transition-colors"
            >
              <Icon name="solar:pen-2-linear" size="14px" />
              Suggest an edit
            </a>
          </footer>
        </div>

        <!-- Right: spacer for centering balance (vite.dev style) -->
        <aside class="hidden lg:block" />
      </div>
    </div>
  </article>
</template>
