<template>
  <div class="team-member-card">
    <h3>{{ member.name }}</h3>
    <p>{{ member.position }}</p>
  </div>
</template>

<script setup>
defineProps({
  member: Object
})
</script>

<style scoped>
.team-member-card {
  color: aliceblue;
}
</style>
