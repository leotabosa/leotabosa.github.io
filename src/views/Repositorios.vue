<script>
import Card from "../components/Card";

export default {
  components: { Card },
  props: {
    repositorios: {
      type: Array,
      default: () => [],
    },
    carregando: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <template v-if="!carregando">
      <Card v-for="(item, index) in repositorios" :key="index" :item="item" />
    </template>
    <div v-else class="carregando">
      <Loader />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  min-height: 300px;
  width: 100%;
  align-self: center;
  padding-bottom: 20px;

  .carregando {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
