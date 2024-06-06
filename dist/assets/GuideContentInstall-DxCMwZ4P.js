import{_ as n,c as r,b as o,t as c,o as d,p as a,a as i}from"./index-BxxWntIH.js";const u={components:{},data(){return{codeLength:0,code1:"npm i mxa-ui",code2:`
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
}).$mount('#app')`}},methods:{}},t=e=>(a("data-v-40e69cc5"),e=e(),i(),e),p={class:"content"},m=t(()=>o("h3",null,"在项目目录终端下执行",-1)),_={class:"code-box"},l={style:{"font-weight":"bold","font-size":"16px",color:"black","background-color":"darkgray"}},h=t(()=>o("h3",null,"在main.js文件下注册组件",-1)),f={class:"code-box"},x={style:{"font-weight":"bold","font-size":"16px",color:"black","background-color":"darkgray"}},b=t(()=>o("h3",null,"然后你就可以在你的vue2项目中使用Mxa组件了",-1));function g(e,v,V,k,s,y){return d(),r("div",p,[m,o("div",_,[o("pre",l,"          "+c(s.code1)+`
    `,1)]),h,o("div",f,[o("pre",x,"          "+c(s.code2)+`
    `,1)]),b])}const I=n(u,[["render",g],["__scopeId","data-v-40e69cc5"]]);export{I as default};
