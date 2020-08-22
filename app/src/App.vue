<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div style="height:600px">
    <iframe id="frame" src="https://lichess.org/embed/XIwZa926" title="W3Schools Free Online Web Tutorials"></iframe>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#frame {
   width: 100%;
   height: 100%;
   border: 1px solid black;
   position: relative;
}
</style>