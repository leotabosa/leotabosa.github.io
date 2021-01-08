import { formatDistanceStrict } from "date-fns";
import enUS from "date-fns/locale/en-US";

const tempoRelativo = (dataInicio, dataFim) =>
  formatDistanceStrict(dataInicio, dataFim, { locale: enUS });

const varejofacil = {
  nome: "varejofacil",
  descricao:
    "Nation-wide consolidated ERP, mainly focused on small/medium markets and restaurants / bars.",
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
    { nome: "Basic SQL" },
    { nome: "jQuery" },
  ],
};

const designSystem = {
  nome: "Casa Magalhães' design system",
  descricao:
    "Conception and development of Casa Magalhães' design system, entirely in Vue.js.",
  tags: [
    { nome: "Vue.js", cor: "#4BB37E" },
    { nome: "HTML", cor: "#DD4C27" },
    { nome: "JavaScript", cor: "#D0B531" },
    { nome: "CSS", cor: "#48A4DA" },
    { nome: "Jest" },
    { nome: "Webpack" },
    { nome: "Stylus" },
  ],
};

export default [
  {
    empresa: "Grupo Casa Magalhães",
    atual: true,
    descricaoEmpresa:
      "A well-consolidated company in Ceará - Brazil, with technological solutions to help companies overcome the complex Brazilian tax system and better manage the business.",
    cargos: [
      {
        descricao: "Front-end developer",
        tempo: "7/2020 - Today",
        tempoRelativo: tempoRelativo(new Date(2020, 6, 7), new Date()),
        atual: true,
        projetos: [varejofacil, designSystem],
      },
      {
        descricao: "Front-end intern",
        tempo: "7/2019 - 6/2020",
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
