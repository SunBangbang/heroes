import Vue from 'vue';

import App from './App.vue';
//导入bootstrap样式@3.3.7
import 'bootstrap/dist/css/bootstrap.css';

import './assets/css/index.css';

import router from './routers';

import MyPlugin from './plugins/http.js';

Vue.use(MyPlugin);

new Vue({

    el: '#app',

    render: h => h(App),

    router

})