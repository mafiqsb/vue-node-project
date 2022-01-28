import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import SignUp from '@/components/SignUp.vue'
import about from '@/components/About'
import blog from '@/components/blog'
import Login from '@/components/Login'
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
      name: 'SignUp',
      component: SignUp,

    },

    {
      path: '/about',
      name: 'about',
      component: about
    },

    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: SignUp
    },



  ]

  
  });

  

