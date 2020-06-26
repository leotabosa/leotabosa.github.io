<script>
import VueIcon from "../assets/VueIcon";
import abrirEmNovaAba from "../utils/abrir-em-nova-aba";
export default {
  components: { VueIcon },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    abrirEmNovaAba,
    dataAtualizacao(data) {
      const dia = "0" + new Date(data).getDate();
      const mes = "0" + new Date(data).getMonth();
      const ano = new Date(data).getFullYear();

      return `${dia.slice(-2)}/${mes.slice(-2)}/${ano}`;
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="header">
      <span class="titulo">
        {{ item.name }}
      </span>
      <div v-if="item.language" class="linguagem">
        <VueIcon v-if="item.language === 'Vue'" />
        {{ item.language }}
      </div>
    </div>
    <div class="corpo">
      <span class="labelInfo"
        >Atualizado em:
        <span class="info">{{ dataAtualizacao(item.pushed_at) }}</span></span
      >
    </div>
    <Botao class="botaoLink" @click="abrirEmNovaAba(item.html_url)"
      >Ir para o repositório</Botao
    >
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  height: 200px;
  min-width: 50px;
  width: calc(33% - 20px);
  margin: 10px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.29);
  border-radius: 6px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    padding: 1rem 0;
    margin-left: 3%;
    border-bottom: 1px solid lightgrey;
    color: #3a477d;

    .titulo {
      font-size: 16px;
    }

    .linguagem {
      display: flex;
      border-radius: 6px;

      svg {
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  .corpo {
    width: 94%;
    margin-left: 3%;
    padding-top: 1rem;
    .labelInfo {
      color: #bbc0c4;
    }

    .info {
      color: #666;
    }
  }

  .botaoLink {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
}
</style>
