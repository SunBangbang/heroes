import VueRouter from 'vue-router';

import Vue from 'vue';

import equips from '../views/equips/List.vue';

import heroes from '../views/heroes/List.vue';

import weapons from '../views/weapons/List.vue';

import add from '../views/heroes/Add.vue';

import edit from '../views/heroes/Edit.vue';


//Vue.use()注册VueRouter插件
Vue.use(VueRouter);
//创建路由对象
const router = new VueRouter({

    // linkExactActiveClass: 'active',
    linkActiveClass: 'active',

    routes: [
        { path: '/', redirect: '/heroes' },

        { path: '/heroes', component: heroes },

        { path: '/equips', component: equips },

        { path: '/weapons', component: weapons },

        { path: '/heroes/add', component: add },

        { path: '/heroes/edit/:id', component: edit, props: true },

    ]

})

export default router;