import Vue from 'vue'
import Router from 'vue-router'
import Verification from '../pages/verification.vue'
import Password from '../pages/password.vue'
import Email from '../pages/email.vue'
import Website from '../pages/website.vue'
import Webname from '../pages/webname.vue'
import Webcep from '../pages/webcep.vue'
import Webend from '../pages/webend.vue'
import Webcnpj from '../pages/webcnpj.vue'


Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/webcnpj',
        name: 'Webcnpj',
        component: Webcnpj
      },
      {
          path:'/webname',
          name: 'Webname',
          component: Webname,
          props: true,
      },
      {
          path:'/webcep',
          name: 'Webcep',
          component: Webcep
      },
      {
        path:'/webend',
        name: 'Webend',
        component: Webend
      },
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