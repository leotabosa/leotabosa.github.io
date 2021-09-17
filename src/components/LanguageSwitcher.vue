<script>
export default {
  name: 'LanguageSwitcher',
  props: {
    lang: {
      type: String,
      default: () => 'ptbr',
    },
  },
}
</script>
<template>
  <button
    class="language-switcher"
    @click="$emit('change-language', lang === 'ptbr' ? 'en' : 'ptbr')"
  >
    {{ lang === 'ptbr' ? 'EN' : 'PT-BR' }}
  </button>
</template>

<style lang="scss" scoped>
.language-switcher {
  position: absolute;
  right: 20px;
  top: 20px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: var(--gray-color-2);
  color: var(--text-color-2);
  font-size: 14px;
  cursor: pointer;
  border-radius: 8px;
}
</style>
