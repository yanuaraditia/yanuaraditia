<script setup lang="ts"></script>

<template>
  <section class="chamfer-sm border-b bg-background">
    <div class="grid md:grid-cols-2 items-center lg:divide-x">
      <div class="p-4 md:px-12 md:py-24">
        <Heading
          style="view-transition-name: entry-title"
          class="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          <span class="block">Hi, I'm</span>
          <span class="block">Yanuar Aditia</span>
          <span class="block text-super">
            <EffectRotatingText
              :texts="[
                'Software Engineer',
                'Software Architect',
                'Principal Engineer',
                'Tech Lead'
              ]"
            >
              Software Engineer
            </EffectRotatingText>
          </span>
        </Heading>

        <p class="text-lg md:text-xl max-w-xl mb-8">
          I have been building products for +7 years. I focus on scalable web
          platforms, developer experience, and clean architecture.
        </p>

        <div class="flex flex-wrap gap-3">
          <UiButton as-child size="lg">
            <NuxtLink to="mailto:me@yan.ad">Contact Me</NuxtLink>
          </UiButton>
          <UiButton variant="accent" as-child size="lg">
            <NuxtLink to="/project">See my Projects</NuxtLink>
          </UiButton>
        </div>
      </div>

      <!-- Right-side: animated terminal (desktop only) -->
      <div
        class="hidden lg:flex h-full items-center justify-center relative bg-linear-to-t from-current/2 px-6 py-12"
        style="view-transition-name: entry-subs"
      >
        <HomeHeroTerminal />
      </div>
    </div>
  </section>
</template>
