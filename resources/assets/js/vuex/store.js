import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import food from './modules/food';
import set from './modules/set';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    food,
    set
  }
});

export default store;