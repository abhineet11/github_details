<template>
  <UserListing />
</template>

<script>
import UserListing from './pages/UserListing.vue';

export default {
  name: 'App',
  components: {
    UserListing,
  },
};
</script>

<style>
body {
  margin: 0px;
}
.container {
  max-width: 1000px;
  margin: 0px auto;
}
.btn {
  padding: 10px 30px;
  cursor: pointer;
}
.btn-primary {
}
.btn-secondary {
  background-color: white;
  border: 1px solid #157abc;
  color: #157abc;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
