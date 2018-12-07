import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

// Header 可能用不到
import Header from './components/Header.vue';
import Navbar from './components/Nav.vue';
import Home from './components/Home.vue';
import UserInfo from './components/UserInfo.vue';
import SearchPassword from './components/search_password.vue';
// Four pages
import FoodManage from './components/food/manage.vue';
import RecipesManage from './components/recipes/manage.vue';
import MealManage from './components/meal/manage.vue';
import SetManage from './components/set/manage.vue';
// Other
import StoreManage from './components/store/Manage.vue';
import PrinterManage from './components/printer/Manage.vue';
import StoreInfoManage from './components/storeinfo/Manage.vue';

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
    path: '/food',
    components: {
      default: FoodManage,
      header: Navbar
    }
  },
  {
    path: '/recipes',
    components: {
      default: RecipesManage,
      header: Navbar
    }
  },
  {
    path: '/meal',
    components: {
      default: MealManage,
      header: Navbar
    }
  },
  {
    path: '/set',
    components: {
      default: SetManage,
      header: Navbar
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
    path: '/storeinfo',
    components: {
      default: StoreInfoManage,
      header: Navbar
    }
  },
  {
    path: '/printer',
    components: {
      default: PrinterManage,
      header: Navbar
    }
  },
  {
    path: '*',
    redirect: '/',
  }
];