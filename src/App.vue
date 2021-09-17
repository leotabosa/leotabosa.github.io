<script>
import Header from './components/Header'
import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import About from './pages/About.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import langPTBR from './assets/lang.ptbr'
import langEN from './assets/lang.en'

export default {
  name: 'App',
  components: { Header, Home, About, Contacts, LanguageSwitcher },
  data() {
    return {
      language: 'en',
      texts: {
        ptbr: langPTBR,
        en: langEN,
      },
    }
  },
}
</script>

<template>
  <div id="app">
    <LanguageSwitcher :lang="language" @change-language="language = $event" />
    <Header :texts="texts[language]" />
    <main class="app__main">
      <Home :texts="texts[language]" />
      <About :texts="texts[language]" />
      <Contacts :texts="texts[language]" />
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
