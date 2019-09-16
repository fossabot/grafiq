import Vue from "vue";
import Vuex from "vuex";
import staffModule from "./modules/staff";

export * from "./modules/mutation-types";
export * from "./config";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    staff: staffModule
  },
  actions: {}
});
