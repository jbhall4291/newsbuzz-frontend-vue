import { createRouter, createWebHistory } from 'vue-router'
import ArticlesView from '../views/ArticlesView.vue'
import SingleArticleView from '../views/SingleArticleView.vue'
import { getArticleById } from '../utils/api'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ArticlesView
    },
    {
      path: '/articles/:article_id',
      name: 'singleArticle',
      component: SingleArticleView,
      props: (route) => ({ articleId: route.params.article_id }),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
