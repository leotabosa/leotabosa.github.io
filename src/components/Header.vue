<script>
import PageTitle from './PageTitle.vue'
import NavBar from './NavBar.vue'

export default {
  name: 'Header',
  components: { NavBar, PageTitle },
}
</script>
<template>
  <header class="header">
    <PageTitle />
    <NavBar />
    <Button>Me contrate</Button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
