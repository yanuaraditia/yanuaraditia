<template>
  <header class="sticky z-50 top-0 h-16 xl:h-20 transition-all" :class="[(isFixed || showNavbar ? 'bg-neutral-50 dark:bg-neutral-900 xl:bg-opacity-50 xl:saturate-200 xl:backdrop-blur-2xl' : 'bg-transparent')]">
    <div class="container xl:px-4 mx-auto xl:w-9/12">
      <div class="xl:flex">
        <div class="px-4 xl:px-0 flex xl:block place-items-center">
          <nuxt-link to="/" class="block py-4 xl:py-6">
            <span class="font-bold text-lg xl:text-xl">Yanuar Aditia</span>
          </nuxt-link>
          <button aria-label="Menu Toggle" id="menu-toggle" @click="showNavbar = !showNavbar" class="xl:hidden ml-auto aspect-square w-12 h-12 relative rounded-md overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5"></path>
              <path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5"></path>
            </svg>
          </button>
        </div>
        <div :class="[(showNavbar ? '' : '-translate-x-full xl:translate-x-0')]" class="px-4 transition-all duration-200 xl:px-0 xl:ml-auto bg-blue-100 dark:bg-neutral-900 xl:bg-transparent dark:xl:bg-transparent border-y xl:border-y-0 border-y-blue-200 dark:border-y-neutral-800 xl:flex xl:gap-8 xl:place-items-center font-semibold xl:font-medium">
          <HeaderNavLink v-for="(nav, key) in navs" :key="`nav-${key}`" :to="nav.to" :label="nav.label"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  methods: {
    onScroll() {
      this.lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.isFixed = this.lastScrollPosition > 50
    },
  },
  data() {
    return {
      isFixed: false,
      lastScrollPosition: 0,
      showNavbar: false,
      navs: [
        {
          label: "Work",
          to: "/projects"
        },
        {
          label: "Notes",
          to: "/blogs"
        },
        {
          label: "About",
          to: "/about"
        },
        {
          label: "Contact",
          to: "/contact"
        },
      ]
    }
  },
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>

</style>
