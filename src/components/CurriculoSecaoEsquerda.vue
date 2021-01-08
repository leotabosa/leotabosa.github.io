<script>
import ResumoProfissional from "../data/ResumoProfissional";
import Tag from "./Tag";
export default {
  name: "CurriculoSecaoEsquerda",
  components: { Tag },
  data() {
    return {
      resumo: ResumoProfissional,
    };
  },
};
</script>
<template>
  <div class="curriculo-esquerda">
    <section class="curriculo-esquerda__exp">
      <div class="curriculo-esquerda__label">EXPERIENCE</div>
      <div class="curriculo-esquerda__experiencias">
        <div
          v-for="(exp, index) in resumo"
          :key="index"
          class="curriculo-esquerda__experiencia"
        >
          <span class="curriculo-esquerda__empresa">{{ exp.empresa }}</span>
          <span class="curriculo-esquerda__descricao">{{
            exp.descricaoEmpresa
          }}</span>

          <div
            v-for="(cargo, ind) in exp.cargos"
            :key="ind"
            class="curriculo-esquerda__cargos"
          >
            <div class="curriculo-esquerda__tempo-cargo">
              {{ cargo.tempo }} //
              <span class="curriculo-esquerda__tempo-relativo-cargo">{{
                cargo.tempoRelativo
              }}</span>
            </div>
            <div class="curriculo-esquerda__descricao-cargo">
              {{ cargo.descricao }}
              <div
                v-for="(projeto, idx) in cargo.projetos"
                :key="idx"
                class="curriculo-esquerda__projeto"
              >
                <span class="curriculo-esquerda__nome-projeto">
                  {{ projeto.nome }} -
                </span>
                <span class="curriculo-esquerda__descricao-projeto">
                  {{ projeto.descricao }}
                </span>
                <div class="curriculo-esquerda__tags-projeto">
                  <Tag
                    v-for="(tag, i) in projeto.tags"
                    :key="i"
                    class="curriculo-esquerda__tags-projeto__tag"
                    :color="tag.cor"
                  >
                    {{ tag.nome }}
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.curriculo-esquerda {
  color: var(--cor-texto-4);
  &__label {
    padding: 40px 0 5px 0;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
  }

  &__experiencias {
    padding-top: 20px;
  }

  &__experiencia {
    display: flex;
    flex-direction: column;
  }

  &__empresa {
    font-weight: 500;
    padding-bottom: 10px;
    color: var(--cor-texto-1);
  }

  &__descricao {
    color: var(--cor-texto-2);
    font-weight: 300;
  }

  &__cargos {
    padding: 5px 15px;
    &:first-of-type {
      padding-top: 25px;
    }
  }

  &__tempo-cargo {
    font-size: 14px;
    color: var(--cor-texto-2);
    letter-spacing: 3px;
  }

  &__tempo-relativo-cargo {
    letter-spacing: 0;
  }

  &__descricao-cargo {
    color: var(--cor-texto-3);
    padding-top: 5px;
    font-weight: 500;
  }

  &__projeto {
    font-weight: 300;
    padding: 5px 0 5px 15px;
  }

  &__nome-projeto {
    font-weight: 400;
  }

  &__tags-projeto {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
    padding-top: 10px;
    padding-left: 10px;

    &__tag {
      margin: 4px 3px;
    }
  }
}
</style>
