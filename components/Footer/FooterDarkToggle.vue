<template>
	<div @click="toggleDarkMode"
			 class="shadow-sm lg:hidden text-white rounded-full flex items-center cursor-pointer w-11 bg-primary h-6 relative"
			 :class="[(isDark ? 'bg-primary-600 border-primary-600' : 'bg-neutral-200 ring-2 ring-neutral-400')]">
			<span
					class="rounded-full w-4 h-4 bg-white absolute transition-all ease-in-out"
					:class="[(isDark ? 'left-6' : 'left-1 bg-neutral-400 scale-75')]"></span>
	</div>
</template>

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
