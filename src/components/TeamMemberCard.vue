<template>
  <div class="teammember-card">
    <BaseProfilePicture :src="member.image" :altText="member.name + ' picture'" />
    <h3>{{ member.name }}</h3>
    <p>{{ member.position }}</p>
    <div v-for="(url, key) in member.social" :key="key" class="social">
      <a v-if="url !== ''" :href="url" target="_blank" class="test">
        <BaseIcon :name="key" size="md" />
      </a>
    </div>
  </div>
</template>

<script setup>
import BaseProfilePicture from './Base/BaseProfilePicture.vue'
import BaseIcon from './Base/BaseIcon.vue'
import { onMounted } from 'vue'
import { setupScrollAnimation } from '@/utils/onScrollAnim'; 

defineProps({
  member: Object
})

onMounted(() => {
  setupScrollAnimation({
    selector: '.teammember-card', // Adjust the selector to target your animated elements
    animationClass: 'animate', // This class should contain the CSS animation rules
    delayStep: 100, // Delay in ms between each element's animation start
    threshold: 0.5 // Adjust as needed to control when the animation triggers
  });
});
</script>

<style lang="scss" scoped>
.teammember-card {
  width: 300px;
  border: 2px solid $muted-neptun-yellow;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  transform: translateX(-50px); /* Start off-screen */
  opacity: 0;
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-50px);
    opacity: 0; 
    filter: blur(2px);
  }
  to {
    transform: translateX(0);
    filter: blur(0);
    opacity: 1;
  }
}

.animate {
  animation: slideInFromLeft 0.5s ease-out forwards; 
}
</style>
