<template>
  <div>
    <nuxt-link :aria-label="label" :to="to" class="block py-4 hover:text-red-700 xl:py-0">
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
