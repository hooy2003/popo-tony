// 載入外掛套件
require('./vender');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

// import { sync } from 'vuex-router-sync';
import { routes } from './routes';
import store from './vuex/store';

// sync(store, router);

// 載入 EasyUI
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';

// 載入 App scss
import '../sass/app.scss';

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach( (to, form, next) => {
    const loginUserData = JSON.parse(localStorage.getItem('token'));

    // if (!isLogin) {
    // }
    if(loginUserData) {
        // 如在登入狀態下重整，應該把存在localStorage的資料再送給state一次
        // 如串後端，API應該再傳給state
        store.commit({
            type: 'setUserData',
            userData: loginUserData,
        });
        next();
    } else {
        if ( to.path !== '/login' && to.path !== '/signup' && to.path !== '/search_password') {            
            next('/login');
        }
        else {            
            next();
        }
    }
});

Vue.use(EasyUI);

new Vue({
  el: '#page-wrapper',
  store,
  router,
  render: h => h(App)
});