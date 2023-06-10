<template>
  <SectionBase>
    <Container>
      <Headline>
        <span>Blog</span>
      </Headline>
      <div class="grid gap-5 lg:grid-cols-3">
        <CardItem v-for="blog in blogs" :image="'https://'+blog.fields.image.fields.file.url+`?w=1080&fm=webp`"
                  :title="blog.fields.title"
                  :to="`/blogs/${blog.fields.slug}`" :key="`nk-${blog.sys.id}`"/>
      </div>
    </Container>
  </SectionBase>
</template>
<script setup lang="ts">
import {getAllBlogs} from "~/repositories/blogRepository";
import Headline from "~/components/Typo/Headline.vue";
import Container from "~/components/Section/Container.vue";

const blogs = await getAllBlogs()

useHead({
  title: "Blog"
})
</script>
