<template>
  <Home />
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $bg-color;
  margin-top: 60px;
  scroll-behavior: smooth;
}


/* Works on Firefox */
* {
  scrollbar-width: thin;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: #363636;
}

*::-webkit-scrollbar-thumb {
  background-color: #696969;
  border-radius: 10px;
  border: 1px solid #696969;
}
</style>
