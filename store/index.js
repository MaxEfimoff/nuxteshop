import Vue from 'vue';
import Vuex from 'vuex';
import products from './products';
import admin from './admin';
import auth from './auth';
import category from './category';

Vue.use(Vuex)


export default function () {

  const Store = new Vuex.Store({
    modules: {
      products,
      admin,
      category,
      auth
    },
    strict: process.env.DEV,
    actions: {
      async nuxtServerInit({commit, dispatch}) {
        await dispatch('auth/getAuthUser')
        .catch(() => console.log('Not Authenticated!'))
      }
    }
  });

  return Store;
}
