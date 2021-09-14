<template>
  <h3 class="section-title"> {{ sectionTitle }}</h3>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    sectionTitle: {
      type: String,
      default: () => 'Section title',
    },
  },
}
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 16px;
  color: var(--text-color-2);
  text-align: center;
  padding-bottom: 150px;

  @media screen and (max-width: 900px) {
    padding-bottom: 25px;
  }
}
</style>
