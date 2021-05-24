<template>
  <div>
    <input v-model="userName" class="form-input" />
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
