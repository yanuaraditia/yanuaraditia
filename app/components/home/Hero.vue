<template>
  <section class="border-b bg-background relative">
    <div class="absolute inset-0">
      <EffectDotField
        :dot-radius="1.5"
        :dot-spacing="14"
        :bulge-strength="67"
        :glow-radius="160"
        :sparkle="false"
        :wave-amplitude="0"
        :cursor-radius="500"
        :cursor-force="0.1"
        bulge-only
        gradient-from="#35530e"
        gradient-to="#A0FFBC"
        glow-color="#120F17"
      />
    </div>
    <div class="container mx-auto grid md:grid-cols-2 items-center relative">
      <div class="px-5 py-10 md:px-12 md:py-24">
        <Heading
          style="view-transition-name: entry-title"
          class="text-3xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          <span class="block">Hi, I'm</span>
          <span class="block">Yanuar, a</span>
          <span class="block text-primary">
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
          I have been breaking and fixing the internet for almost 10 years. I
          specialize in scalable web platforms, developer experience, and
          architecture that doesn't make future-me cry.
        </p>

        <div class="flex flex-wrap gap-3">
          <UiButton as-child size="lg">
            <NuxtLink to="mailto:me@yan.ad">Contact Me</NuxtLink>
          </UiButton>
          <UiButton variant="outline" as-child size="lg">
            <NuxtLink to="/project">See my Projects</NuxtLink>
          </UiButton>
        </div>
      </div>

      <!-- Right-side: animated terminal (desktop only) -->
      <div
        class="hidden lg:flex h-full items-center justify-center relative px-6 py-12"
        style="view-transition-name: entry-subs"
      >
        <HomeHeroTerminal />
      </div>
    </div>
  </section>
</template>
