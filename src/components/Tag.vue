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
  border-radius: 6px;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
}
</style>
