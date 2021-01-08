<script>
export default {
  props: {
    color: {
      type: String,
      default: () => "#767F88",
    },
  },
};
</script>
<template>
  <span class="tag" :style="`color: ${color}`"><slot /></span>
</template>

<style scoped lang="scss">
.tag {
  border-radius: 3px;
  padding: 0.2rem 0.3rem;
  border: 1px solid var(--cor-texto-6);
  font-size: 13px;
}
</style>
