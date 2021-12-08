import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import About from '../pages/About.vue';
import NotFound from '../pages/404.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      // component: () => { import()},
      // children: [
      //   {
      //     path: '/qwerty',
      //     name: 'qwerty',
      //     component: Qwerty,
      //   },
      // ],
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: Dashboard,
      // component: () => { import()},
    },
    {
      path: '/about*',
      name: 'about',
      component: About,
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    // {
    //   path: '/*',
    //   component: NotFound,
    // },
    {
      path: '/*',
      redirect: {
        name: '404',
      },
    },
  ],
});

// const user = true;
//
// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== '404') next({ name: '404' });
//   else next();
// });

const titles = {
  dashboard: 'Dashboard',
  about: 'About',
  404: '404 - Not Found',
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
