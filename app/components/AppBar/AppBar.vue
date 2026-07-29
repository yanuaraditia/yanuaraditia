<template>
  <header class="h-16 bg-background border-b px-6 md:px-10">
    <div class="container mx-auto flex items-center justify-between h-full">
      <NuxtLink
        to="/"
        class="font-display font-bold tracking-tight text-lg text-primary"
      >
        yan.ad
      </NuxtLink>

      <nav class="flex items-center gap-1">
        <AppBarItem
          to="/"
          label="Home"
          icon="solar:tea-cup-broken"
          active-icon="solar:tea-cup-bold"
        />
        <AppBarItem
          to="/project"
          label="Project"
          icon="solar:case-broken"
          active-icon="solar:case-bold"
        />
        <AppBarItem
          to="/blog"
          label="Blog"
          icon="solar:notes-broken"
          active-icon="solar:notes-bold"
        />
      </nav>
    </div>
  </header>
</template>
