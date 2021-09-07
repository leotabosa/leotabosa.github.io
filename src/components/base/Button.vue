<script>
export default {
  name: 'Button',
  props: {
    bgColor: {
      type: String,
      default: () => '',
    },
    textColor: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<template>
  <button
    class="button"
    :style="`background-color: ${bgColor}; color: ${textColor}`"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.button {
  will-change: background-color;
  background-color: var(--color-1);
  color: white;
  outline: none;
  border: none;
  padding: 18px 24px;
  border-radius: 8px;
  font-size: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:focus-within {
    background-color: var(--color-2);
    box-shadow: 3px 3px 6px #00000029;
    transition: all 0.2s ease;
  }
}
</style>
