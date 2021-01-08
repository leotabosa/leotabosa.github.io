<script>
import Curriculo from "./components/Curriculo";
export default {
  components: { Curriculo },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="container__espaco">
      <Curriculo />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  position: relative;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  background-color: var(--cor-fundo);
  font-family: -apple-system, BlinkMacSystemFont, "Raleway", "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-right: 3px solid var(--cor-fundo);
  &__espaco {
    padding: 40px;
  }

  &::-webkit-scrollbar {
    width: 0.45rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    margin: 12px 0;
  }
}
</style>
