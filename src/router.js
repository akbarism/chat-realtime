import vue from 'vue';
import VueRouter from 'vue-router';
import register from './views/register.vue';
import login from './views/login.vue';
import home from './views/home.vue';
import firebase from 'firebase';

vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      requiresGuest: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresGuest: true,
    }
  },
];
const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!firebase.auth().currentUser) {
        next({
          path: "/login",
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        next();
      }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  }else {
    next();
  }
})
export default router;