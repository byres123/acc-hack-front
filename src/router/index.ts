import Vue from 'vue';
import VueRouter from 'vue-router';
import {navigation} from './navigation';

Vue.use(VueRouter);

const routes = navigation;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
