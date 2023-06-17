<script setup lang="ts">

import Container from "~/components/Section/Container.vue";
</script>

<template>
  <nav class="sticky lg:hidden top-0 z-50 py-3 border-b dark:border-neutral-800 bg-white dark:bg-neutral-900">
    <Container>
      <div class="relative flex gap-3 items-center">
        <div class="grow">
          <NuxtLink to="/" class="text-lg font-extrabold">
            <span>Yanuar Aditia</span>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2.5">
          <div>
            <NavbarColorToggle/>
          </div>
          <button type="button" class="">
            <nuxt-img src="/yan-reg.png" class="w-[2.5rem] aspect-square rounded-full"/>
          </button>
        </div>
      </div>
    </Container>
  </nav>
</template>

<style scoped>

</style>
