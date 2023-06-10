<template>
	<SectionBase>
		<div class="absolute top-0 left-0 w-full h-72 xl:h-96 overflow-hidden">
			<nuxt-img :src="`https://`+blog.fields.image.fields.file.url+`?fm=webp`" :alt="blog.fields.image.fields.title"
								class="w-full mb-5 opacity-30" loading="lazy"/>
			<span class="w-full bg-gradient-to-t bottom-0 from-white dark:from-neutral-900 -top-24 absolute left-0"></span>
		</div>
		<Container>
			<div class="lg:mx-auto lg:w-8/12">
				<span class="text-primary-600 font-medium" v-text="blog.fields.blogCategory.fields.title"></span>
				<Headline>
					<span v-text="blog.fields.title"></span>
				</Headline>
				<p class="text-lg mb-7" v-text="blog.fields.description"></p>
				<div class="flex gap-3.5 mb-10 place-items-center">
					<div>
						<div class="aspect-square w-16 p-1 border-2 border-primary-600 h-16 rounded-full overflow-hidden">
							<img src="~/assets/yan-reg.webp" class="rounded-full w-full" alt="">
						</div>
					</div>
					<div>
						<div class="font-semibold text-xl">Yanuar Aditia</div>
						<div class="text-sm flex gap-3 dark:text-neutral-400">
							<span v-text="formatDate(blog.sys.createdAt)"></span>
							<span>•</span>
							<span>5 minute read</span>
						</div>
					</div>
				</div>
				<div class="prose dark:prose-invert max-w-none" v-html="blog.contentRendered"></div>
			</div>
		</Container>
	</SectionBase>
</template>

<script setup lang="ts">
import {formatDate} from "~/utils/dateFormatter";
import {getSingle} from "~/repositories/blogRepository";
import Headline from "~/components/Typo/Headline.vue";
import Container from "~/components/Section/Container.vue";

const route = useRoute()
const blog = await getSingle(route.params.slug)

if (typeof blog === 'undefined' || !blog) {
	throw createError({
		statusCode: 404,
		statusMessage: "Post not found"
	})
} else {
	useHead({
		title: blog.fields.title,
		meta: [
			{
				name: 'twitter:image',
				content: blog.fields.image.fields.file.url
			},
			{
				name: 'og:image',
				content: blog.fields.image.fields.file.url
			},
			{
				name: 'description',
				content: blog.fields.description
			}
		]
	})
}


</script>

<style scoped>

</style>
