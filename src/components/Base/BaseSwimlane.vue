<template>
  <div class="base-swimlane">
    <div ref="container" class="base-swimlane-container">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick, ref } from 'vue'
import setupHorizontalScroll from '@/utils/horizontalScroll'

const container = ref(null)

onMounted(() => {
  nextTick().then(() => {
    if (container.value) {
      setupHorizontalScroll(container.value);
    }
  });
});
</script>


<style lang="scss" scoped>
.base-swimlane {
  overflow-x: hidden;
  width: 100vw;

  &-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    will-change: transform; /* Optimize scrolling performance */
  }
}
</style>
