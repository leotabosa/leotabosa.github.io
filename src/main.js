import Vue from "vue";
import App from "./App.vue";
import Tag from "./components/Tag";
import GitHubLogo from "./assets/GitHubLogo";
import LinkedInLogo from "./assets/LinkedInLogo";

var vm = new Vue({
  render: (h) => h(App),
});
vm.$mount("#app");
Vue.component("Tag", Tag);
Vue.component("GitHubLogo", GitHubLogo);
Vue.component("LinkedInLogo", LinkedInLogo);
