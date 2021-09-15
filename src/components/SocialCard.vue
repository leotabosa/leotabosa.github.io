<script>
export default {
  name: 'SocialCard',
  props: {
    cardTitle: {
      type: String,
      default: () => 'Title',
    },
    cardSubtitle: {
      type: String,
      default: () => 'Subtitle',
    },
    buttonText: {
      type: String,
      default: () => 'CTA',
    },
    buttonBgColor: {
      type: String,
      default: () => '',
    },
    buttonLink: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    openInNewTab() {
      window.open(this.buttonLink, '_blank')
    },
  },
}
</script>

<template>
  <article class="social-card">
    <header class="social-card__header">
      <div class="social-card__title">
        <slot name="icon" />
        <h5>{{ cardTitle }}</h5>
      </div>
      <p class="social-card__subtitle">{{ cardSubtitle }} </p>
    </header>

    <footer v-if="buttonText" class="social-card__footer">
      <slot name="button">
        <Button @click="openInNewTab">{{ buttonText }} </Button>
      </slot>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
.social-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;

  &__title {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      min-width: 24px;
    }

    h5 {
      word-break: break-all;
      margin: 0;
      font-size: 24px;
      font-weight: normal;
    }
  }

  &__subtitle {
    margin: 5px 0 0 0;
    color: var(--text-color-3);
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
