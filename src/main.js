import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AnButtom from './views/components/An-Button.vue'
// import AnLayout from './views/components/An-Layout.vue'
import AnDialog from './views/components/An-Dialog.vue'
Vue.config.productionTip = false

Vue.component(AnButtom.name,AnButtom)
// Vue.component(AnLayout.name,AnLayout)
Vue.component(AnDialog.name,AnDialog)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
