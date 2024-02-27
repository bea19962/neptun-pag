<template>
  <div class="view_title">Our Projects</div>
  <div class="projects">
    <div ref="projectsContainer" class="projects_container" @wheel="handleWheel">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = ref([])
const projectsPath = 'projects.json'

const projectsContainer = ref(null)

const handleWheel = (evt) => {
  console.log('Wheel event triggered', evt)
  evt.preventDefault()
  if (projectsContainer.value) {
    const scrollAmount = evt.deltaY * 2 // Increase the multiplier as needed
    projectsContainer.value.scrollLeft += 10000
    console.log('Scroll Left: ', projectsContainer.value.scrollLeft)
    console.log('Scrolling: ', scrollAmount)
  } else {
    console.log('projectsContainer is not available')
  }
}

onMounted(() => {
  console.log('Mounted - projectsContainer:', projectsContainer.value)
  fetch(projectsPath)
    .then((res) => res.json())
    .then((data) => {
      console.log('Projects loaded', data)
      projects.value = data
    })
    .catch((err) => console.error('Error fetching projects:', err))
})
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
  }
}
</style>
