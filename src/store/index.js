import Vue from 'vue';
import Vuex from 'vuex';
import studioModule from './modules/studio';
import adminModule from './modules/admin';
import Admin from '@/api/Admin';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin: adminModule,
    studio: studioModule,
  },
  state: {
    categories: [],
    url: process.env.VUE_APP_API_URL,
    // url: "http://localhost:4000",
    msg: null,
    networkconnections: true,
    colWidth: 33.3,
    screenwidth: window.innerWidth,
    one: {
      left: 33.3,
      right: null,
      lastPos: null,
      min: 5
    },
    two: {
      left: 66.6,
      right: null,
      lastPos: null,
      min: 95
    },
  },
  getters: {},
  mutations: {
    msg(state, msg) {
      state.msg = msg
      setTimeout(function () { state.msg = null }, 5000);
    },

    update_categories(state, data) {
      state.categories = [...state.categories, ...data]
    }
  },

  actions: {
    async checkConnection({ state }) {

      const res = await fetch("http://info.cern.ch/")
      state.networkconnections = !state.networkconnections
    },
    async fetch_categories({ commit, rootState }) {
      const res = await Admin.fetch_categories(rootState.url)
      !res.state && commit('msg', { msg: res.msg, type: res.state ? 'success' : 'warning' })
      res.state && commit('update_categories', res.json.categories)
      return res.state ? true : false
    }
  },

});
