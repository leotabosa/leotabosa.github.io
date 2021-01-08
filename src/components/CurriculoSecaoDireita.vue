<script>
import LinkedInLogo from "../assets/LinkedInLogo";
import GitHubLogo from "../assets/GitHubLogo";
import abrirEmNovaAba from "../utils/abrir-em-nova-aba";
export default {
  name: "CurriculoSecaoDireita",
  components: { LinkedInLogo, GitHubLogo },
  data() {
    return {
      habilidades: [
        { nome: "JAVASCRIPT", nivel: 8 },
        { nome: "VUE.JS", nivel: 9 },
        { nome: "VUEX", nivel: 8 },
        { nome: "NODE.JS", nivel: 4 },
        { nome: "HTML", nivel: 8 },
        { nome: "CSS", nivel: 9 },
        { nome: "SASS/SCSS", nivel: 8 },
        { nome: "JQUERY", nivel: 3 },
        { nome: "WEBPACK", nivel: 7 },
        { nome: "GIT", nivel: 6 },
        { nome: "BEM", nivel: 7 },
        { nome: "JEST", nivel: 8 },
        { nome: "CYPRESS", nivel: 4 },
      ],
    };
  },
  methods: {
    abrirEmNovaAba,
  },
};
</script>

<template>
  <div class="curriculo-direita">
    <section class="curriculo-direita__infos-basicas">
      <div class="curriculo-direita__nome">LEONARDO</div>
      <div class="curriculo-direita__nome"><strong>BRAGA</strong></div>
      <div class="curriculo-direita__cargo">FRONT-END DEVELOPER</div>
      <div class="curriculo-direita__links">
        <span
          class="curriculo-direita__link"
          @click="abrirEmNovaAba('https://www.linkedin.com/in/leonardo-tabosa')"
        >
          <LinkedInLogo class="curriculo-direita__link__logo" />
          LinkedIn
        </span>
        <span
          class="curriculo-direita__link"
          @click="abrirEmNovaAba('https://github.com/leotabosa')"
        >
          <GitHubLogo class="curriculo-direita__link__logo" />
          GitHub
        </span>
      </div>
    </section>
    <section class="curriculo-direita__habilidades">
      <div class="curriculo-direita__label">SKILLS</div>
      <ul class="curriculo-direita__lista">
        <li
          v-for="habilidade in habilidades"
          :key="habilidade"
          class="curriculo-direita__lista__item"
        >
          <div class="curriculo-direita__lista__item__habilidade">
            {{ habilidade.nome }}
          </div>
          <div class="curriculo-direita__lista__niveis">
            <span
              v-for="nivel in habilidade.nivel"
              :key="nivel"
              class="curriculo-direita__lista__niveis__nivel"
            />
            <span
              v-for="nivel in 10 - habilidade.nivel"
              :key="nivel"
              class="curriculo-direita__lista__niveis__nivel-nao-atingido"
            />
          </div>
        </li>
      </ul>
    </section>
    <section class="curriculo-direita__linguas">
      <div class="curriculo-direita__label">LANGUAGES</div>
      <div class="curriculo-direita__lingua">
        ENGLISH
        <div class="curriculo-direita__nivel-lingua">
          Advanced - C1 Level TOEFL ITP
        </div>
      </div>
      <div class="curriculo-direita__lingua">
        PORTUGUESE
        <div class="curriculo-direita__nivel-lingua">
          Native
        </div>
      </div>
    </section>
    <section class="curriculo-direita__escolaridade">
      <div class="curriculo-direita__label">EDUCATION</div>
      <div class="curriculo-direita__curso">
        COMPUTER SCIENCE
        <div class="curriculo-direita__nome-curso">
          <div>Majoring at Federal University of Ceará</div>
          2019 - 2023
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.curriculo-direita {
  color: var(--cor-texto-4);

  &__nome {
    font-size: 52px;
    line-height: 42px;
    letter-spacing: 2px;
    &:first-of-type {
      font-weight: 200;
    }
  }

  &__cargo {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 300;
    color: white;
    background-color: var(--cor-texto-4);
    padding: 5px 15px;
    width: fit-content;
    border-radius: 2px;
  }

  &__links {
    display: flex;
    padding: 15px 0;
    font-size: 14px;
  }
  &__link {
    display: flex;
    align-items: center;
    padding-right: 20px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      .curriculo-direita__link__logo {
        transform: scale(1.05);
      }
    }

    &__logo {
      margin-right: 5px;
    }
  }

  &__label {
    padding: 40px 0 5px 0;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
  }

  &__lista {
    font-size: 14px;
    padding: 0;
    list-style-type: none;
    color: var(--cor-texto-1);

    &__item {
      display: flex;
      padding: 5px 0;
      &__habilidade {
        width: 130px;
      }
    }

    &__niveis {
      display: flex;

      &__nivel,
      &__nivel-nao-atingido {
        border-radius: 100%;
        height: 10px;
        width: 10px;
        margin: 0 3px;
      }

      &__nivel {
        background-color: var(--cor-texto-5);
      }

      &__nivel-nao-atingido {
        background-color: var(--cor-texto-6);
      }
    }
  }

  &__lingua,
  &__curso {
    color: var(--cor-texto-1);
    padding: 10px 0;
  }

  &__nivel-lingua,
  &__nome-curso {
    padding-top: 5px;
    color: var(--cor-texto-2);
  }
}
</style>
