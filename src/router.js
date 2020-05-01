import vue from 'vue';
import VueRouter from 'vue-router';
import register from './views/register.vue'
import login from './views/login.vue'
import home from './views/home.vue'

vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
];
const router = new VueRouter({
  mode: 'history',
  routes
});
export default router