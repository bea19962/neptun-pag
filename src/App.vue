<template>
  <div id="app">
    <HomeView/>
    <BaseBanner :message="bannerMessage" />
    <ProjectsView />
    <TeamView/>
  </div>
</template>

<script setup>
import BaseBanner from '@/components/Base/BaseBanner.vue'
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue'
import TeamView from '@/views/TeamView.vue';

const bannerMessage = 'Whishlist us in Steam'
</script>

<style lang="scss" scoped>
#app{
  max-width: 100%;
  overflow-x: auto;
}
</style>
