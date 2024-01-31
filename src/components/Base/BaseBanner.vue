<template>
  <div class="banner">
    <div class="moving-text">{{ message }}</div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'default Message'
  }
})
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  overflow: hidden;
  background-color: white;
  text-align: center;
  white-space: nowrap;
  z-index: 99999;
  color: black;
}

.moving-text {
  display: inline-block;
  padding-left: 100%;
  animation: moveText 10s linear infinite;
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
