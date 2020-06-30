<script>
import IlustracaoPaginaInicial from "../assets/IlustracaoPaginaInicial";
import Seta from "../assets/Seta";
import LinkExterno from "../assets/LinkExterno";
import abrirEmNovaAba from "../utils/abrir-em-nova-aba";

export default {
  components: {
    IlustracaoPaginaInicial,
    Seta,
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
  data() {
    return {
      naoMostrar: false,
    };
  },
  watch: {
    mostrarLanding(val) {
      if (!val) this.naoMostrar = true;
      else this.naoMostrar = false;
    },
  },
  methods: {
    abrirEmNovaAba,
  },
};
</script>

<template>
  <transition-group name="body" tag="span">
    <div
      v-if="!naoMostrar"
      :key="1"
      :class="`landingPage ${mostrarLanding ? '' : naoMostrar}`"
    >
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
            <Seta />
          </div>
          Ver mais
        </div>
      </div>
    </div>
  </transition-group>
</template>

<style scoped lang="scss">
.body-enter-active {
  animation: 1.15s ease;
  animation-name: show;

  @keyframes show {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0);
    }
  }
}

.body-leave-active {
  animation: 1.15s ease;
  animation-name: hide;

  @keyframes hide {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
}

.body-enter {
  opacity: 0.6;
}
.body-leave-to {
  opacity: 1;
}
.landingPage {
  height: 100vh;
  width: 100%;
  background-color: var(--cor-secundaria);
  z-index: 2;

  .linkGithub {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1.5rem 2rem 2rem 0;
    color: var(--cor-principal);
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
    height: 75%;

    svg {
      margin-left: -5%;
      height: 65%;
      width: 65%;
    }

    .infos {
      display: flex;
      flex-direction: column;
      color: var(--cor-principal);

      .titulo {
        font-size: 30px;
        font-weight: bold;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid var(--cor-borda-secundaria);
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
      color: var(--cor-principal);
      cursor: pointer;
      transition: 0.2s ease;

      .seta {
        background-color: var(--cor-principal);
        border-radius: 100%;
        width: 20px;
        height: 20px;
        padding: 1rem;
        margin-right: 15px;
        box-shadow: 0.5px 1.5px 3px rgba(0, 0, 0, 0.5);

        svg {
          fill: white;
        }
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

.naoMostrar {
  position: static;
  width: 100%;
  height: 100vh;
}
</style>
