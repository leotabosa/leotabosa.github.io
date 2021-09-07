<script>
export default {
  name: 'NavBar',
  data() {
    return {
      links: [
        { label: 'Sobre mim', link: '' },
        { label: 'Projetos', link: '' },
        { label: 'Contatos', link: '' },
      ],
    }
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
      >
        <a class="nav-bar__link" href="#" draggable="false">{{ label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-bar {
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
