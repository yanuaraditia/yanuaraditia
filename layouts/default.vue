<template>
  <div class="bg-red-50 text-neutral-800 min-h-screen">
    <span class="bg-red-300 w-96 h-96 absolute rounded-full blur-3xl scale-150 -translate-x-1/4 -translate-y-1/4"></span>
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
