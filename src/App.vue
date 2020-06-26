<script>
import MenuDeTopo from "./components/MenuDeTopo";
import LandingPage from "./components/LandingPage";
import Abas from "./views/Abas";
import SetaBaixo from "./assets/SetaBaixo";
import Rodape from "./components/Rodape";

export default {
  components: {
    MenuDeTopo,
    LandingPage,
    SetaBaixo,
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
    window.removeEventListener("mousewheel");
    window.removeEventListener("scroll");
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
      if (window.scrollY <= 20) {
        this.mostrarVerMais = true;
      }
      if (window.scrollY > 20) {
        this.mostrarVerMais = false;
      }
      if (window.scrollY < 560 && this.podeVoltarALanding) {
        this.podeVoltarALanding = false;
        this.show = false;
        this.mostrarLanding = true;
        this.voltarAoTopo = false;
      }

      if (window.scrollY > 500) {
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
  <div ref="container" class="container">
    <transition name="show">
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
        <SetaBaixo />
      </span>
    </transition>
    <div :class="`corpo ${mostrarLanding && !voltarAoTopo ? '' : 'sobeCorpo'}`">
      <Abas />
    </div>
    <Rodape v-if="!mostrarLanding" />
  </div>
</template>

<style scoped lang="scss">
.show-enter-active {
  animation: 0.2s linear;
  animation-name: show;
  z-index: 2;

  @keyframes show {
    0% {
      transform: translateY(-100px);
      z-index: 0;
    }
    100% {
      transform: translateY(0);
      z-index: 2;
    }
  }
}

.show-leave-active {
  animation: 0.2s linear;
  animation-name: hide;

  @keyframes hide {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100px);
    }
  }
}

.show-enter {
  opacity: 0.6;
}
.show-leave-to {
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

.container {
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
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
    transform: translateY(-600px);
    transition: 1s ease;
  }

  .voltarAoTopo {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #3a477d;
    padding: 1rem;
    border-radius: 100%;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;

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
        animation: 1s ease;
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
