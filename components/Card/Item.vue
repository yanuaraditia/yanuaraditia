<script setup lang="ts">
defineProps<{
	image: string,
	title: string,
	to: string
}>()
</script>

<template>
	<div
			class="bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all hover:bg-primary-200 relative group rounded-2xl">
		<div class="aspect-video rounded-2xl overflow-hidden">
			<nuxt-img :src="image" :alt="title"/>
		</div>
		<div class="px-5 py-4 font-bold">
			<h2 v-text="title"></h2>
		</div>
		<nuxt-link :to="to" class="absolute inset-0"></nuxt-link>
	</div>

</template>

<style scoped>

</style>
