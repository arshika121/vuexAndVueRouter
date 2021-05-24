import { createStore } from "vuex";
var store = createStore({
  strict: true,
  state: {
    userName: "",
    threadsPage: "Welcome to Threads Page ",
    messagesPage: "Welcome to Messages Page ",
  },
  getters: {},
  mutations: {
    updateMessage(state, userName) {
      state.userName = userName;
    },
  },
  actions: {},
});

export default store;
