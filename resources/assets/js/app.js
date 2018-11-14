// 載入外掛套件
require('./vender');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

// Routes & Vuex
import { routes } from './routes';
import store from './vuex/store';

// 載入 iview
import iView from 'iview';

// 載入 App scss
import '../sass/app.scss';

const router = new VueRouter({
  routes,
//   mode: 'history',
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

Vue.use(iView);

new Vue({
  el: '#page-wrapper',
  store,
  router,
  render: h => h(App)
});