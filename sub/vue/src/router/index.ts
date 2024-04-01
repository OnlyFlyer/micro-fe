import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RootWrapper from '../components/RootWrapper.vue';
import GoodsList from '../views/GoodsList.vue';
import GoodsDetail from '../views/GoodsDetail.vue';
import GoodsEdit from '../views/GoodsEdit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RootWrapper,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/goodsList',
          name: 'goodsList',
          component: GoodsList,
        },
        {
          path: '/goods/detail/:id',
          name: 'goodsDetail',
          component: GoodsDetail,
        },
        {
          path: '/goods/edit/:id',
          name: 'goodsEdit',
          component: GoodsEdit,
        },
      ],
    }
  ]
})

export default router
