<script>
import Logo from './Logo.vue'

export default {
  name: 'PageTitle',
  components: { Logo },
}
</script>
<template>
  <header class="page-title">
    <Logo />
    <h1 class="page-title__text">Leonardo Braga</h1>
  </header>
</template>

<style lang="scss" scoped>
.page-title {
  display: flex;
  color: var(--text-color-1);
  user-select: none;

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
