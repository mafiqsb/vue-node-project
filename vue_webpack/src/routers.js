import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import SignUp from '@/components/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes : [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/signup',
      name: SignUp,
      component: SignUp,

    },

  ]

  
  });

  

