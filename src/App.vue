<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar/>
  <div class="container">
  <router-view />
  <!-- <Footer /> -->
  </div>
  
</template>

<style scoped>
  .container{
    position: fixed;
    width: 100%;
    top: 58px;
    left: 0px;
    border: solid 1px;
  }
</style>
