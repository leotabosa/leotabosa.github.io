<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="carregando">
      <Loader />

      <span>Ops, essa página ainda está em construção!</span>
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

  .carregando {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    span {
      padding-top: 2rem;
      color: var(--texto-principal);
    }
  }
}
</style>
