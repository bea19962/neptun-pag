<template>
  <div class="banner">
    <div v-for="message in messages" :key="message.id" class="moving-text">++ {{ message }} ++</div>
  </div>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
  }
})
</script>

<style lang="scss" scoped>
.banner {
  width: 100vw;
  height: 8vh;
  overflow: hidden;
  background-color: $light-neptun-yellow;
  text-align: center;
  white-space: nowrap;
  z-index: 99999;
  color: black;
  font-weight: 100;
  letter-spacing: .2rem;
  font-size: 38px;
}

.moving-text {
  display: inline-block;
  padding-left: 100%;
  animation: moveText 15s linear infinite;
}

@keyframes moveText {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
