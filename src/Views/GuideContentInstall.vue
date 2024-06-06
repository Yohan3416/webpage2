<template>
    <div class="content">
     <h3>在项目目录终端下执行</h3>
 
  <div class="code-box ">
    <pre style="font-weight: bold; font-size: 16px; color: black; background-color: darkgray;">
          {{ code1 }}
    </pre>    
  </div>

  <h3>在main.js文件下注册组件</h3>
  <div class="code-box ">
    <pre style="font-weight: bold; font-size: 16px; color: black; background-color: darkgray;">
          {{ code2 }}
    </pre>    
  </div>
  <h3>然后你就可以在你的vue2项目中使用Mxa组件了</h3>
  </div>       
  </template>
              
<script>
              
export default {
                components: {
                },
                data() {
                  return {
                    codeLength: 0,
                    code1: `npm i mxa-ui`,
                    code2: `
//main.js
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import mxa from "../node_modules/mxa-ui/dist/mxa-ui.umd";//组件库导入
import "../node_modules/mxa-ui/dist/mxa-ui.css";//导入

Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.use(mxa);//注册

const router = new VueRouter({
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')`
                  }
                },
                methods: {
                }
              }
 </script>             
      
<style scoped>
  .code-box {
    width: 570px;
    background-color: darkgray;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 0px 0px 15px 15px;
    text-align: left;
    opacity: 0.6;
  }
  code-box.pre{
    margin: 0;
  }
  .content{
  
      box-sizing: border-box;
      position: fixed;
      width: 100%;
      height: 1000px;
      top: 58px;
      left: 150px;
     
      overflow: auto;
      padding-bottom: 100px;
      background-image: url(https://ts1.cn.mm.bing.net/th/id/R-C.218d8446002ac17ae7f46a5e72148b4c?rik=zbf%2bdDsTZFKqVA&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f016c8e565bd50632f8759647a7eba1.png&ehk=pLeQWUPS6%2bnh%2fGzGqMKWtAS2XHs6hgLKonKbMWgLrIE%3d&risl=&pid=ImgRaw&r=0);
      background-size: cover;
      background-position: 10% 65%; 
      background-repeat: no-repeat; 
    }
  
  </style>