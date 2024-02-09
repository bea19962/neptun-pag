<template>
  <div class="teammember-card">
    <BaseProfilePicture :src="member.image" :altText="member.name + ' picture'" />
    <h3>{{ member.name }}</h3>
    <p>{{ member.position }}</p>
  </div>
</template>

<script setup>
import BaseProfilePicture from './Base/BaseProfilePicture.vue'

defineProps({
  member: Object
})
</script>

<style lang="scss" scoped>
.teammember-card {
  width: 300px;
  border: 2px solid $muted-neptun-yellow;
  padding: 20px;
  text-align: center;
}
</style>
