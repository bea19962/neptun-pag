<template>
  <div class="projects">
    <div class="title">Our Projects</div>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = ref([])
const projectsPath = 'projects.json'

onBeforeMount(() => {
  fetch(projectsPath)
    .then((res) => res.json())
    .then((data) => {
      projects.value = data
    })
    .catch((err) => console.error('Error fetching projects:', err))
})
</script>

<style lang="scss" scoped>
.projects {
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
</style>
