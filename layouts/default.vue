<template>
  <NuxtLoadingIndicator/>
  <div class="bg-neutral-50 dark:bg-neutral-900 dark:text-white text-neutral-800 min-h-screen">
    <div class="relative">
      <Header/>
      <main>
        <slot/>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
