<script>
import Repositorios from "./Repositorios";
import ResumoProfissional from "./ResumoProfissional";
import Tecnologias from "./Tecnologias";
import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://api.github.com/users/leotabosa/repos",
});

export default {
  components: { Repositorios, ResumoProfissional, Tecnologias },
  data() {
    return {
      opcoesAba: ["Resumo profissional", "Tecnologias", "Repositórios"],
      selecionada: "",
      repositorios: [],
      carregando: false,
    };
  },
  mounted() {
    this.selecionada = "Resumo profissional";
  },
  methods: {
    async solicitaDados() {
      if (!this.repositorios.length) {
        this.carregando = true;
        const { data } = await axios.get().catch((err) => {
          this.carregando = false;
          this.erro = err;
          if (err === "Network Error") alert("Erro de conexão.");
        });
        this.repositorios = data;
        this.carregando = false;
      }
    },
    mudaAba(aba) {
      if (aba === "Repositórios") this.solicitaDados();
      this.selecionada = aba;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="abas">
      <div
        v-for="(item, index) in opcoesAba"
        :key="index"
        :class="`aba ${selecionada === item ? 'selecionada' : ''}`"
        @click="mudaAba(item)"
      >
        {{ item }}
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <ResumoProfissional v-if="selecionada === 'Resumo profissional'" />

      <Tecnologias v-if="selecionada === 'Tecnologias'" />

      <Repositorios
        v-if="selecionada === 'Repositórios'"
        :repositorios="repositorios"
        :carregando="carregando"
      />
    </transition>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.wrapper {
  width: 100%;

  .abas {
    display: flex;
    height: 100px;
    user-select: none;
    padding-bottom: 2rem;
    border-bottom: 1px solid #daecf7;

    .aba {
      display: inherit;
      justify-content: center;
      align-items: center;
      flex: 1;
      margin-top: 1rem;
      height: 100%;
      color: #3a477b;
      cursor: pointer;
      transition: 0.2s ease;
      font-size: 18px;

      &:nth-child(2) {
        border-right: 1px solid #daecf7;
        border-left: 1px solid #dbecf7;
      }

      &:hover {
        color: #5f99b7;
      }
    }

    .selecionada {
      transition: 0.2s ease;
      font-weight: bold;
    }
  }
}
</style>
