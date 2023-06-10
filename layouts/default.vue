<template>
  <NuxtLoadingIndicator/>
  <div class="bg-white dark:bg-neutral-900 dark:text-primary-50 min-h-screen">
    <div class="relative">
			<Sidebar/>
      <main class="order-1 pb-20 lg:pb-0 lg:order-2 lg:pl-[6rem]">
        <slot/>
				<Footer/>
			</main>
    </div>
  </div>
</template>
