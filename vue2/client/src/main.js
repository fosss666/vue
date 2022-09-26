import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
import router from './router/exampleDemo3'
import store from './store'
// import example from './views/ExampleDemo1'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import example2 from './views/ExampleDemo2'
import example3 from './views/ExampleDemo3'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(example3)
}).$mount('#app')
