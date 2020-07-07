import Vue from 'vue'
import Vuex from 'vuex'
import formModule from './modules/formModule'
import repoModule from './modules/repoModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form: formModule,
    repo: repoModule
  }
})
