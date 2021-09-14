<script>
import Header from './components/Header'
import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import About from './pages/About.vue'
export default {
  name: 'App',
  components: { Header, Home, About, Contacts },
}
</script>

<template>
  <div id="app">
    <Header />
    <main class="app__main">
      <Home />
      <About />
      <Contacts />
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
  padding: 64px 32px 0;
}

.app {
  &__main {
    display: flex;
    flex-direction: column;
  }
}
</style>
