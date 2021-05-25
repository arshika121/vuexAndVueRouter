<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Threads/1">Threads</router-link> |
      <router-link to="/messages/1">Messages</router-link>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#nav {
  padding: 30px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.child {
  border: 1px solid black;
  justify-content: center;
  flex: 1;
  background-color: aqua;
}
.form-input {
  position: relative;
  top: -10px;
  left: 400px;
}

</style>
