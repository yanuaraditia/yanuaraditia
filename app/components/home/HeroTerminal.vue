<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'

interface Step {
  prompt: string
  command: string
  output: string[]
  stacks: string[]
}

type TerminalUi = 'mac' | 'windows' | 'generic'

const steps: Step[] = [
  {
    prompt: '~/yan',
    command: 'bun create nuxt@latest yan',
    output: [
      '◐ Installing dependencies...',
      'bun install v1.x.x',
      '[1/1] Installing dependencies...',
      '...',
      '✔ Installation completed.',
      '✔ Types generated in .nuxt.'
    ],
    stacks: ['vuejs', 'nuxt', 'tailwindcss']
  },
  {
    prompt: '~/yan',
    command: 'bun create next-app@latest my-app --yes',
    output: [
      'Success! Created [project-name] at /path/to/[project-name]',
      '',
      'Inside that directory, you can run several commands:',
      '',
      '  bun run dev',
      '    Starts the development server.',
      '',
      '  bun run build',
      '    Builds the app for production.',
      '',
      '  bun run start',
      '    Runs the built app in production mode.',
      '',
      'We suggest that you begin by typing:',
      '',
      '  cd [project-name]',
      '  bun run dev'
    ],
    stacks: ['react', 'nextjs', 'tailwindcss']
  },
  {
    prompt: '~/api',
    command: 'php artisan serve',
    output: [
      'Starting Laravel development server: http://127.0.0.1:8000',
      '[Thu May  2 06:15:20 2026] PHP 8.2.0 Development Server (http://127.0.0.1:8000) started',
      '[Thu May  2 06:15:25 2026] 127.0.0.1:54321 [200]: /',
      '[Thu May  2 06:15:26 2026] 127.0.0.1:54322 [200]: /css/app.css'
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
const terminalUi = ref<TerminalUi>('generic')

const current = computed(() => steps[stepIndex.value]!)
const hostLabel = computed(() => {
  switch (terminalUi.value) {
    case 'mac':
      return 'macbook'
    case 'windows':
      return 'workstation'
    default:
      return 'devbox'
  }
})

const shellLabel = computed(() => {
  switch (terminalUi.value) {
    case 'mac':
      return 'yanuar — - zsh 320x120'
    case 'windows':
      return 'Command Prompt'
    default:
      return '~ — zsh'
  }
})

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

const detectTerminalUi = (): TerminalUi => {
  if (!import.meta.client) return 'generic'

  const platform = [navigator.userAgent, navigator.platform]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  if (/(mac|iphone|ipad|ipod)/.test(platform)) {
    return 'mac'
  }

  if (/win/.test(platform)) {
    return 'windows'
  }

  return 'generic'
}

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
  terminalUi.value = detectTerminalUi()
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
      class="bg-zinc-950 border text-zinc-100 font-mono text-sm shadow-2xl shadow-black/40 overflow-hidden"
      :class="{
        'rounded-xl': terminalUi === 'mac'
      }"
      :while-hover="{ scale: 1.015, rotateX: -2, rotateY: 2 }"
      :transition="{ type: 'spring', damping: 18, stiffness: 220 }"
      style="transform-style: preserve-3d; perspective: 1000px"
    >
      <!-- Title bar -->
      <div class="border-b border-zinc-800/80 bg-zinc-900">
        <div
          v-if="terminalUi === 'mac'"
          class="grid grid-cols-[auto_1fr_auto] items-center px-3 gap-4 py-2"
        >
          <div class="flex items-center gap-2">
            <span class="size-3 rounded-full bg-red-500/80" />
            <span class="size-3 rounded-full bg-yellow-500/80" />
            <span class="size-3 rounded-full bg-green-500/80" />
          </div>
          <div
            class="text-xs flex items-center gap-2 text-zinc-500 font-medium"
          >
            <Icon name="fxemoji:folder" class="size-3" />
            {{ shellLabel }}
          </div>
          <span />
        </div>

        <div
          v-else-if="terminalUi === 'windows'"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-2 min-w-0 py-2 px-3">
            <Icon name="mdi:terminal" class="size-3.5" />
            <span class="truncate text-xs text-zinc-400 font-medium">
              {{ shellLabel }}
            </span>
          </div>

          <div class="flex items-center">
            <span
              class="inline-flex size-8 items-center justify-center text-xs"
            >
              <Icon name="mdi:minimize" />
            </span>
            <span
              class="inline-flex size-8 items-center justify-center text-xs"
            >
              <Icon name="mdi:maximize" />
            </span>
            <span
              class="inline-flex size-8 items-center justify-center text-xs"
            >
              <Icon name="mdi:close" />
            </span>
          </div>
        </div>

        <div v-else class="flex items-center gap-2 px-3 py-2">
          <span class="size-3 rounded-full bg-red-500/80" />
          <span class="size-3 rounded-full bg-yellow-500/80" />
          <span class="size-3 rounded-full bg-green-500/80" />
          <span class="ml-2 text-xs text-zinc-500">{{ shellLabel }}</span>
        </div>
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
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-x-2 text-xs">
                <span class="text-fuchsia-400">╭─</span>
                <span class="font-semibold text-emerald-400">yanuar</span>
                <span class="text-zinc-500">at</span>
                <span class="font-medium text-sky-400">{{ hostLabel }}</span>
                <span class="text-zinc-500">in</span>
                <span class="font-medium text-amber-300">{{
                  current.prompt
                }}</span>
                <span class="text-zinc-600">on</span>
                <span
                  class="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-emerald-300"
                >
                  main
                </span>
              </div>

              <div class="flex flex-wrap items-center gap-x-2">
                <span class="text-fuchsia-400">╰─</span>
                <span class="font-semibold text-primary">❯</span>
                <span class="text-zinc-100">{{ typed }}</span>
              </div>

              <Motion
                v-if="!showOutput"
                tag="span"
                class="inline-block w-2 h-4 bg-zinc-100 align-middle"
                :animate="{ opacity: [1, 0.2, 1] }"
                :transition="{ duration: 0.9, repeat: Infinity }"
              />
            </div>

            <ul
              v-if="showOutput"
              class="mt-3 space-y-1 border-l border-zinc-800 pl-4"
            >
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
        class="rounded-lg size-12 inline-flex items-center justify-center"
        :transition="{
          type: 'spring',
          damping: 18,
          stiffness: 220,
          delay: current.stacks.includes(stack) ? i * 0.04 : 0
        }"
      >
        <Icon :name="`lineicons:${stack}`" class="size-5 lg:size-7" />
      </Motion>
    </div>
  </Motion>
</template>
