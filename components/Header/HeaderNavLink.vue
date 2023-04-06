<template>
  <div>
    <nuxt-link :aria-label="label" :to="to" class="block py-3 hover:bg-primary-200 xl:hover:bg-transparent px-3 xl:px-0 hover:text-primary-700 dark:hover:text-primary-500 xl:py-0">
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
