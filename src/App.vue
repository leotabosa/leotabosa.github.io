<script>
import MenuDeTopo from "./components/MenuDeTopo";
import LandingPage from "./components/LandingPage";
import Abas from "./views/Abas";
import Seta from "./assets/Seta";
import Rodape from "./components/Rodape";

export default {
  components: {
    MenuDeTopo,
    LandingPage,
    Seta,
    Abas,
    Rodape,
  },
  data() {
    return {
      show: false,
      mostrarLanding: true,
      voltarAoTopo: false,
      podeVoltarALanding: false,
      mostrarVerMais: true,
    };
  },
  created() {
    window.addEventListener("mousewheel", this.mostraOuNaoHeader);
    window.addEventListener("scroll", this.mostraOuNaoHeader);
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.mostraOuNaoHeader);
    window.removeEventListener("scroll", this.mostraOuNaoHeader);
  },
  methods: {
    // gerarQRCode(texto) {
    //   var canvas = document.getElementById("canvas");
    //   QRCode.toCanvas(
    //     canvas,
    //     JSON.stringify({
    //
    //     }),
    //     function(error) {
    //       if (error) console.error(error);
    //
    //     }
    //   );
    // },

    mostraOuNaoHeader() {
      const posicaoY = window.scrollY;

      if (posicaoY <= 20) {
        this.mostrarVerMais = true;
      }
      if (posicaoY > 20) {
        this.mostrarVerMais = false;
      }
      if (posicaoY < window.innerHeight && this.podeVoltarALanding) {
        this.podeVoltarALanding = false;
        this.show = false;
        this.mostrarLanding = true;
        this.voltarAoTopo = false;
      }

      if (posicaoY > window.innerHeight) {
        this.show = true;
        this.podeVoltarALanding = true;
        if (!this.mostrarLanding) {
          this.voltarAoTopo = true;
        }
      }
    },
    descerPagina() {
      this.show = true;
      this.voltarAoTopo = true;
      this.mostrarLanding = false;
      this.podeVoltarALanding = false;
    },
    scrollTopo() {
      window.scrollTo(0, 0);
      this.mostrarLanding = true;
      this.show = false;
      this.voltarAoTopo = false;
      this.podeVoltarALanding = false;
    },
  },
};
</script>

<template>
  <div id="container" ref="container" class="container">
    <transition name="fade">
      <MenuDeTopo v-if="show" />
    </transition>

    <LandingPage
      id="landingPage"
      :mostrar-ver-mais="mostrarVerMais"
      :mostrar-landing="mostrarLanding"
      @ver-mais="descerPagina"
    />

    <transition name="fade">
      <span v-if="voltarAoTopo" class="voltarAoTopo" @click="scrollTopo">
        <Seta />
      </span>
    </transition>
    <transition name="body">
      <div
        v-if="!mostrarLanding"
        :class="`corpo ${mostrarLanding && !voltarAoTopo ? '' : 'sobeCorpo'}`"
      >
        <Abas />
      </div>
    </transition>
    <!-- <transition name="rodape">
      <Rodape v-if="!mostrarLanding" />
    </transition> -->
  </div>
</template>

<style scoped lang="scss">
.body-enter-active {
  animation: 1.15s ease;
  animation-name: show;

  @keyframes show {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
}

.body-leave-active {
  animation: 1.05s ease;
  animation-name: hide;

  @keyframes hide {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0);
    }
  }
}

.body-enter {
  opacity: 0.6;
}
.body-leave-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.rodape-leave-active {
  transition: opacity 0.2s ease;
}
.rodape-enter-active {
  transition: opacity 0.5s ease 0.7s;
}
.rodape-enter,
.rodape-leave-to {
  opacity: 0;
}

.container {
  height: 100vh;
  position: relative;
  width: 100%;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Raleway", "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .corpo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    transition: 1s ease;
  }

  .sobeCorpo {
    padding-top: 60px;
  }

  .voltarAoTopo {
    will-change: background-color;
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #3a477d;
    padding: 1rem;
    border-radius: 100%;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    z-index: 2;
    transition: background-color 0.2s ease;

    svg {
      transform: rotate(180deg);
      fill: white;
      z-index: 10;
      height: 20px;
      width: 20px;
    }

    &:hover {
      &::after {
        content: "Voltar ao topo";
        position: absolute;
        left: -115px;
        height: 30px;
        width: 110px;
        animation: 0.7s ease;
        animation-name: easeLeft;
        color: #3a477d;

        @keyframes easeLeft {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .corpo {
    width: calc(100vw - 20px);
    padding: 10px;
  }
}
</style>
