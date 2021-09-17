<script>
export default {
  name: 'NavBar',
  props: {
    texts: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    links() {
      return [
        { label: this.texts.aboutMe, link: 'about-page' },
        { label: this.texts.projects, link: '' },
        { label: this.texts.contacts, link: 'contacts-page' },
      ]
    },
  },
  methods: {
    scrollTo(link) {
      const page = document.getElementById(link)
      if (page) {
        const y = page.offsetTop
        window.scrollTo(0, y)
      }
    },
  },
}
</script>

<template>
  <nav class="nav-bar">
    <ul class="nav-bar__list">
      <li
        v-for="({ link, label }, index) in links"
        :key="`${link}-${index}`"
        class="nav-bar__item"
        @click="scrollTo(link)"
      >
        <a class="nav-bar__link" href="#" draggable="false">{{ label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  width: 100%;
  user-select: none;

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  &__item {
    &:not(:first-of-type) {
      padding-left: 20px;
    }
  }

  &__link {
    will-change: color;
    text-decoration: none;
    color: var(--text-color-1);
    font-size: 20px;
    outline: none;
    transition: color 0.2s ease;

    &:hover,
    &:focus-within {
      color: var(--text-color-3);
      transition: color 0.2s ease;
    }
  }
}
</style>
