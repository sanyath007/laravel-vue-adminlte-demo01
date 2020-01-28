require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

Vue.use(VueRouter);

let routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/profile', component: Profile }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router
});
