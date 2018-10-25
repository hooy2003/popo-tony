import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

// Header 可能用不到
import Header from './components/Header.vue';
import Navbar from './components/Nav.vue';
import Home from './components/Home.vue';
import UserInfo from './components/UserInfo.vue';
import SearchPassword from './components/search_password.vue';
import StoreManage from './components/store/Manage.vue';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [  
  {
    path: '/login',
    components: {
        default: Login
    }
  },
  {
    path: '/signup',
    components: {
        default: Signup,
        header: Header
    }
  },
  {
    path: '/',
    components: {
      default: Home,
      header: Navbar
    }
  },
  {
    path: '/userinfo',
    components: {
      default: UserInfo,
      header: Navbar
    }
  },
  {
    path: '/search_password',
    components: {
      default: SearchPassword,
      header: Header
    }
  },
  {
    path: '/store',
    components: {
      default: StoreManage,
      header: Navbar
    }
  },
  {
    path: '*',
    redirect: '/',
  }
];