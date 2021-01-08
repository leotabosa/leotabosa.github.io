<script>
import Curriculo from "./components/Curriculo";
import abrirEmNovaAba from "./utils/abrir-em-nova-aba";
export default {
  components: { Curriculo },
  methods: {
    abrirEmNovaAba,
  },
};
</script>

<template>
  <div class="container">
    <div class="container__espaco">
      <Curriculo />
      <div class="container__creditos">
        This website was heavily inspired by
        <a
          class="container__creditos__link"
          @click="abrirEmNovaAba('https://dribbble.com/shots/7355481-Resume')"
        >
          this dribbble
        </a>
        by
        <a
          class="container__creditos__link"
          @click="abrirEmNovaAba('https://dribbble.com/webduckdesign')"
        >
          webduckdesign.
        </a>
      </div>
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

  &__espaco {
    padding: 40px;
  }

  &__creditos {
    display: flex;
    justify-content: center;
    font-size: 13px;
    padding: 10px;
    width: 100%;

    &__link {
      padding: 0 3px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
