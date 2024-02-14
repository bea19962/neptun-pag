<template>
  <div class="team">
    <div class="view_title">The Team</div>
    <p>Hello, we are NEPTUN Interactive,
an Indie-Media developer team based in Cologne Germany. After 6 years of successful collaboration in our studies, we founded our studio in January 2023. Aside of the production of our own products, we also offer fast and effective supervision or practical solutions for media-creation projects.</p>
    <div class="team__row">
      <TeamMemberCard v-for="member in teamMembers" :key="member.id" :member="member" />
    </div>
  </div>
</template>

<script setup>
import TeamMemberCard from '@/components/TeamMemberCard.vue'
import { ref, onBeforeMount} from 'vue'
import { setupScrollAnimation } from '@/utils/onScrollAnim.js'; 

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

  &__row {
    display: flex;
    flex-direction: row;
    gap: 1%;
    justify-content: center;
  }
}
</style>
