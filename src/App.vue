<script>
import Header from './components/Header'
import Home from './pages/Home.vue'
export default {
  name: 'App',
  components: { Header, Home },
}
</script>

<template>
  <div id="app">
    <Header />
    <main class="app__main">
      <Home />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 32px;
}

.app {
  &__main {
    display: flex;
    flex-direction: column;
  }
}
</style>
