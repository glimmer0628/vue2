import Vue from 'vue';
import Router from 'vue-router';
import index from '../page/Index/Index.vue';
import homepage from '../page/Homepage/Homepage.vue';
import manage from '../page/Manage/Manage.vue';
import shopping from '../page/Shopping/Shopping.vue';
import my from '../page/My/My.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          component: homepage
        },
        // {
        //   path: '/detail/:id',
        //   name: 'detail',
        //   component: detailPage
        // },
        {
          path: '/manage',
          name: 'manage',
          component: manage
        },
        {
          path: '/shopping',
          name: 'shopping',
          component: shopping
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }
      ]
    }
  ]
});
