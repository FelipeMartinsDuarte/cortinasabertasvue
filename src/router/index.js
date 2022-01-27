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
import WebsiteVerificator from '../pages/websitec/website.vue'
import Profile from '../pages/websitec/profile.vue'
import Images from '../pages/websitec/images.vue'
import TeamStructure from '../pages/websitec/teamstruc.vue'
import AcessSpot from '../pages/websitec/accspot.vue'
import Contact from '../pages/websitec/contact.vue'
import Description from  '../pages/websitec/description.vue'
import PricePlans from  '../pages/websitec/priceplans.vue'


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
        path:'/website/3',
        name: 'TeamStructure',
        component: TeamStructure
      },
      {
        path:'/website/4',
        name: 'AcessSpot',
        component: AcessSpot
      },
      {
        path:'/website/5',
        name: 'Contact',
        component: Contact
      },
      {
        path:'/website/6',
        name: 'Description',
        component: Description
      },
      {
        path:'/website/7',
        name: 'WebsiteVerificator',
        component: WebsiteVerificator
      },
      {
        path:'/website/8',
        name: 'PricePlans',
        component: PricePlans
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