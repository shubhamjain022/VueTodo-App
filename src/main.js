import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Skills
    },{
      path: '/about',
      component: About
    },
    {
      path: '/about',
      component: About
    }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
