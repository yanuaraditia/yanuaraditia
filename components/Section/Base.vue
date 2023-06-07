<script setup lang="ts">
defineProps<{
	addClass?: string
}>()
</script>

<template>
	<section :class="[
			'py-7 lg:py-28',
			addClass
	]">
		<slot/>
	</section>
</template>

<style scoped>

</style>
