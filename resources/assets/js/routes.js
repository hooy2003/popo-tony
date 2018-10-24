import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import UserInfo from './components/UserInfo.vue';
import SearchPassword from './components/search_password.vue';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/login',
    components: {
        default: Login,
        header: Header
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
      header: Header
    }
  },
  {
    path: '/userinfo',
    components: {
      default: UserInfo,
      header: Header
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
    path: '*',
    redirect: '/',
  }
];