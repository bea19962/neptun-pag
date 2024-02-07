<template>
  <div class="card" :style="backgroundStyle">
    <div class="card-header">
      <slot name="header">
        <img src="" />
      </slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
    <BaseButton>Chevron</BaseButton>
    <div class="card-gradient"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from './Base/BaseButton.vue'

const props = defineProps({
  image: String
})

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ffd667;
  background-color: black;
  margin: 1rem;
  padding: 1rem;
  width: 60%;
  height: 400px;
  color: white;

  &-header {
  }
  &-footer {
    padding: 0.5rem 1rem;
  }
  &-gradient {
    background-image: url(@/assets/images/card-gradient.png);
  }
}
</style>
