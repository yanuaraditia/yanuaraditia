<template>
  <SectionBase>
    <Container>
      <Headline>
        <span>Project</span>
      </Headline>
      <div class="grid gap-5 lg:grid-cols-3">
        <CardItem v-for="project in projects" :image="'https://'+project.fields.image.fields.file.url+`?w=1080`"
                  :title="project.fields.title + ` — ` + project.fields.description"
                  :to="`/projects/${project.fields.slug}`" :key="`nk-${project.sys.id}`"/>
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
