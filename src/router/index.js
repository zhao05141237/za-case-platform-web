import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layoutOrigin/Layout'
import Empty from '@/views/Layout/Empty'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/testPlan'
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }, {
    path: '/ticket',
    component: () => import('@/views/ticket'),
    hidden: true
  },
  {
    path: '/testPlan',
    redirect: '/testPlan/list',
    component: Layout,
    meta: {
      title: '测试计划'
    },
    children: [{
      path: 'list',
      name: 'list',
      component: () => import('@/views/components/track/plan/components/TestPlanList'),
      meta: {
        title: '测试计划'
      }
    }
    ]
  },
  {
    path: '/testCase',
    redirect: '/testCase/list',
    component: Layout,
    meta: {
      title: '测试用例'
    },
    children: [{
      path: 'list',
      name: 'list',
      component: () => import('@/views/components/track/plan/components/TestPlanList'),
      meta: {
        title: '测试用例'
      }
    }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
