<template>
  <client-only>
    <div @click="switchColor" class="border shadow-inner shadow-sm text-white rounded-full flex items-center cursor-pointer w-10 bg-blue h-6 relative" :class="[(isDark ? 'bg-blue-600 border-blue-600' : 'bg-neutral-600 border-neutral-700')]">
      <div class="py-1 px-1 w-full flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun-high" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
          <path d="M6.343 17.657l-1.414 1.414"></path>
          <path d="M6.343 6.343l-1.414 -1.414"></path>
          <path d="M17.657 6.343l1.414 -1.414"></path>
          <path d="M17.657 17.657l1.414 1.414"></path>
          <path d="M4 12h-2"></path>
          <path d="M12 4v-2"></path>
          <path d="M20 12h2"></path>
          <path d="M12 20v2"></path>
        </svg>
      </div>
      <span class="rounded-full border w-4 h-4 border-grey shadow-inner bg-white shadow absolute transition-all ease-in-out" :class="[(isDark ? 'left-5' : 'left-0.5')]"></span>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "FooterDarkToggle",
  setup() {
    const colorMode = useColorMode()
    return {
      colorMode
    }
  },
  methods: {
    switchColor() {
      if (this.isDark) {
        this.colorMode.preference = 'light'
      } else {
        this.colorMode.preference = 'dark'
      }
    }
  },
  computed: {
    isDark() {
      return this.colorMode.preference === 'dark'
    }
  }
}
</script>

<style scoped>

</style>
