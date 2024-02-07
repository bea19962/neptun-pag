<template>
  <div class="team">
    <div class="team__title">The Team</div>
    <div class="team__row">
      <TeamMemberCard v-for="member in teamMembers" :key="member.id" :member="member" />
    </div>
  </div>
</template>

<script setup>
import TeamMemberCard from '@/components/TeamMemberCard.vue'
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
.team {
  height: 100vh;
  color: white;
}
</style>
