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
    size: {
      type: String,
      default: () => 'md',
      validator: (value) => {
        return ['md', 'lg'].includes(value)
      },
    },
  },
}
</script>

<template>
  <button
    class="button"
    :style="`background-color: ${bgColor}; color: ${textColor}`"
    :class="{ 'button--lg': size === 'lg' }"
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
  min-width: 150px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:focus-within {
    &:not([disabled]) {
      background-color: var(--color-2);
      box-shadow: 3px 3px 6px #00000029;
      transition: all 0.2s ease;
    }
  }

  &--lg {
    padding: 18px 24px;
    font-size: 20px;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
