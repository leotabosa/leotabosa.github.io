<script>
export default {}
</script>

<template>
  <figure class="avatar">
    <img
      width="300px"
      height="300px"
      alt="Foto de Leonardo Braga olhando para a câmera debaixo de bastante sol. Tem um pouco de barba, cabelo cacheado, usa óculos e uma blusa branca"
      src="../assets/photo_2021-08-04_22-05-29.jpg"
    />
  </figure>
</template>

<style lang="scss" scoped>
.avatar {
  width: 316px;
  height: 316px;
  border: 8px solid var(--color-1);
  margin: 0;

  overflow: hidden;
  border-radius: 100%;

  img {
    border-radius: 100%;
  }
}
</style>
