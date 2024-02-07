<template>
  <button
    class="base-button"
    :class="{
      [`base-button-${name}`]: name,
      'base-button--active': active,
      'base-button--circle': circle
    }"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
    <!-- <div v-if="$slots.icon" class="base-button__icon"> -->
    <BaseIcon v-if="icon" :name="icon" :size="iconSize" />
    <!-- </div> -->
  </button>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  active: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },

})

const emits = defineEmits(['click'])

const handleClick = (e) => {
  if (!props.disabled) emits('click', e)
}
</script>

<style lang="scss" scoped>
.base-button {
  background-color: $neptun-yellow;
  color: $neptun-black;
  border: none;
  cursor: pointer;

  &:hover:not(.base-button--disabled) {
    background-color: pink;
  }

  &--circle {
    height: 50px;
    width: 50px;
    border-radius: 100%;
  }

  &--disabled {
    background-color: gray;
    color: white;
  }
}
</style>
