<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: () => '',
    },
    type: {
      type: String,
      default: () => 'input',
      validator: (val) => {
        return ['input', 'textarea'].includes(val)
      },
    },
    placeholder: {
      type: String,
      default: () => 'Input',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <input
    v-if="type === 'input'"
    class="input"
    :class="{ 'input--error': error }"
    :placeholder="placeholder"
    @input="({ target }) => $emit('input', target.value)"
    @blur="$emit('blur')"
  />
  <textarea
    v-else-if="type === 'textarea'"
    class="textarea"
    :class="{ 'input--error': error }"
    :placeholder="placeholder"
    spellcheck="false"
    @input="({ target }) => $emit('input', target.value)"
    @blur="$emit('blur')"
  />
</template>

<style lang="scss" scoped>
.input,
.textarea {
  will-change: color;
  outline: none;
  padding: 12px 10px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: var(--gray-color-2);
  color: var(--text-color-3);
  transition: color 0.2s ease, border 0.2s ease;

  &::placeholder {
    color: var(--text-color-3);
  }

  &:hover {
    color: var(--text-color-2);
    border-color: var(--gray-color-1);
  }

  &:focus {
    color: var(--text-color-1);
    border-color: var(--gray-color-1);
  }

  &--error {
    border-color: red;
  }
}

textarea {
  resize: none;
}
</style>
