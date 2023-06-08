<template>
	<SectionBase add-class="relative">
		<SectionContainer>
			<div class="grid lg:my-5 lg:grid-cols-2 lg:gap-10 lg:items-center">
				<div class="xl:order-1">
					<a class="inline-block px-3.5 border rounded-full py-1 text-sm font-medium mb-5 border-primary-800 border-dashed dark:border-primary-300 bg-primary-600 text-primary-800 dark:text-primary-300 bg-opacity-10"
						 href="mailto:hi@yanuar.dev">hi@yanuar.dev</a>
					<Headline>
						<span>👋 Hi! </span>
						<span class="text-primary-600 dark:text-primary-500">I'm Yanuar, </span>
						<span>a Junior Product Designer </span>
						<span>based in Yogyakarta 🇮🇩</span>
					</Headline>
					<p class="xl:text-lg mb-8 xl:w-9/12 text-neutral-600 dark:text-neutral-400">I have been working as a Web
						Developer for <span v-text="`+` + (new Date().getFullYear() - 2018)"></span> years. I am looking forward to
						collaborate with you!</p>
					<ul class="grid gap-y-3 mb-10">
						<li class="flex gap-2 items-center">
							<span class="text-primary-800 dark:text-primary-300">✓</span>
							<span>Product must be authentic</span>
						</li>
						<li class="flex gap-2 items-center">
							<span class="text-primary-800 dark:text-primary-300">✓</span>
							<span>Solve pain elegantly</span>
						</li>
						<li class="flex gap-2 items-center">
							<span class="text-primary-800 dark:text-primary-300">✓</span>
							<span>User testing, feedback, and validation</span>
						</li>
					</ul>
					<div
							class="bg-primary-500 inline-flex items-center font-medium gap-3 pl-5 pr-4 rounded-full text-neutral-material-500 hover:bg-primary-600 transition-all py-3 text-lg relative">
						<span>Let's connect with me</span>
						<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
									d="M13.704 4.284a1 1 0 1 0-1.403 1.424L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78l-6.925-6.823Z"
									fill="currentColor"/>
						</svg>
						<nuxt-link to="/contact" class="absolute inset-0"/>
					</div>
				</div>
			</div>
		</SectionContainer>
	</SectionBase>
</template>

<script>
export default {
	name: "index"
}
</script>

<script setup>
import Headline from "~/components/Typo/Headline.vue";

const desc = "I’m from Indonesia and I have been working as a Software Engineer for more than 3 years. Currently I work for KiriminAja as Technical Lead since 2020. I am looking forward to collaborate with you!"
useHead({
	title: "Yanuar Aditia",
	meta: [
		{
			content: desc,
			name: "description"
		},
		{
			content: desc,
			name: "og:description"
		},
		{
			content: "Yanuar Aditia",
			name: "og:title"
		},
		{
			content: "https://yan.my.id",
			name: "og:url"
		},
	]
})
</script>

<style scoped>

</style>
