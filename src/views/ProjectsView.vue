<template>
  <div class="view_title">Our Projects</div>
  <div class="projects">
    <div ref="projectsContainer" class="projects_container">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import horizontalScroll from '@/utils/horizontalScroll';

const projects = ref([])
const projectsPath = 'projects.json'
const projectsContainer = ref(null)


onMounted(() => {
  fetch(projectsPath)
    .then(res => res.json())
    .then(data => {
      projects.value = data;
      nextTick(() => {
        if (projectsContainer.value) {
          horizontalScroll(projectsContainer.value);
        }
      });
    })
    .catch(err => console.error('Error fetching projects:', err));
});
</script>

<style lang="scss" scoped>
.projects {
  overflow-x: hidden;
  width: 100vw;

  &_container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    will-change: transform; /* Optimize scrolling performance */
  }
}
</style>
