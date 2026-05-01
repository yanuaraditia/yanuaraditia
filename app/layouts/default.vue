<script setup lang="ts">
// Boot weather theme at layout level so every page benefits.
useWeather()
</script>

<template>
  <!-- Outer wrapper: full-bleed background -->
  <div
    class="min-h-screen flex justify-center"
    :style="{
      backgroundImage:
        'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)',
      backgroundSize: '20px 20px'
    }"
  >
    <div
      class="container mx-auto lg:border-x border-border/20 flex flex-col bg-muted"
    >
      <!-- Top bar (sticky, full-width) -->
      <div class="sticky top-0 z-50">
        <AppBar />
        <LoadingIndicator class="bottom-0" />
      </div>

      <!-- Page content -->
      <main class="flex-1">
        <NuxtPage />
      </main>

      <!-- Footer -->
      <footer
        class="border-t px-6 md:px-10 py-6 text-sm text-current/80 bg-background chamfer-sm-top"
      >
        <p>&copy; {{ new Date().getFullYear() }} Yanuar Aditia</p>
      </footer>
    </div>
  </div>
</template>
