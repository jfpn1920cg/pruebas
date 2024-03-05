<template>
  <div>
    <!-- Comenta o elimina la imagen si no la necesitas -->
    <!--<img alt="Vue logo" src="./assets/logo.png">-->

    <!-- Otros elementos del template -->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Prueba_1></Prueba_1>
  </div>
  
</template>

<script>
// Importa los componentes que necesites
// import HelloWorld from './components/HelloWorld.vue'
import Prueba_1 from './components/Prueba_1.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
    Prueba_1
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
</style>
