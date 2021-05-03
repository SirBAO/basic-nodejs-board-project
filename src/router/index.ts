/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/404',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
    hidden: true
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () =>
      import(/* webpackChunkName: "categories" */ '../views/Category.vue')
  },
  {
    path: '/archives',
    name: 'archives',
    component: () =>
      import(/* webpackChunkName: "archives" */ '../views/Archives.vue')
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import(/* webpackChunkName: "tags" */ '../views/Tag.vue')
  },
  {
    path: '/tags/search',
    name: 'tags-search',
    component: () =>
      import(/* webpackChunkName: "result" */ '../views/Result.vue')
  },
  {
    path: '/post/:slug*',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    props: true
  },
  {
    path: '/page/:slug*',
    name: 'page',
