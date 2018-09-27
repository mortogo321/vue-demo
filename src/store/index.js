import Vue from 'vue';
import Vuex from 'vuex';

import auth from './models/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});
