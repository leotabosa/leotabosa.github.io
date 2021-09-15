<script>
import Logo from './Logo.vue'

export default {
  name: 'PageTitle',
  components: { Logo },
}
</script>
<template>
  <header class="page-title">
    <Logo class="page-title__logo" />
    <h1 class="page-title__text">Leonardo Braga</h1>
  </header>
</template>

<style lang="scss" scoped>
.page-title {
  position: absolute;
  top: 32px;
  display: flex;
  color: var(--text-color-1);
  user-select: none;

  @media screen and (max-width: 550px) {
    display: none;
  }

  &__text {
    font-size: 24px;
    max-width: 115px;
    padding-left: 8px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>
