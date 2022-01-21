import Vue from 'vue'
import Router from 'vue-router'

//Register
import Password from '../pages/password.vue'
import Email from '../pages/email.vue'

//Verification
import Webcnpj from '../pages/verification/webcnpj.vue'
import Webname from '../pages/verification/webname.vue'
import Webcep from '../pages/verification/webcep.vue'
import Verification from '../pages/verification/verification.vue'

//Website Creation
import Website from '../pages/websitec/website.vue'
import Profile from '../pages/websitec/profile.vue'
import Images from '../pages/websitec/images.vue'


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
        path:'/website/1',
        name: 'Profile',
        component: Profile
      },
      {
        path:'/website/2',
        name: 'Images',
        component: Images
      },
      {
        path:'/website/6',
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