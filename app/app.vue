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
        <p>© {{ year }} Yanuar Aditya. Built as an evolving engineering log.</p>
        <div
          class="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.16em]"
        >
          <NuxtLink to="/project" class="hover:text-primary">Projects</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-primary">Notes</NuxtLink>
          <NuxtLink to="mailto:hello@yan.ad" external class="hover:text-primary"
            >Email ↗</NuxtLink
          >
        </div>
      </div>
    </footer>
  </div>
</template>
