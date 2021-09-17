<script>
import PageTitle from './PageTitle.vue'
import NavBar from './NavBar.vue'

export default {
  name: 'Header',
  components: { NavBar, PageTitle },
  props: {
    texts: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
<template>
  <header class="header">
    <PageTitle />
    <NavBar :texts="texts" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
}
</style>
