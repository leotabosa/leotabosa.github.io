<script>
export default {
  data() {
    return {
      experiencias: [
        {
          empresa: "Grupo Casa Magalhães",
          tempo: "Julho de 2019 - Hoje",
          tags: [
            { nome: "Vue.js", cor: "#4BB37E" },
            { nome: "HTML", cor: "#DD4C27" },
            { nome: "JavaScript", cor: "#D0B531" },
            { nome: "Webpack" },
            { nome: "Material Design" },
            { nome: "Element UI" },
            { nome: "SASS/SCSS" },
          ],
          descricaoEmpresa:
            "Empresa cearense bem consolidade de soluções tecnológicas para ajudar companhias a superarem o complexo sistema tributário brasileiro e administrar melhor o negócio.",
          projetos: [
            {
              nome: "varejofacil",
              atual: true,
              descricao:
                "Solução voltada ao gerenciamento de empresas, mais adequada a supermercados, restaurantes e comércios de pequeno a médio porte. O front-end do projeto, já bem antigo e ultrapassado, está sendo modernizado com o framework Vue.js.",
            },
          ],
        },
      ],
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
        <span class="titulo">{{ item.empresa }}</span>
        <section class="corpo">
          <span class="labelInfo">
            Tempo: <span class="info">{{ item.tempo }}</span>
          </span>
          <span class="descricao">{{ item.descricaoEmpresa }}</span>
          <span class="labelInfo">
            Projetos:
            <div v-for="(projeto, i) in item.projetos" :key="i" class="projeto">
              <span class="nomeProjeto">{{ projeto.nome }} - </span>
              <span>{{ projeto.descricao }}</span>
              <div class="tags">
                Tags:
                <Tag
                  v-for="(tag, ind) in item.tags"
                  :key="ind"
                  class="tag"
                  :color="tag.cor"
                  >{{ tag.nome }}
                </Tag>
              </div>
            </div>
          </span>
        </section>
      </li>
    </ul>
    <div class="separador" />
    <div class="educacao">
      <div class="titulo">Educação</div>
      <div v-for="(curso, indexador) in educacao" :key="indexador">
        <span class="curso">
          <span>
            Curso: <span class="info">{{ curso.curso }}</span>
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
  height: fit-content;
  align-self: center;

  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: calc(100vw - 90px);
    padding-bottom: 1.2rem;
    &:not(:last-child) {
      border-bottom: 1px solid #daecf7;
    }

    .titulo {
      font-size: 20px;
      font-weight: bold;
      color: #555;
      padding-bottom: 0.4rem;
    }

    .corpo {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      .labelInfo {
        font-size: 16px;
        color: #bbc0c4;

        .info {
          color: #666;
        }
      }

      .descricao {
        font-size: 16px;
        padding: 0.8rem 0;
        color: #666;
      }

      .projeto {
        color: #666;
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
      color: #bbc0c4;
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
    background-color: #daecf7;
    margin-bottom: 2rem;
    align-self: center;
  }

  .educacao {
    margin-left: 40px;
    padding-bottom: 20px;
    .titulo {
      font-size: 20px;
      font-weight: bold;
      color: #555;
      padding-bottom: 0.4rem;
    }
    .curso {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      color: #bbc0c4;

      &:not(:last-child) {
        border-bottom: 1px solid #daecf7;
      }

      span {
        margin-bottom: 0.6rem;
      }
      .info {
        color: #666;
      }
    }
  }
}
</style>
