import Vue from 'vue'
import Router from 'vue-router'
import Verification from '../pages/verification/verification.vue'
import Password from '../pages/password.vue'
import Email from '../pages/email.vue'
import Website from '../pages/website.vue'
import Webname from '../pages/verification/webname.vue'
import Webcep from '../pages/verification/webcep.vue'
import Webcnpj from '../pages/verification/webcnpj.vue'


Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/verificate/1',
        name: 'Webcnpj',
        component: Webcnpj
      },
      {
          path:'/verificate/2',
          name: 'Webname',
          component: Webname,
          props: true,
      },
      {
          path:'/verificate/3',
          name: 'Webcep',
          component: Webcep
      },
      {
        path:'/verificate/4',
        name: 'Verificar',
        component: Verification
      },
      {
        path:'/website',
        name: 'Website',
        component: Website
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