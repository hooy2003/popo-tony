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

//添加请求拦截器

axios.interceptors.request.use(config => {
    //在发送请求之前做某事，比如说 设置loading动画显示

    store.dispatch({
        type: 'isLoading'
    });
    return config
}, error => {
    //请求错误时做些事
    return Promise.reject(error)
})
  
//添加响应拦截器
axios.interceptors.response.use(response => {
    //对响应数据做些事，比如说把loading动画关掉

    store.dispatch({
        type: 'hasLoaded'
    });
    return response
}, error => {
    //请求错误时做些事
    return Promise.reject(error)
})

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


// API token 設計
// https://forum.vuejs.org/t/axios-token/33528

// axios.post(process.env.TOKEN_HOST + `/token`, {
//     "client_id" : "AirdesignPOS",
//     "client_secret": "777ABHJV777",
//     "grant_type": "password",
//     "username": "vincent@airdesign.com.tw",
//     "password": "abc@123"
// })
// .then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });


new Vue({
  el: '#page-wrapper',
  store,
  router,
  render: h => h(App)
});