<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => {
	return colorMode.preference === 'dark'
})
const toggleDarkMode = () => {
	if (isDark.value) {
		colorMode.preference = 'light'
	} else {
		colorMode.preference = 'dark'
	}
}
</script>

<template>
	<div class="px-6">
		<div class="relative overflow-hidden group border dark:border-neutral-700 rounded-full aspect-square">
			<div :class="[
					'p-3 transition-all',
					(isDark ? '-translate-y-full' : 'translate-y-0')
			]">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
					<path
							fill="currentColor"
							d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q25-3 39 18t-1 44q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q21-14 43-1.5t19 39.5q-14 138-117.5 229T480-120Z"/>
				</svg>
			</div>
			<div :class="[
					'p-3 transition-all',
					(isDark ? '-translate-y-full' : 'translate-y-0')
			]">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
					<path
							fill="currentColor"
							d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Z"/>
				</svg>
			</div>
			<button class="absolute inset-0" type="button" @click="toggleDarkMode"></button>
		</div>
	</div>
</template>

<style scoped>

</style>
