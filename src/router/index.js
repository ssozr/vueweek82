import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/front/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
      component: () => import('../views/front/FrontLayout.vue'),
      children: [
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/front/AboutView.vue')
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => import('../views/front/ArticlesView.vue')
        },
        {
          path: 'teachers',
          name: 'teachers',
          component: () => import('../views/front/ClassesView.vue')
        },
        {
          path: 'article/:id',
          component: () => import('../views/front/ArticleView.vue')
        },
        {
          path: 'class/:id',
          component: () => import('../views/front/ClassView.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/front/CartView.vue')
        },
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'order',
          component: () => import('../views/front/OrderView.vue')
        },
        {
          path: 'class/:category',
          component: () => import('../views/front/ClassesView.vue')
        },
      ]
      
    },
    {
      path: '/login',
      component: () => import('../views/UserLogin.vue')
    },
    {
      path: '/user',
      component: () => import('../views/UserView.vue'),
      children: [
        {
          path: '/userorders',
          component: () => import('../views/user/UserOrders.vue')
        },
        {
          path: '/userprodeuts',
          component: () => import('../views/user/UserProducts.vue')
        },
        {
          path: '/voucher',
          component: () => import('../views/user/VoucherView.vue')
        },
        {
          path: '/article',
          component: () => import('../views/user/ArticleView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/front/NotFount.vue')
    }
  ]
})

export default router
