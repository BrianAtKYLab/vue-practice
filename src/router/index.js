import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HelloTree from '@/components/HelloTree.1'
import HelloTable from '@/components/HelloTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloTree',
      component: HelloTree
    }
  ]
})
