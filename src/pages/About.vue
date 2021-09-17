<script>
import Avatar from '../components/Avatar.vue'
import SectionTitle from '../components/SectionTitle.vue'

export default {
  name: 'About',
  components: { Avatar, SectionTitle },
  props: {
    texts: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    texts: {
      immediate: true,
      deep: true,
      handler({ aboutText }) {
        this.$nextTick(() => {
          const paragraph = document.getElementById('about-text')
          if (paragraph) paragraph.innerHTML = aboutText
        })
      },
    },
  },
}
</script>

<template>
  <section id="about-page" class="about">
    <SectionTitle :section-title="texts.aboutMe" />
    <div class="about__content">
      <article class="about__text">
        <p id="about-text" />
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

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
    }
  }

  &__text {
    width: 60%;
    color: var(--text-color-1);

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  &__avatar {
    padding-left: 50px;

    @media screen and (max-width: 900px) {
      padding: 0 0 20px;

      figure {
        height: 200px;
        width: 200px;
      }
    }
  }
}
</style>
