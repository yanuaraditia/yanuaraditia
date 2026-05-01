<template>
  <header class="border-b bg-background backdrop-blur-md chamfer-sm-bottom">
    <div class="flex items-center justify-between h-14 px-6 md:px-10">
      <NuxtLink
        to="/"
        class="font-display font-bold tracking-tight text-lg text-on-surface hover:text-primary transition-colors"
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
