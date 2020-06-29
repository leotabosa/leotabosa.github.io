<script>
import Cracha from "../assets/IconeCracha";
export default {
  components: { Cracha },
  props: {
    texto: {
      type: String,
      required: true,
    },
    icone: {
      type: String,
      default: () => "empresa",
    },
  },
  data() {
    return {
      mostrarTooltip: false,
    };
  },
};
</script>
<template>
  <span :class="$style.tooltip">
    <span
      :class="$style.icone"
      @mouseenter="mostrarTooltip = true"
      @mouseleave="mostrarTooltip = false"
      @click="mostrarTooltip = !mostrarTooltip"
    >
      <Cracha v-if="icone === 'empresa'" />
    </span>

    <div
      :class="[
        $style.balaoTooltip,
        mostrarTooltip ? '' : $style.balaoInvisivel,
      ]"
    >
      <span :class="$style.texto">{{ texto }}</span>
    </div>
  </span>
</template>

<style lang="scss" module>
.tooltip {
  position: relative;
  vertical-align: middle;
  user-select: none;

  .icone {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .balaoTooltip {
    position: absolute;
    top: auto;
    bottom: calc(100% + 0.6rem);
    left: -26px;
    z-index: 10;
    min-width: 100px;
    height: 30px;
    max-height: unset;
    padding: 3px 10px;
    color: white;
    text-align: center;
    background-color: #50504e;
    border-radius: 4px;
    opacity: 0.95;
    transition: opacity 0.2s ease 0.2s;

    .texto {
      font-size: 10px;
    }

    &::after {
      position: absolute;
      bottom: -3px;
      left: 30px;
      width: 8px;
      height: 8px;
      content: "";
      background-color: #50504e;
      border-color: #50504e;
      border-style: solid;
      border-width: 0.5px 0 0 0.5px;
      opacity: 0.95;
      transform: rotate(45deg);
    }
  }

  .balaoInvisivel {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;

    .texto {
      opacity: 0;
      transition: opacity 0.2s ease;
    }
  }
}
</style>
