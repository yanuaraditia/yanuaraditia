<template>
  <NuxtLoadingIndicator/>
  <div class="bg-neutral-50 dark:bg-neutral-material-800 dark:text-primary-50 text-neutral-material-500 min-h-screen">
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
