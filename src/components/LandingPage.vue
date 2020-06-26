<script>
import IlustracaoPaginaInicial from "../assets/IlustracaoPaginaInicial";
import SetaBaixo from "../assets/SetaBaixo";
import LinkExterno from "../assets/LinkExterno";
import abrirEmNovaAba from "../utils/abrir-em-nova-aba";

export default {
  components: {
    IlustracaoPaginaInicial,
    SetaBaixo,
    LinkExterno,
  },
  props: {
    mostrarLanding: {
      type: Boolean,
      default: false,
    },
    mostrarVerMais: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    abrirEmNovaAba,
  },
};
</script>

<template>
  <div :class="`landingPage ${mostrarLanding ? '' : 'naoMostra'}`">
    <div class="linkGithub">
      <span
        class="link"
        @click="abrirEmNovaAba('https://github.com/leotabosa')"
      >
        GitHub
        <LinkExterno />
      </span>
    </div>
    <div class="ilustracaoEInfo">
      <IlustracaoPaginaInicial />
      <div class="infos">
        <div class="titulo">Leonardo Braga</div>
        <span class="subtitulo">
          Desenvolvedor front-end e estudante de Ciências da Computação
        </span>
      </div>
    </div>
    <div class="rodape">
      <div
        :class="`botaoVerMais ${mostrarVerMais ? '' : 'esconderBotao'}`"
        @click="$emit('ver-mais')"
      >
        <div class="seta">
          <SetaBaixo />
        </div>
        Ver mais
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.landingPage {
  height: fit-content;
  width: 100%;
  background-color: #9db8d6;
  transition: 1s ease;

  .linkGithub {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1.5rem 2rem 2rem 0;
    color: #3a477d;
    .link {
      display: inherit;
      cursor: pointer;
      svg {
        padding-left: 10px;
        width: 20px;
        height: 18px;
      }
    }
  }

  .ilustracaoEInfo {
    display: flex;
    align-items: center;
    .infos {
      display: flex;
      flex-direction: column;
      color: #3a477d;

      .titulo {
        font-size: 30px;
        font-weight: bold;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid #5f99b7;
      }
      .subtitulo {
        padding-top: 0.4rem;
        font-size: 20px;
      }
    }
  }
  .rodape {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;

    .botaoVerMais {
      display: flex;
      align-items: center;
      color: #3a477d;
      cursor: pointer;
      transition: 0.2s ease;

      .seta {
        background-color: #3a477d;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        padding: 1rem;
        margin-right: 15px;
        box-shadow: 0.5px 1.5px 3px rgba(0, 0, 0, 0.5);
      }

      &:hover {
        transition: 0.2s ease;
        transform: scale(1.05);
      }
    }

    .esconderBotao {
      opacity: 0;
      transition: opacity 0.2s ease;
      pointer-events: none;
      cursor: default;
    }
  }
}

.naoMostra {
  transform: translateY(-650px);
  transition: 1s ease;
}
</style>
