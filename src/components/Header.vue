<template>
  <div>
    <div class="form-input">Enter your name: <input v-model="userName" /></div>
    <Threads />
  </div>
</template>
<script>
import Threads from "../views/Threads";
export default {
  name: "Header",
  components: {
    Threads,
  },
  computed: {
    userName: {
      get() {
        return this.$store.state.userName;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      },
    },
  },
};
</script>
