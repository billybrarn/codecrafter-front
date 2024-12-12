import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UsersPage from '../views/UsersPage.vue'
import EditUser from '../views/EditUser.vue'

const routes = [  
  { path: '/', component: HomePage },
  { path: '/users', component: UsersPage },
  { path: '/users/edit/:id', component: EditUser, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router