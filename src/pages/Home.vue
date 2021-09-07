<script>
import HomePageSVG from '../components/svg/HomePage.svg'
export default {
  components: { HomePageSVG },
  methods: {
    downloadCV() {
      window.open(
        'https://drive.google.com/uc?export=download&id=1qWk608fvOBS3Kn-rX2uaF9fE_JNh0nOs',
        '_blank'
      )
    },
  },
}
</script>

<template>
  <section class="home">
    <div class="home__text">
      <h2 class="home__title">Oi, eu sou o Leonardo!</h2>
      <h4 class="home__subtitle">Um desenvolvedor front-end</h4>
      <Button @click="downloadCV">Baixar CV</Button>
    </div>
    <HomePageSVG class="home__illustration" />
  </section>
</template>
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  align-self: center;
  width: 80%;
  height: calc(100vh - 155px);

  @media screen and (max-width: 900px) {
    justify-content: center;

    &__illustration {
      display: none;
    }
  }

  &__text {
    max-width: 350px;
  }

  &__title {
    font-size: 32px;
    color: var(--text-color-1);
  }

  &__subtitle {
    font-size: 32px;
    font-weight: normal;
    color: var(--text-color-3);
  }

  &__illustration {
    width: 45%;
    max-width: 570px;
  }
}
</style>
