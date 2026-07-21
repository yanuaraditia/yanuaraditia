<template>
  <header class="bg-muted h-16">
    <div
      class="container mx-auto flex items-center bg-background border-b chamfer-sm-bottom justify-between h-full px-6 md:px-10"
    >
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
