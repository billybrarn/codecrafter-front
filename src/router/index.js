import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UsersPage from '../views/UsersPage.vue'
import EditUser from '../views/EditUser.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { formToJSON } from 'axios'


const routes = [  
  { path: '/', component: HomePage },
  { path: '/login', component: Login },
  { path: '/register', component: Register },

  //page authentication 
  { path: '/users', component: UsersPage, meta:{requiresAuth: true} },
  { path: '/users/edit/:id', component: EditUser, props: true, meta:{requiresAuth: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//Authorization before getting info
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated ) {
    next('/login')
  }
  else{
    next();
  }
})

export default router