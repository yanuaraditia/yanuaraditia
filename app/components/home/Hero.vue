<script setup lang="ts">
import { Motion } from 'motion-v'

const expertise = [
  'Architecture',
  'Web & mobile',
  'Cloud platforms',
  'Developer experience',
  'Technical strategy',
  'Team enablement'
]

const metrics = [
  { value: '15+', label: 'years building software' },
  { value: '360°', label: 'product to platform scope' },
  { value: 'IC+', label: 'hands-on technical leadership' }
]
</script>

<template>
  <section
    id="overview"
    class="relative overflow-hidden border-b border-border/70"
  >
    <div class="hero-glow" />
    <div class="technical-grid absolute inset-0 opacity-35" />

    <div
      class="page-shell relative grid min-h-[calc(100svh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24"
    >
      <div>
        <Motion
          tag="div"
          :initial="{ opacity: 0, y: 18 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.55 }"
          class="mb-8 flex flex-wrap items-center gap-3"
        >
          <span class="status-chip"><i /> available for high-impact work</span>
          <span
            class="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            Jakarta / UTC+7
          </span>
        </Motion>

        <Motion
          tag="p"
          class="eyebrow mb-5"
          :initial="{ opacity: 0, y: 18 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.55, delay: 0.08 }"
        >
          Principal engineer · software generalist
        </Motion>

        <Motion
          tag="h1"
          class="max-w-5xl text-balance text-[clamp(3.3rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-foreground"
          :initial="{ opacity: 0, y: 28, filter: 'blur(10px)' }"
          :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
          :transition="{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }"
        >
          Engineering the
          <span class="text-primary">whole system.</span>
        </Motion>

        <Motion
          tag="p"
          class="mt-8 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.28 }"
        >
          I’m Yanuar, a principal engineer who connects product, architecture,
          platform, and people. I turn complex software challenges into clear
          technical direction—and stay close enough to the code to make it real.
        </Motion>

        <Motion
          tag="div"
          class="mt-10 flex flex-wrap items-center gap-3"
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.55, delay: 0.38 }"
        >
          <NuxtLink to="#work" class="button-primary">
            Explore selected work
            <Icon name="solar:arrow-right-linear" class="size-4" />
          </NuxtLink>
          <NuxtLink to="mailto:hello@yan.ad" external class="button-secondary">
            Start a conversation
          </NuxtLink>
        </Motion>
      </div>

      <Motion
        tag="aside"
        class="relative lg:pl-8"
        :initial="{ opacity: 0, x: 28 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }"
      >
        <div
          class="border border-border bg-background/70 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-6"
        >
          <div
            class="mb-6 flex items-center justify-between border-b border-border pb-4"
          >
            <div class="flex items-center gap-2">
              <span class="size-2 rounded-full bg-primary" />
              <span
                class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >profile.sys</span
              >
            </div>
            <span class="font-mono text-[10px] text-muted-foreground"
              >v2026.08</span
            >
          </div>

          <div class="space-y-5 font-mono text-xs sm:text-sm">
            <div class="terminal-row">
              <span class="terminal-key">role</span>
              <span class="terminal-value">Principal Engineer</span>
            </div>
            <div class="terminal-row">
              <span class="terminal-key">focus</span>
              <span class="terminal-value">Systems that scale teams</span>
            </div>
            <div class="terminal-row items-start">
              <span class="terminal-key">range</span>
              <div class="flex max-w-[16rem] flex-wrap justify-end gap-1.5">
                <span v-for="item in expertise" :key="item" class="tech-tag">{{
                  item
                }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 border-t border-border pt-5">
            <p
              class="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              current directive
            </p>
            <p class="mt-3 text-sm leading-6 text-foreground">
              Make difficult systems understandable, operable, and useful.
            </p>
          </div>
        </div>
      </Motion>
    </div>

    <div class="page-shell relative grid border-t border-border sm:grid-cols-3">
      <Motion
        v-for="(metric, index) in metrics"
        :key="metric.label"
        tag="div"
        class="border-b border-border px-0 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
        :initial="{ opacity: 0, y: 18 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.5, delay: index * 0.08 }"
      >
        <strong class="font-mono text-xl text-foreground">{{
          metric.value
        }}</strong>
        <span class="ml-3 text-sm text-muted-foreground">{{
          metric.label
        }}</span>
      </Motion>
    </div>
  </section>
</template>
