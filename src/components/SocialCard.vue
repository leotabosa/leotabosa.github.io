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

    <footer>
      <Button>{{ buttonText }} </Button>
    </footer>
  </article>
</template>

<style lang="scss" scoped></style>
