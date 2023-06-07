<template>
	<SectionBase>
		<Container>
			<div class="grid xl:grid-cols-5 gap-10">
				<div class="xl:col-span-2">
					<div class="xl:sticky xl:top-36">
						<Headline>
							<span>Project</span>
						</Headline>
						<p class="text-lg mb-10">Main and side-project portfolio. There all my professional
							project excluding professional</p>
					</div>
				</div>
				<div class="xl:col-span-3">
					<div class="grid gap-5">
						<CardItem v-for="project in projects" :image="'https://'+project.fields.image.fields.file.url"
											:title="project.fields.title"
											:to="`/projects/${project.fields.slug}`" :key="`nk-${project.sys.id}`"/>
					</div>
				</div>
			</div>
		</Container>
	</SectionBase>
</template>
<script lang="ts">
export default {
	name: "index",
}
</script>

<script setup lang="ts">
import {getAllProjects} from "~/repositories/projectRepository";
import Headline from "~/components/Typo/Headline.vue";
import Container from "~/components/Section/Container.vue";

const projects = await getAllProjects()

useHead({
	title: "Project"
})
</script>

<style scoped>

</style>
