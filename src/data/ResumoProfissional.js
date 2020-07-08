import { formatDistanceStrict } from "date-fns";
import pt from "date-fns/locale/pt-BR";

const tempoRelativo = (dataInicio, dataFim) =>
  formatDistanceStrict(dataInicio, dataFim, { locale: pt });

const varejofacil = {
  nome: "varejofacil",
  descricao:
    "Solução voltada ao gerenciamento de empresas, mais adequada a supermercados, restaurantes e comércios de pequeno a médio porte. O front-end do projeto, já bem antigo e ultrapassado, está sendo modernizado com o framework Vue.js.",
  tags: [
    { nome: "Vue.js", cor: "#4BB37E" },
    { nome: "HTML", cor: "#DD4C27" },
    { nome: "JavaScript", cor: "#D0B531" },
    { nome: "CSS", cor: "#48A4DA" },
    { nome: "Jest" },
    { nome: "Cypress.io" },
    { nome: "Webpack" },
    { nome: "Material Design" },
    { nome: "Element UI" },
    { nome: "SASS/SCSS" },
    { nome: "SQL Básico" },
  ],
};

export default [
  {
    empresa: "Grupo Casa Magalhães",
    atual: true,
    descricaoEmpresa:
      "Empresa cearense bem consolidada de soluções tecnológicas para ajudar companhias a superarem o complexo sistema tributário brasileiro e administrar melhor o negócio.",
    cargos: [
      {
        descricao: "Desenvolvedor front-end",
        tempo: "Julho de 2020 - Hoje",
        tempoRelativo: tempoRelativo(new Date(2020, 6, 7), new Date()),
        atual: true,
        projetos: [varejofacil],
      },
      {
        descricao: "Estagiário front-end",
        tempo: "Julho de 2019 - Julho de 2020",
        tempoRelativo: tempoRelativo(
          new Date(2019, 6, 7),
          new Date(2020, 6, 7)
        ),
        atual: false,
        projetos: [varejofacil],
      },
    ],
  },
];
