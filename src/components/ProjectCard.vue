<template>
  <div class="card" :style="backgroundStyle">
    <div class="card-header">
      <template v-if="project.logo">
        <img :src="project.logo" :alt="project.alt_logo" class="card-header-image" />
      </template>
      <template v-else>
        {{ project.projectTitle }}
      </template>
    </div>
    <div class="card-footer">
      {{ project.description }}
      <BaseButton circle :icon="chevron"> </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from './Base/BaseButton.vue'

const props = defineProps({
  project: Object
})

const backgroundStyle = computed(() => ({
  backgroundImage: ` linear-gradient(180deg, rgba(255, 251, 251, 0.00) 1.38%, rgba(0, 0, 0, 0.40) 66.01%, #000 100%), url(${props.project.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid $neptun-yellow;
  background-color: $neptun-black;
  margin: 1.5rem;
  padding: 1rem;
  width: 800px;
  height: 400px;
  color: white;

  &-header {
    width: 40%;
    &-image {
      width: 100%;
    }
  }
  &-footer {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1.9fr 0.1fr;
  }
}
</style>
