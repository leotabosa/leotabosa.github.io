<template>
  <button @click="$emit('click')"><slot /></button>
</template>

<style scoped lang="scss">
button {
  font-family: -apple-system, BlinkMacSystemFont, "Raleway", "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: none;
  background-color: transparent;
  color: #3a477d;
  padding: 0.5rem 0.7rem;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.2s ease;
  outline: none;
  user-select: none;
  font-size: 14px;
  border: 1px solid #3a477d;

  &:hover {
    transition: 0.2s ease;
    background-color: #3a477d;
    color: white;
  }
}
</style>
