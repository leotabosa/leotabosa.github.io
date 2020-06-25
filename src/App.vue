<template>
  <div class="container">
    <MenuDeTopo />

    <div class="corpo"></div>
  </div>
</template>
<script>
// import Axios from "axios";
import MenuDeTopo from "./components/MenuDeTopo";

// const axios = Axios.create({
//   baseURL: "https://api.github.com/users/leotabosa/repos",
// });
export default {
  page: {
    meta: {
      title: "Ok",
    },
  },
  components: {
    MenuDeTopo,
  },
  data() {
    return {};
  },
  created() {
    this.carregaDados();
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
    // solicitaDados() {
    //   return axios.get().catch((err) => {
    //     this.carregando = false;
    //     this.erro = err;
    //     if (err === "Network Error") alert("Erro de conexão.");
    //   });
    // },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Raleway", "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.corpo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% - 60px);
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .corpo {
    width: calc(100vw - 20px);
    padding: 10px;
  }
}
</style>
