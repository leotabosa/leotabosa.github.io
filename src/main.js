import Vue from "vue";
import App from "./App.vue";
import Loader from "./components/Loader";
import Botao from "./components/Botao";
import Tag from "./components/Tag";
import GitHubLogo from "./assets/GitHubLogo";
import LinkedInLogo from "./assets/LinkedInLogo";
import EmailLogo from "./assets/EmailLogo";

var vm = new Vue({
  render: (h) => h(App),
});
vm.$mount("#app");
Vue.component("Loader", Loader);
Vue.component("Botao", Botao);
Vue.component("Tag", Tag);
Vue.component("GitHubLogo", GitHubLogo);
Vue.component("LinkedInLogo", LinkedInLogo);
Vue.component("EmailLogo", EmailLogo);
