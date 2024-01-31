<template>
  <div id="app">
    <HomeView/>
    <BaseBanner :message="bannerMessage" />
    <ProjectsView />
    <!-- <AboutView/> -->
  </div>
</template>

<script setup>
import BaseBanner from '@/components/Base/BaseBanner.vue'
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue'

const bannerMessage = 'We are now in Steam'
</script>

<style lang="scss" scoped>
#app{
  width: 100%;
}
</style>
