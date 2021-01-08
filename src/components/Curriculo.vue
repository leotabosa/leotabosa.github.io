<script>
import CurriculoSecaoDireita from "./CurriculoSecaoDireita";
import CurriculoSecaoEsquerda from "./CurriculoSecaoEsquerda";
export default {
  components: { CurriculoSecaoDireita, CurriculoSecaoEsquerda },
};
</script>

<template>
  <div class="curriculo">
    <header class="curriculo__cabecalho">
      <span class="curriculo__cabecalho__label">Phone contact</span>
      <span class="curriculo__cabecalho__info">+55 (85) 997936988</span>
      <span class="curriculo__cabecalho__label">Email</span>
      <span class="curriculo__cabecalho__info">leeonardotabosa@gmail.com</span>
    </header>
    <section class="curriculo__corpo">
      <article class="curriculo__secao"><CurriculoSecaoEsquerda /></article>
      <article class="curriculo__secao"><CurriculoSecaoDireita /></article>
    </section>
  </div>
</template>

<style scoped lang="scss">
.curriculo {
  background: linear-gradient(
    to right,
    white,
    white 50%,
    var(--cor-fundo-2) 50%
  );
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 2px;
  padding: 32px 64px;

  &__cabecalho {
    text-align: center;
    color: var(--cor-texto-3);

    &__label {
      padding-right: 10px;
      padding-left: 15px;
    }

    &__info {
      padding-right: 10px;
      color: #a0a0a0;
    }
  }

  &__corpo {
    display: flex;
    width: 100%;
    height: 100%;
  }

  &__secao {
    flex: 1;
    padding: 60px;
  }
}
</style>
