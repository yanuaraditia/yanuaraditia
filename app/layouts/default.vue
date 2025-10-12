<script setup lang="ts"></script>
<template>
  <NuxtLoadingIndicator color="var(--color-primary)" />
  <AppBar />
  <WindowLoader>
    <NuxtPage />
  </WindowLoader>
  <Dock />
</template>
