<script setup lang="ts">
const { data: posts } = await useAsyncData('latest-blog', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)
</script>

<template>
  <section id="notes" class="section-shell border-t border-border/70">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Field notes / 03</p>
        <h2 class="section-title">Ideas from the workbench.</h2>
      </div>
      <div class="flex flex-col items-start gap-5 lg:items-end">
        <p class="section-copy lg:text-right">
          Practical notes on architecture, product engineering, developer tools,
          and the trade-offs behind resilient software.
        </p>
        <NuxtLink to="/blog" class="text-link">
          Read all notes <Icon name="solar:arrow-right-linear" class="size-4" />
        </NuxtLink>
      </div>
    </div>

    <div
      class="mt-12 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3"
    >
      <BlogCard
        v-for="(post, index) in posts"
        :key="post.id"
        :post="post"
        :index="index"
      />
    </div>
  </section>
</template>
