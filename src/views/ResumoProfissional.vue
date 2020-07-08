<script>
import Tooltip from "../components/Tooltip";
import IconeGraduacao from "../assets/IconeGraduacao";
import experiencias from "../data/ResumoProfissional";
export default {
  components: { Tooltip, IconeGraduacao },
  data() {
    return {
      experiencias,
      educacao: [
        {
          instituicao: "UFC - Universidade Federal do Ceará",
          duracao: "2019 - 2023",
          grau: "Bacharelado",
          curso: "Ciências da Computação",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <ul>
      <li v-for="(item, index) in experiencias" :key="index" class="item">
        <span class="titulo"
          >{{ item.empresa
          }}<Tooltip v-if="item.atual" icone="empresa" texto="Emprego atual" />
        </span>
        <section class="corpo">
          <span class="descricao">{{ item.descricaoEmpresa }}</span>
          <div v-for="(cargo, ind) in item.cargos" :key="ind" class="cargos">
            <span class="labelInfo cargo">
              Cargo:
              <span
                :title="cargo.atual ? 'Cargo atual' : ''"
                :class="[cargo.atual ? 'negrito' : '', 'info']"
                >{{ cargo.descricao }}</span
              >
            </span>
            <span class="labelInfo">
              Tempo: <span class="info">{{ cargo.tempo }}</span>
            </span>
            <span class="labelInfo">
              Projetos:
              <div
                v-for="(projeto, i) in cargo.projetos"
                :key="i"
                class="projeto"
              >
                <span class="nomeProjeto">{{ projeto.nome }} - </span>
                <span>{{ projeto.descricao }}</span>
                <div class="tags">
                  Tags:
                  <Tag
                    v-for="(tag, indice) in projeto.tags"
                    :key="indice"
                    class="tag"
                    :color="tag.cor"
                    >{{ tag.nome }}
                  </Tag>
                </div>
              </div>
            </span>
          </div>
        </section>
      </li>
    </ul>
    <div class="separador" />
    <div class="educacao">
      <div class="titulo">
        Educação<span class="iconeGraduacao"><IconeGraduacao /></span>
      </div>
      <div v-for="(curso, indexador) in educacao" :key="indexador">
        <span class="curso">
          <span>
            Curso: <span class="info">{{ curso.curso }}</span>
          </span>
          <span>
            Grau: <span class="info">{{ curso.grau }}</span>
          </span>
          <span>
            Instituição:
            <span class="info">{{ curso.instituicao }}</span>
          </span>
          <span>
            Duração: <span class="info">{{ curso.duracao }}</span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  align-self: center;

  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: calc(100vw - 90px);
    &:not(:last-child) {
      border-bottom: 1px solid var(--cor-borda);
    }

    .titulo {
      font-size: 20px;
      font-weight: bold;
      color: var(--texto-titulo);
      padding-bottom: 0.4rem;
    }

    .corpo {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      .labelInfo {
        font-size: 16px;
        padding: 5px 0;
        color: var(--texto-secundario);

        .info {
          color: var(--texto-principal);
        }

        .negrito {
          font-weight: bold;
        }
      }

      .descricao {
        font-size: 16px;
        padding: 0.8rem 0;
        color: var(--texto-principal);
      }

      .cargos {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;

        .cargo {
          padding-top: 20px;
          border-top: 1px solid var(--cor-borda);
        }
      }

      .projeto {
        color: var(--texto-principal);
        padding-top: 0.5rem;
        margin-left: 30px;
        .nomeProjeto {
          font-weight: bold;
        }
      }
    }
    .tags {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: var(--texto-secundario);
      padding-top: 1rem;
      font-size: 12px;
      .tag {
        margin-left: 0.7rem;
      }
    }
  }

  .separador {
    width: 98%;
    height: 1px;
    background-color: var(--cor-borda);
    margin-bottom: 2rem;
    align-self: center;
  }

  .educacao {
    margin-left: 40px;
    padding-bottom: 20px;
    .titulo {
      font-size: 20px;
      font-weight: bold;
      color: var(--texto-titulo);
      padding-bottom: 0.4rem;

      svg {
        width: 20px;
        height: 20px;
        margin-left: 5px;
      }
    }
    .curso {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      color: var(--texto-secundario);

      &:not(:last-child) {
        border-bottom: 1px solid var(--cor-borda);
      }

      span {
        padding: 5px 0;
      }
      .info {
        color: var(--texto-principal);
      }
    }
  }
}
</style>
