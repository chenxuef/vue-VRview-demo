import Vue from 'vue'
import Router from 'vue-router'
import VrImgList from '@/components/VrImgList'
// import PanoPage from '@/components/panoPage' 
import Classify from '@/components/Classify'
import funcMenu from '@/components/funcMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app'
    },
    {
      path: '/vritem',
      name: 'VrDisplayPage',
      component: VrImgList
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/funcMenu',
      name: 'funcMenu',
      component: funcMenu
    }
    // ,{
    //   path: '/Pano',
    //   name: 'PanoPage',
    //   component: PanoPage
    // }

  ]
})
