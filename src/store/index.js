import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: null,
    objectProfile: {
      notification: [],
    },
  },

  mutations: {
    updateProfile(state, apiProfileInfo) {
      state.profile = apiProfileInfo;
    },
    setNotification(state, dataNotification) {
      if (typeof dataNotification === "object") {
        state.objectProfile.notification = dataNotification;
      } else {
        throw new Error("Data Notification not is object");
      }
    },
  },

  actions: {},

  modules: {},
});
