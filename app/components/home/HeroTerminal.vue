<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'

interface Step {
  prompt: string
  command: string
  output: string[]
  stacks: string[]
}

const steps: Step[] = [
  {
    prompt: '~/yan',
    command: 'nuxi init my-portfolio',
    output: [
      '✔ Cloning template "v3"',
      '✔ Installing dependencies (bun)',
      '→ Vue 3 · Nuxt 3 · TypeScript ready'
    ],
    stacks: ['vuejs', 'nuxt', 'tailwindcss']
  },
  {
    prompt: '~/yan',
    command: 'pnpm dlx create-next-app@latest acme',
    output: [
      '✔ TypeScript · Tailwind · App Router',
      '✔ Dependencies installed in 2.4s',
      '→ React 19 · Next.js 15 ready'
    ],
    stacks: ['react', 'nextjs', 'tailwindcss']
  },
  {
    prompt: '~/api',
    command: 'php artisan serve',
    output: [
      'INFO  Server running on [http://127.0.0.1:8000]',
      '→ Laravel 11 · PHP 8.3',
      '→ queue · scheduler · pulse online'
    ],
    stacks: ['laravel']
  },
  {
    prompt: '~/svc',
    command: 'go run ./cmd/api',
    output: [
      '▸ listening on :8080',
      '▸ connected to postgres@db',
      '→ Go 1.23 · gRPC · clean architecture'
    ],
    stacks: ['go']
  },
  {
    prompt: '~/infra',
    command: 'docker compose up -d',
    output: [
      '✔ Network  yan_default  Created',
      '✔ Container app, db, redis  Started',
      '→ Docker · containerized everything'
    ],
    stacks: ['docker']
  }
]

const allStacks = [
  'vuejs',
  'react',
  'nuxt',
  'nextjs',
  'tailwindcss',
  'laravel',
  'go',
  'docker'
]

const stepIndex = ref(0)
const typed = ref('')
const showOutput = ref(false)
const outputCount = ref(0)

const current = computed(() => steps[stepIndex.value]!)

let timer: ReturnType<typeof setTimeout> | null = null

const clear = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    timer = setTimeout(resolve, ms)
  })

const typeCommand = async () => {
  typed.value = ''
  showOutput.value = false
  outputCount.value = 0
  const cmd = current.value.command
  for (let i = 0; i <= cmd.length; i++) {
    typed.value = cmd.slice(0, i)
    await wait(35 + Math.random() * 45)
  }
}

const revealOutput = async () => {
  showOutput.value = true
  for (let i = 1; i <= current.value.output.length; i++) {
    outputCount.value = i
    await wait(280)
  }
}

const runStep = async () => {
  await typeCommand()
  await wait(350)
  await revealOutput()
  await wait(2000)
  stepIndex.value = (stepIndex.value + 1) % steps.length
  runStep()
}

onMounted(() => {
  runStep()
})

onUnmounted(clear)
</script>

<template>
  <Motion
    tag="div"
    class="w-full max-w-md flex flex-col gap-3"
    :initial="{ opacity: 0, y: 24, filter: 'blur(16px)' }"
    :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
    :transition="{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }"
  >
    <Motion
      tag="div"
      class="rounded-md bg-zinc-950 border text-zinc-100 font-mono text-sm shadow-2xl shadow-black/40 overflow-hidden"
      :while-hover="{ scale: 1.015, rotateX: -2, rotateY: 2 }"
      :transition="{ type: 'spring', damping: 18, stiffness: 220 }"
      style="transform-style: preserve-3d; perspective: 1000px"
    >
      <!-- Title bar -->
      <div
        class="flex items-center gap-2 px-3 py-2 border-b border-zinc-800/80 bg-zinc-900"
      >
        <span class="size-2.5 rounded-full bg-red-500/80" />
        <span class="size-2.5 rounded-full bg-yellow-500/80" />
        <span class="size-2.5 rounded-full bg-green-500/80" />
        <span class="ml-2 text-xs text-zinc-500">~ — zsh</span>
      </div>

      <!-- Body -->
      <div class="p-4 min-h-64 leading-relaxed">
        <AnimatePresence mode="wait">
          <Motion
            :key="stepIndex"
            tag="div"
            :initial="{ opacity: 0, filter: 'blur(12px)', y: 8 }"
            :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
            :exit="{ opacity: 0, filter: 'blur(12px)', y: -8 }"
            :transition="{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }"
          >
            <div class="flex flex-wrap items-center gap-x-2">
              <span class="text-emerald-400">yan</span>
              <span class="text-zinc-500">in</span>
              <span class="text-sky-400">{{ current.prompt }}</span>
              <span class="text-zinc-500">$</span>
              <span class="text-zinc-100">{{ typed }}</span>
              <Motion
                v-if="!showOutput"
                tag="span"
                class="inline-block w-2 h-4 bg-zinc-100 align-middle"
                :animate="{ opacity: [1, 0.2, 1] }"
                :transition="{ duration: 0.9, repeat: Infinity }"
              />
            </div>

            <ul v-if="showOutput" class="mt-2 space-y-1">
              <Motion
                v-for="(line, i) in current.output.slice(0, outputCount)"
                :key="`${stepIndex}-${i}`"
                tag="li"
                class="text-zinc-300"
                :initial="{ opacity: 0, x: -16, filter: 'blur(8px)' }"
                :animate="{ opacity: 1, x: 0, filter: 'blur(0px)' }"
                :transition="{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }"
              >
                {{ line }}
              </Motion>
            </ul>
          </Motion>
        </AnimatePresence>
      </div>
    </Motion>

    <!-- Stack icon strip -->
    <div class="flex flex-wrap justify-center gap-2">
      <Motion
        v-for="(stack, i) in allStacks"
        :key="stack"
        tag="span"
        class="rounded-lg size-10 inline-flex items-center justify-center bg-on-surface-variant"
        :animate="
          current.stacks.includes(stack)
            ? {
                color: 'var(--color-primary)',
                border: '1px solid var(--color-primary)'
              }
            : {
                color: 'var(--color-on-surface-variant)'
              }
        "
        :transition="{
          type: 'spring',
          damping: 18,
          stiffness: 220,
          delay: current.stacks.includes(stack) ? i * 0.04 : 0
        }"
      >
        <Icon :name="`lineicons:${stack}`" size="20px" />
      </Motion>
    </div>
  </Motion>
</template>
