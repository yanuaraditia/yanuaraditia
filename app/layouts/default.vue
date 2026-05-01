<script setup lang="ts">
// Boot weather theme at layout level so every page benefits.
useWeather()
</script>

<template>
  <NuxtLoadingIndicator color="var(--color-super)" />

  <!-- Outer wrapper: full-bleed background -->
  <div class="min-h-screen flex justify-center">
    <!-- Framed container: vertical borders running full-height create the cubical frame -->
    <div
      class="container mx-auto border-x border-border/30 flex flex-col bg-muted"
    >
      <!-- Top bar (sticky, full-width) -->
      <div class="sticky top-0 z-50">
        <AppBar />
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
