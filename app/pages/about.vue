<script setup lang="ts">
useSeoMeta({
  title: 'About Me',
  description:
    'Learn more about Yanuar Aditia, a full-stack web developer with a passion for product management and UI/UX development.'
})
</script>
<template>
  <WindowTitle>
    <div
      class="inline-flex border gap-3 p-1 border-outline-variant/30 rounded-lg"
    >
      <button>Overview</button>
      <button>Work</button>
      <button>Education</button>
    </div>
  </WindowTitle>
  <WindowContent class="grid lg:flex gap-10 items-center lg:px-16 lg:py-16">
    <div
      class="shadow-xl p-2 bg-gradient-to-b from-surface-container to-surface-container-high rounded-full"
    >
      <NuxtImg
        src="/me.jpeg"
        style="view-transition-name: entry-image"
        class="rounded-full w-32 h-32"
        alt="Yanuar Aditia"
      />
    </div>

    <div class="grow">
      <h1 class="text-2xl"><span class="font-bold">Yanuar</span> Aditia</h1>
      <div class="text-sm">
        <span>Version 11.00 Beta</span>
      </div>
      <div class="mt-5">
        <div class="flex gap-3 items-center">
          <div class="font-semibold">Location</div>
          <div>Jakarta, Indonesia</div>
        </div>
        <div class="flex gap-3 items-center">
          <div class="font-semibold">Role</div>
          <div>Full Stack Developer</div>
        </div>
        <div class="flex gap-3 items-center">
          <div class="font-semibold">Current Company</div>
          <div>KiriminAja</div>
        </div>
      </div>
    </div>
  </WindowContent>
</template>
