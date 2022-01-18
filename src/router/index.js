import Vue from 'vue'
import Router from 'vue-router'
import Website from '../pages/website.vue'
import Verification from '../pages/verification.vue'
import Email from '../pages/email.vue'
import Password from '../pages/password.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/website',
          name: 'Website',
          component: Website
      },
      {
        path:'/verification',
        name: 'Verificar',
        component: Verification
      },
      {
        path:'/email',
        name: 'Email',
        component: Email
      },
      {
        path:'/password',
        name: 'Password',
        component: Password
      }
  ]
})