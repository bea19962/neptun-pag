<template>
  <div id="app">
    <HomeView />
    <BaseBanner :messages="bannerMessage" />
    <ProjectsView />
    <TeamView />
    <AboutView />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import BaseBanner from '@/components/Base/BaseBanner.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TeamView from '@/views/TeamView.vue'
import AboutView from '@/views/AboutView.vue'

const bannerMessage =  ref([])
const messagesPath = 'messages.json'

onBeforeMount(() => {
  fetch(messagesPath)
    .then((res) => res.json())
    .then((data) => {
      bannerMessage.value = data
    })
    .catch((err) => console.error('Error fetching bannerMessage:', err))
})
</script>

<style lang="scss" scoped>
#app {
  max-width: 100%;
  overflow-x: auto;
}
</style>
