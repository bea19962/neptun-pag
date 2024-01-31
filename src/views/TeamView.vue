<template>
  <div class="team">
    <div class="team__title">The Team</div>
    <div v-for="member in teamMembers" :key="member.id" class="team__row">
      {{ member }}
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

const teamMembers = ref([])
const teamMembersPath = 'team.json'

onBeforeMount(() => {
  fetch(teamMembersPath)
    .then((res) => res.json())
    .then((data) => {
      teamMembers.value = data
    })
    .catch((err) => console.error('Error fetching projects:', err))
})
</script>

<style lang="scss" scoped>
.team{
  color: white;
}
</style>
