<script setup lang="ts">
const links = [
  { label: 'Overview', to: '/#overview', icon: 'solar:home-angle-linear' },
  {
    label: 'Capabilities',
    to: '/#capabilities',
    icon: 'solar:layers-minimalistic-linear'
  },
  { label: 'Work', to: '/#work', icon: 'solar:case-linear' },
  { label: 'Notes', to: '/#notes', icon: 'solar:notebook-linear' }
]

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border/80 bg-background/82 backdrop-blur-xl"
  >
    <div class="page-shell flex h-20 items-center justify-between gap-5">
      <NuxtLink
        to="/"
        class="group flex items-center gap-3"
        aria-label="Yanuar Aditia home"
      >
        <span
          class="flex size-9 items-center justify-center border border-border bg-surface font-mono text-xs font-semibold text-primary transition-colors group-hover:border-primary/60"
        >
          YA
        </span>
        <span class="hidden sm:block">
          <strong
            class="block text-sm font-semibold tracking-tight text-foreground"
            >Yanuar Aditia</strong
          >
          <span
            class="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
            >Principal Engineer</span
          >
        </span>
      </NuxtLink>

      <nav
        class="hidden items-center gap-1 md:flex"
        aria-label="Primary navigation"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="nav-link"
        >
          <Icon :name="link.icon" class="size-3.5" />
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="mailto:me@yan.ad"
          external
          class="hidden text-link sm:inline-flex"
        >
          <Icon name="solar:letter-linear" class="size-4" />
          Let’s talk <span aria-hidden="true">↗</span>
        </NuxtLink>
        <button
          class="flex size-10 items-center justify-center border border-border text-foreground md:hidden"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon
            :name="
              isMenuOpen
                ? 'solar:close-circle-linear'
                : 'solar:hamburger-menu-linear'
            "
            class="size-5"
          />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav
        v-if="isMenuOpen"
        class="border-t border-border bg-background px-5 py-4 md:hidden"
        aria-label="Mobile navigation"
      >
        <div class="mx-auto flex max-w-[92rem] flex-col">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="border-b border-border py-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground last:border-0 hover:text-primary"
            @click="closeMenu"
          >
            <span class="flex items-center gap-3">
              <Icon :name="link.icon" class="size-4 text-primary" />
              {{ link.label }}
            </span>
          </NuxtLink>
        </div>
      </nav>
    </Transition>
    <LoadingIndicator />
  </header>
</template>
