<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen bg-background text-foreground antialiased">
    <AppBar />
    <NuxtPage />
    <footer class="border-t border-border">
      <div
        class="page-shell flex flex-col gap-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} Yanuar Aditia. Built as an evolving engineering log.</p>
        <div
          class="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.16em]"
        >
          <NuxtLink
            to="/project"
            class="inline-flex items-center gap-2 hover:text-primary"
          >
            <Icon name="solar:case-linear" class="size-3.5" /> Projects
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 hover:text-primary"
          >
            <Icon name="solar:notebook-linear" class="size-3.5" /> Notes
          </NuxtLink>
          <NuxtLink
            to="mailto:me@yan.ad"
            external
            class="inline-flex items-center gap-2 hover:text-primary"
          >
            <Icon name="solar:letter-linear" class="size-3.5" /> Email ↗
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
