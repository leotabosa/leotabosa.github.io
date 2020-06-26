<template>
  <button @click="$emit('click')"><slot /></button>
</template>

<style scoped lang="scss">
button {
  font-family: -apple-system, BlinkMacSystemFont, "Raleway", "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: none;
  background-color: #3a477d;
  color: white;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;
  outline: none;
  user-select: none;
  font-size: 14px;

  &:hover {
    transition: 0.2s ease;
    background-color: lighten(#3a477d, 8%);
  }
}
</style>
