<template>
  <div>
    <h1>{{ messagesPage }}{{ userName }}</h1>
    <div class="container">
      <div class="block">
        Vuex is a state management pattern + library for Vue.js applications. It
        serves as a centralized store for all the components in an application,
        with rules ensuring that the state can only be mutated in a predictable
        fashion. It also integrates with Vue's official devtools extension to
        provide advanced features such as zero-config time-travel debugging and
        state snapshot export / import.
      </div>
      <div class="block">
        It is the official router for Vue.js. It deeply integrates with Vue.js
        core to make building Single Page Applications with Vue.js a breeze. It
        also integrates with Vue's official devtools extension to provide
        advanced features such as zero-config time-travel debugging and state
        snapshot export / import.
      </div>
      <div class="block">
        Vuex is a state management pattern + library for Vue.js applications. It
        serves as a centralized store for all the components in an application,
        with rules ensuring that the state can only be mutated in a predictable
        fashion. It also integrates with Vue's official devtools extension to
        provide advanced features such as zero-config time-travel debugging and
        state snapshot export / import.
      </div>
      <div class="block">
        It is the official router for Vue.js. It deeply integrates with Vue.js
        core to make building Single Page Applications with Vue.js a breeze. It
        also integrates with Vue's official devtools extension to provide
        advanced features such as zero-config time-travel debugging and state
        snapshot export / import.
      </div>
      <div class="block">
        Vuex is a state management pattern + library for Vue.js applications. It
        serves as a centralized store for all the components in an application,
        with rules ensuring that the state can only be mutated in a predictable
        fashion. It also integrates with Vue's official devtools extension to
        provide advanced features such as zero-config time-travel debugging and
        state snapshot export / import.
      </div>
      <div class="block">
        It is the official router for Vue.js. It deeply integrates with Vue.js
        core to make building Single Page Applications with Vue.js a breeze. It
        also integrates with Vue's official devtools extension to provide
        advanced features such as zero-config time-travel debugging and state
        snapshot export / import.
      </div>
      <div class="block">
        Vuex is a state management pattern + library for Vue.js applications. It
        serves as a centralized store for all the components in an application,
        with rules ensuring that the state can only be mutated in a predictable
        fashion. It also integrates with Vue's official devtools extension to
        provide advanced features such as zero-config time-travel debugging and
        state snapshot export / import.
      </div>
      <div class="block">
        It is the official router for Vue.js. It deeply integrates with Vue.js
        core to make building Single Page Applications with Vue.js a breeze. It
        also integrates with Vue's official devtools extension to provide
        advanced features such as zero-config time-travel debugging and state
        snapshot export / import.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Messages",
  computed: {
    userName: {
      get() {
        return this.$store.state.userName;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      },
    },
    messagesPage() {
      return this.$store.state.messagesPage;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #eee;
  margin: 10px auto;
  position: relative;
  text-align: center;
  border: 1px solid black;
}
.block {
  background: lightskyblue;
  display: flex;
  width: 400px;
  margin: 10px;
  border: 1px solid black;
}
</style>
