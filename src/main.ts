import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { hover } from "./comp/directive/index"
import event from "./comp/tool/event";
// 支持this.$xxx
declare module 'vue/types/vue' {
  interface Vue {
      [key: string]: any,
  }
}
Vue.config.productionTip = false
Vue.use(hover);
Vue.use(event);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')