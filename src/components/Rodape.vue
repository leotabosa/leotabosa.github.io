<script>
// Componente não está em uso agora.
import abrirEmNovaAba from "../utils/abrir-em-nova-aba";

export default {
  methods: {
    abrirEmNovaAba,
  },
};
</script>

<template>
  <div class="rodape">
    <div class="links">
      <div class="link" @click="abrirEmNovaAba('https://github.com/leotabosa')">
        <GitHubLogo />GitHub
      </div>
      <div
        class="link"
        @click="abrirEmNovaAba('https://www.linkedin.com/in/leonardo-tabosa/')"
      >
        <LinkedInLogo /> LinkedIn
      </div>
      <div class="link"><EmailLogo />leeonardotabosa@gmail.com</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rodape {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 110px;
  background-color: var(--cor-principal);

  .links {
    color: white;
    font-size: 14px;

    .link {
      display: flex;
      align-items: center;
      padding: 0.5rem;

      &:not(:last-child) {
        cursor: pointer;
        user-select: none;
      }

      svg {
        margin-right: 10px;
        height: 20px;
        width: 20px;
        fill: white;
      }
    }
  }
}
</style>
