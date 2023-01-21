<template>
  <header class="sticky z-50 top-0 h-16 xl:h-20 transition-all">
    <div class="container xl:px-4 mx-auto xl:w-9/12" :class="[(isFixed ? 'xl:py-3' : '')]">
      <div class="transition-all xl:flex" :class="[(isFixed ? 'xl:gap-5 xl:mx-auto xl:pr-10 xl:shadow-sm xl:bg-red-50 xl:bg-opacity-80 dark:xl:bg-opacity-80 xl:backdrop-blur-3xl xl:border xl:w-4/12 dark:xl:bg-neutral-800 xl:p-3 xl:rounded-full' : '')]">
        <div class="px-4 xl:px-0 flex xl:block place-items-center">
          <nuxt-link to="/" class="block" :class="[(isFixed ? 'py-2.5 xl:py-0' : 'py-4 xl:py-6')]">
            <nuxt-img src="/yan-reg.png" v-if="isFixed" class="inline-block w-10 aspect-square relative rounded-full shadow-lg" loading="lazy" alt="Yanuar Reg" />
            <span class="font-bold text-lg xl:text-xl" v-else>Yanuar Aditia</span>
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
        <div :class="[(showNavbar ? '' : '-translate-x-full xl:translate-x-0'),(isFixed ? 'gap-5' : 'xl:ml-auto')]" class="px-4 transition-all duration-200 xl:px-0 bg-red-100 dark:bg-neutral-900 xl:bg-transparent dark:xl:bg-transparent border-y xl:border-y-0 border-y-red-200 dark:border-y-neutral-800 xl:flex xl:gap-8 xl:place-items-center font-semibold xl:font-medium">
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
