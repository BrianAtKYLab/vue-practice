import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HelloTree from '@/components/HelloTree'
import HelloTable from '@/components/HelloTable'
import HelloInput from '@/components/HelloInputNumber1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloInput',
      component: HelloInput
    }
  ]
})
