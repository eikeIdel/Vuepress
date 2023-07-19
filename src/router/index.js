// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useGetWpData } from '../composables/useGetWpData'

const { getWpData } = useGetWpData();
const wpData = await getWpData();

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
]

wpData.data.pages.forEach(page => {
  const newRoute = {
    path: page.post_name,
    name: page.post_title,
    component: () => import('@/views/Page.vue'),
    props: page,
  };
  routes[0].children.push(newRoute);
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router