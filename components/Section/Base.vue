<script setup lang="ts">
defineProps<{
	addClass?: string,
  overrideClass?: string
}>()
</script>

<template>
	<section :class="[
			(overrideClass ?? 'py-7 lg:py-28'),
			addClass
	]">
		<slot/>
	</section>
</template>

<style scoped>

</style>
