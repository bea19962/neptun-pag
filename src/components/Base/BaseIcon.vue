<template>
  <div class="base-icon" :class="[`icon-${name}`, `base-icon--size-${size}`]" v-bind="$attrs">
    <Icon />
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'lg',
    validator: (value) => {
      return ['xs', 'sm', 'md', 'lg'].includes(value)
    }
  }
})

console.log(props.name)
const Icon = computed(() =>
  defineAsyncComponent(() => import(`../../assets/icons/${props.name}.svg`))
)
</script>

<style lang="scss" scoped>
.base-icon {
  display: flex;
  color: aliceblue;

  &--size-xs {
    height: 0.625rem;
    width: 0.625rem;
  }
  &--size-sm {
    height: 0.75rem;
    width: 0.75rem;
  }
  &--size-md {
    height: 0.875rem;
    width: 0.875rem;
  }
  &--size-lg {
    height: 1rem;
    width: 1rem;
  }
  svg {
    height: 100%;
    width: 100%;
  }
}
</style>
