<template>
  <div>
    <div
      class="grid gap-3 lg:gap-12 lg:grid-cols-2 2xl:py-24"
      :style="{
        viewTransitionName: 'entry'
      }"
    >
      <div>
        <NuxtLink
          to="mailto:me@yan.ad"
          class="inline-block border border-primary bg-secondary-container border-dashed px-3.5 rounded-full mb-3 py-1 text-sm"
          >me@yan.ad</NuxtLink
        >
        <h1
          class="text-2xl xl:text-4xl 2xl:text-5xl mb-3 font-display font-bold leading-tight"
          style="view-transition-name: entry-title"
        >
          👋 Hi! I'm Yanuar Aditia, a
          <span class="text-primary">Software Engineer</span>
        </h1>
        <p class="xl:text-lg mb-7 xl:w-9/12">
          I have been working as a Software Engineer for +7 years. I am looking
          forward to collaborate with you!
        </p>
        <ul class="grid gap-y-3 mb-10">
          <li class="flex gap-2 items-center">
            <span class="text-primary">✓</span
            ><span>Product must be authentic</span>
          </li>
          <li class="flex gap-2 items-center">
            <span class="text-primary">✓</span><span>Solve pain elegantly</span>
          </li>
          <li class="flex gap-2 items-center">
            <span class="text-primary">✓</span
            ><span>User testing, feedback, and validation</span>
          </li>
        </ul>
        <div class="flex flex-col lg:flex-row gap-3">
          <NuxtLink
            to="/project"
            class="px-6 py-3.5 border border-primary bg-primary text-on-primary rounded-full"
          >
            See my Work
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="px-6 py-3.5 border border-primary text-primary rounded-full"
          >
            About me
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
