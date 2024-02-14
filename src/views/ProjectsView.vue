<template>
  <div class="view_title">Our Projects</div>
  <div class="projects">
    <div class="projects_container">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
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
  max-width: 100vw;
  overflow-x: scroll;

  &_container {
    display: flex;
    flex-direction: row;
    width: fit-content;
  }
}
</style>
