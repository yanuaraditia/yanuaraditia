<script setup lang="ts">
import { animate, stagger } from 'animejs'
import { Motion } from 'motion-v'

const systemMap = ref<HTMLElement | null>(null)
const reduceMotion = ref(false)
let animationScope: { revert: () => void } | undefined

const capabilities = [
  {
    index: '01',
    icon: 'solar:code-square-linear',
    title: 'Product engineering',
    description:
      'Translate ambiguous product goals into maintainable web and mobile systems with a fast feedback loop.',
    tags: ['Web platforms', 'Mobile apps', 'Design systems']
  },
  {
    index: '02',
    icon: 'solar:structure-linear',
    title: 'Platform & architecture',
    description:
      'Design boundaries, APIs, delivery paths, and cloud foundations that let teams ship without creating operational drag.',
    tags: ['Distributed systems', 'Cloud', 'Developer experience']
  },
  {
    index: '03',
    icon: 'solar:users-group-rounded-linear',
    title: 'Technical leadership',
    description:
      'Create clarity across teams through architecture decisions, pragmatic standards, mentoring, and hands-on delivery.',
    tags: ['System strategy', 'Team enablement', 'Quality']
  }
]

onMounted(async () => {
  reduceMotion.value = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (reduceMotion.value || !systemMap.value) return

  const { createScope } = await import('animejs')

  animationScope = createScope({ root: systemMap.value }).add(() => {
    animate('.flow-line', {
      strokeDashoffset: [48, 0],
      duration: 2600,
      delay: stagger(180),
      loop: true,
      ease: 'linear'
    })

    animate('.signal-dot', {
      opacity: [0.25, 1, 0.25],
      scale: [0.8, 1.18, 0.8],
      duration: 1800,
      delay: stagger(260),
      loop: true,
      ease: 'inOutSine'
    })
  })
})

onBeforeUnmount(() => animationScope?.revert())
</script>

<template>
  <section id="capabilities" class="section-shell border-t border-border/70">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Operating model / 01</p>
        <h2 class="section-title">
          I work across the system, not inside a silo.
        </h2>
      </div>
      <p class="section-copy">
        Principal engineering is a connective role. I move between product
        intent, software architecture, delivery systems, and team constraints to
        make the whole organization more effective.
      </p>
    </div>

    <div
      class="mt-12 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div class="bg-background p-5 sm:p-8">
        <div
          v-for="(capability, index) in capabilities"
          :key="capability.title"
          class="group border-b border-border py-7 first:pt-0 last:border-0 last:pb-0"
        >
          <Motion
            tag="article"
            :initial="{ opacity: 0, y: 24 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true, margin: '-10% 0px' }"
            :transition="{ duration: 0.55, delay: index * 0.08 }"
          >
            <div class="mb-4 flex items-center gap-4">
              <span class="capability-icon">
                <Icon :name="capability.icon" class="size-5" />
              </span>
              <span class="font-mono text-xs text-primary">
                {{ capability.index }}
              </span>
              <h3
                class="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
              >
                {{ capability.title }}
              </h3>
            </div>
            <p
              class="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              {{ capability.description }}
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="tag in capability.tags" :key="tag" class="tech-tag">
                {{ tag }}
              </span>
            </div>
          </Motion>
        </div>
      </div>

      <div
        ref="systemMap"
        class="system-map relative min-h-[540px] overflow-hidden bg-surface p-5 sm:p-8"
      >
        <div class="absolute inset-0 technical-grid opacity-60" />
        <div class="relative z-10 flex items-center justify-between">
          <div>
            <p
              class="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
            >
              System topology
            </p>
            <p class="mt-2 text-sm text-foreground">
              From intent to reliable delivery
            </p>
          </div>
          <span class="status-chip"><i /> operational</span>
        </div>

        <svg
          class="absolute inset-x-0 top-24 h-[390px] w-full"
          viewBox="0 0 620 390"
          fill="none"
          aria-hidden="true"
        >
          <path class="flow-line" d="M104 70H252V194H362" />
          <path class="flow-line" d="M104 194H362" />
          <path class="flow-line" d="M104 318H252V194" />
          <path class="flow-line" d="M362 194H500V96" />
          <path class="flow-line" d="M362 194H500V292" />
        </svg>

        <div class="absolute left-[8%] top-[26%] map-node">
          <span><Icon name="solar:lightbulb-bolt-linear" /> 01</span>
          <strong>Product</strong>
          <small>intent + users</small>
        </div>
        <div class="absolute left-[8%] top-[49%] map-node">
          <span><Icon name="solar:users-group-rounded-linear" /> 02</span>
          <strong>Teams</strong>
          <small>context + delivery</small>
        </div>
        <div class="absolute left-[8%] top-[72%] map-node">
          <span><Icon name="solar:server-square-linear" /> 03</span>
          <strong>Platform</strong>
          <small>tools + constraints</small>
        </div>
        <div
          class="absolute left-[48%] top-[49%] -translate-x-1/2 map-node map-node-primary"
        >
          <span class="signal-dot"><Icon name="solar:structure-linear" /></span>
          <strong>Architecture</strong>
          <small>decisions + boundaries</small>
        </div>
        <div class="absolute right-[7%] top-[31%] map-node">
          <span class="signal-dot"
            ><Icon name="solar:chart-square-linear"
          /></span>
          <strong>Outcomes</strong>
          <small>value + velocity</small>
        </div>
        <div class="absolute right-[7%] top-[68%] map-node">
          <span class="signal-dot"
            ><Icon name="solar:shield-check-linear"
          /></span>
          <strong>Reliability</strong>
          <small>quality + operations</small>
        </div>

        <div
          class="absolute inset-x-5 bottom-5 z-10 grid grid-cols-3 border border-border bg-background/80 backdrop-blur sm:inset-x-8"
        >
          <div class="map-stat">
            <span>scope</span><strong>end-to-end</strong>
          </div>
          <div class="map-stat border-x border-border">
            <span>mode</span><strong>hands-on</strong>
          </div>
          <div class="map-stat"><span>bias</span><strong>outcomes</strong></div>
        </div>
      </div>
    </div>
  </section>
</template>
