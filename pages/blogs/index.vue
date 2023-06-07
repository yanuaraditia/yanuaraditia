<template>
	<section class="py-16 xl:py-20">
		<Container>
			<div class="grid xl:grid-cols-5 gap-10">
				<div class="xl:col-span-2">
					<div class="xl:sticky xl:top-36">
						<Headline>
							<span>Blog</span>
						</Headline>
						<p class="text-lg mb-10">Software engineer specialized in backend development and
							micro-services
							ecosystems</p>
					</div>
				</div>
				<div class="xl:col-span-3">
					<div class="grid gap-5 lg:grid-cols-2">
						<CardItem v-for="blog in blogs" :image="blog.fields.image.fields.file.url" :title="blog.fields.title"
											:to="`/blogs/${blog.fields.slug}`" :key="`nk-${blog.sys.id}`"/>
					</div>
				</div>
			</div>
		</Container>
	</section>
</template>
<script>
export default {
	name: "index",
}
</script>

<script setup>
import {getAllBlogs} from "~/repositories/blogRepository";
import Headline from "~/components/Typo/Headline.vue";
import Container from "~/components/Section/Container.vue";

const blogs = await getAllBlogs()

useHead({
	title: "Blog"
})
</script>

<style scoped>

</style>
