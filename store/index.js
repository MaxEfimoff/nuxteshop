import Vue from 'vue'
import Vuex from 'vuex'
import products from './products';

Vue.use(Vuex)


export default function () {

  const Store = new Vuex.Store({
    modules: {
      products
    },
    strict: process.env.DEV
  })

  return Store
}
