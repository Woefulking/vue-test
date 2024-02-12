import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import ListOfFormsView from '../components/ListOfForms.vue'
import CreateFormsView from '../components/CreateForms.vue'
import PreviePageView from '../components/PreviePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: ListOfFormsView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateFormsView
    },
    {
      path: '/previe',
      name: 'previe',
      component: PreviePageView
    },
  ]
})

export default router
