<template>
    <div class="container">
      <h1 class="title"><a href="https://yohan3416.github.io/mxa-ui/" style="text-decoration: none; color: cadetblue;" target="_blank">Mxa组件</a></h1>
      <p>———— 一个基于vue2的简易组件库</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: aquamarine;
    border: solid 2px lightblue;
    background-image: url(https://www.rrppt.com/uploads/moban/2896/img/litpic.jpg);
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
  }
  
  .title {
    font-size: 4em;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  p{
    font-size: 2em;
    color: darkcyan;
  }
  </style>