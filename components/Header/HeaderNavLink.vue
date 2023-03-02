<template>
  <div>
    <nuxt-link :aria-label="label" :to="to" class="block py-4 hover:text-blue-700 dark:hover:text-blue-500 xl:py-0">
      <span v-text="label"></span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "HeaderNavLink",
  props: {
    to: String,
    label: String
  }
}
</script>

<style scoped>

</style>
