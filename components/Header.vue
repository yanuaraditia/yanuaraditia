<template>
  <header class="sticky z-50 top-0 h-16 xl:h-20 transition-all" :class="[(isFixed || showNavbar ? 'bg-neutral-50 dark:bg-neutral-900 xl:bg-opacity-50 xl:saturate-200 xl:backdrop-blur-2xl' : 'bg-transparent')]">
    <div class="container xl:px-4 mx-auto xl:w-9/12">
      <div class="xl:flex">
        <div class="px-4 xl:px-0 flex xl:block place-items-center">
          <nuxt-link to="/" class="block py-4 xl:py-6">
            <span class="font-semibold text-lg xl:text-xl">yanuar.dev</span>
          </nuxt-link>
          <button aria-label="Menu Toggle" id="menu-toggle" @click="showNavbar = !showNavbar" class="xl:hidden ml-auto aspect-square w-12 h-12 relative rounded-md overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
               <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
               <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
               <path d="M7 8l0 8"></path>
               <path d="M9 18h6a2 2 0 0 0 2 -2v-5"></path>
               <path d="M14 14l3 -3l3 3"></path>
            </svg>
          </button>
        </div>
        <div :class="[(showNavbar ? '' : '-translate-x-full xl:translate-x-0')]" class="px-3.5 transition-all xl:ml-auto">
          <div class="overflow-hidden xl:h-full xl:shadow-none duration-200 xl:px-0 bg-white bg-opacity-80 dark:bg-opacity-80 dark:bg-neutral-900 xl:bg-transparent dark:xl:bg-transparent border xl:border-0 backdrop-blur dark:border-neutral-800 rounded-2xl shadow-lg xl:flex xl:gap-8 xl:place-items-center font-semibold xl:font-medium">
            <HeaderNavLink v-for="(nav, key) in navs" :key="`nav-${key}`" :to="nav.to" :label="nav.label"/>
          </div>
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
