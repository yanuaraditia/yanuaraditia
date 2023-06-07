<template>
	<SectionBase add-class="relative overflow-hidden">
		<Container>
			<img src="~/assets/gitanuar.webp" loading="lazy" class="w-full mb-10 rounded-2xl" alt="Gitania & Yanuar"/>
			<div class="relative">
				<div class="grid xl:grid-cols-6 gap-10">
					<div class="xl:col-span-2 xl:order-2">
						<div class="sticky top-24">
							<div class="prose dark:prose-invert">
								<h3 class="text-xl font-medium">Skills</h3>
								<ul>
									<li>Product Management</li>
									<li>Team Manager</li>
									<li>Research & Development</li>
									<li>UX Research</li>
									<li>Supply Chain Management</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="xl:col-span-4">
						<Headline>
							<span>Hey there! My name is Yanuar Aditia, and Yanuar in short.</span>
						</Headline>
						<div class="prose mb-3 xl:mb-5 dark:prose-invert xl:text-lg max-w-none">
							<p>My name is Yanuar Aditia. Born and raised in Kebumen, Central Java, and currently reside in Yogyakarta.
								I received my bachelor’s degree in informatics engineering from the University of Amikom Yogyakarta,
								with a focus on database and web development.</p>
							<p>During my academic years, I participated in various activities to increase my skills in full-stack web
								development, including winning the AMICTA competition. My project focuses on how to integrate apps into
								the "internet of things" to handle a parking lot availability issue. Since February 2020, I've been
								working as a full-stack web developer for TRIES DIGITAL. I was in charge of creating back-end website
								applications as well as front-end website architecture. As a backend developer, I was able to enhance my
								skills in the Laravel framework, Rest API, and MySQL.</p>
							<p>During the instability of the company's performance in November 2020, I transferred to my current
								company name PT. Selalu Siap Solusi (KiriminAja) as software development lead, where I am responsible
								for researching existing stacks, offering functional changes as needed, creating and delivering new
								platforms, and resolving current tasks with teammates.</p>
							<p>As a developer who is interested in many new things, I plan to add focus to Product Management and UI /
								UX development. Furthermore I plan to experiment with new things that are relevant to my current
								interests.</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</SectionBase>
</template>

<script>
export default {
	name: "about"
}
</script>
<script setup>
import Headline from "~/components/Typo/Headline.vue";
import Container from "~/components/Section/Container.vue";

useHead({
	title: "About"
})
</script>

<style scoped>

</style>
