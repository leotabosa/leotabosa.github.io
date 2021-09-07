<script>
import Avatar from '../components/Avatar.vue'
export default {
  name: 'About',
  components: { Avatar },
}
</script>

<template>
  <section id="about-page" class="about">
    <h3 class="about__title"> Sobre mim</h3>
    <div class="about__content">
      <article class="about__text">
        <p>
          Sou desenvolvedor especializado em <strong>front-end</strong> desde o
          início da carreira, aos 18 anos. Estou me graduando em
          <strong>Ciências da Computação</strong> pela Universidade Federal do
          Ceará - <strong>UFC</strong>.
          <br />
          <br />
          Planejar e executar soluções costuma ser o meu forte, e, apesar de
          acreditar que todos precisam resolver bugs, gosto de pensar que minha
          <strong>visão</strong> de código vai
          <strong>além de um bug por vez</strong>.
        </p>
      </article>
      <article class="about__avatar">
        <Avatar />
      </article>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about {
  padding: 32px 0 150px;
  align-self: center;
  width: 80%;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }

  &__title {
    font-size: 16px;
    color: var(--text-color-2);
    text-align: center;
    padding-bottom: 150px;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__text {
    width: 60%;
    color: var(--text-color-1);
  }

  &__avatar {
    padding-left: 50px;

    @media screen and (max-width: 900px) {
      padding: 0 0 20px;
    }
  }
}
</style>
