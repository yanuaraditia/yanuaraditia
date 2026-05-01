<template>
  <section
    class="relative overflow-hidden chamfer-sm bg-background text-primary px-8 py-16 lg:py-24 text-center"
  >
    <!-- Radial highlight overlays -->
    <div
      class="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
      style="
        background:
          radial-gradient(
            circle at 30% 20%,
            var(--color-primary),
            transparent 60%
          ),
          radial-gradient(
            circle at 80% 80%,
            var(--color-primary),
            transparent 50%
          );
      "
    />

    <div class="relative">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-4"
      >
        Let's build something together
      </h2>
      <p class="text-base md:text-lg opacity-90 max-w-xl mx-auto mb-8">
        Have an idea, a product to ship, or a team to scale? I'd love to hear
        about it.
      </p>
      <UiButton size="lg" variant="default" as-child>
        <NuxtLink to="mailto:me@yan.ad">
          Get in touch
          <Icon name="solar:arrow-right-linear" size="16px" class="ml-1" />
        </NuxtLink>
      </UiButton>
    </div>
  </section>
</template>
