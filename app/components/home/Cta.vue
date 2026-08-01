<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <section id="contact" class="section-shell border-t border-border/70 pb-28">
    <Motion
      tag="div"
      class="relative overflow-hidden border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      :initial="{ opacity: 0, y: 28 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true, margin: '-10% 0px' }"
      :transition="{ duration: 0.65 }"
    >
      <div class="technical-grid absolute inset-0 opacity-50" />
      <div class="cta-glow" />
      <div
        class="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
      >
        <div>
          <p class="eyebrow">Open channel / 04</p>
          <h2
            class="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl"
          >
            Have a hard technical problem worth solving?
          </h2>
          <p
            class="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            I’m interested in consequential product and platform work—especially
            where architecture, execution, and team effectiveness need to move
            together.
          </p>
        </div>
        <NuxtLink
          to="mailto:hello@yan.ad"
          external
          class="button-primary shrink-0"
        >
          hello@yan.ad
          <Icon name="solar:arrow-up-right-linear" class="size-4" />
        </NuxtLink>
      </div>
    </Motion>
  </section>
</template>
