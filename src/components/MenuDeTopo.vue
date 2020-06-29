<script>
import abrirEmNovaAba from "../utils/abrir-em-nova-aba";
export default {
  methods: {
    abrirEmNovaAba,
  },
};
</script>

<template>
  <div class="header">
    <span class="label">Leonardo Braga</span>
    <span class="links">
      <GitHubLogo
        @click.native="abrirEmNovaAba('https://github.com/leotabosa')"
      />
      <LinkedInLogo
        @click.native="
          abrirEmNovaAba('https://www.linkedin.com/in/leonardo-tabosa/')
        "
      />
    </span>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 15px;
  width: calc(100% - 30px);
  background-color: var(--cor-principal);

  .label {
    color: white;
    user-select: none;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .links {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      padding-right: 10px;
      fill: white;
      transition: 0.2s;

      &:hover {
        transition: 0.2s;
        transform: scale(1.1);
      }
    }
  }
}
</style>
