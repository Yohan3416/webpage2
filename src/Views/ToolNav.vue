<template>
    <div class="content">
      <h2>MxaNav</h2>
        <h3>描述</h3>
  <p>MxaNav可以根据您传递的菜单项目进行渲染，支持暗黑模式和垂直布局。</p>
  <hr>
  <h3>使用示例</h3>
  <router-view />
<div style="margin-left: 30px; background-color: aliceblue;border: 1px; width: 187px; opacity: 0.8; border-radius: 5px;">
<div style="display: flex;">    
<MxaNav 
  :menuItems="[
      { title: 'Home', link: '/tool/nav/home' },
      { title: 'About', link: '/tool/nav/about' },
      { title: 'Contact', link: '/tool/nav/contact' }
    ]"
  :isDark="true"
  :isVertical="false"
/>

</div> 
<MxadropDown dropdownMaxWidth="1000px" buttonText="展开代码" buttonStyle="info">
<div class="code-box">
  <pre style="font-weight: bold; font-size: 16px;">
        {{ code1 }}
  </pre>    
</div>
</MxadropDown>
</div>
    <hr>
<div style="margin-left: 30px; background-color: aliceblue;border: 1px; width: 187px;border-radius: 5px;">
<div style="display: flex;">    
<MxaNav 
  :menuItems="[
      { title: 'Home', link: '/tool/nav/home' },
      { title: 'About', link: '/tool/nav/about' },
      { title: 'Contact', link: '/tool/nav/contact' }
    ]"
  :isDark="false"
  :isVertical="true"
/>

</div> 
<MxadropDown dropdownMaxWidth="1000px" buttonText="展开代码" buttonStyle="info">
<div class="code-box">
  <pre style="font-weight: bold; font-size: 16px;">
        {{ code2 }}
  </pre>    
</div>
</MxadropDown>
</div>
<hr>
<h3>Props参数</h3>

<ul>
    <li>menuItems (Array): 菜单项目数组，每个项目应该包含title和link属性。</li>
    <li>isDark (Boolean): 是否启用暗黑模式，默认为false。</li>
    <li>isVertical (Boolean): 是否垂直排列菜单项，默认为false。</li>
</ul>
  </div>       
  </template>
              
  <script>
  import MxadropDown from '../Mxacomponents/MxadropDown.vue'
  import MxaNav from '../Mxacomponents/MxaNav.vue'
  
  export default {
      components: {
      MxadropDown,
      MxaNav,
      },
  data() {
      return {
              codeLength: 0,
               code1: `
<MxaNav 
  :menuItems="[
      { title: 'Home', link: '/tool/nav/home' },
      { title: 'About', link: '/tool/nav/about' },
      { title: 'Contact', link: '/tool/nav/contact' }
    ]"
  :isDark="true"
  :isVertical="false"
/>
  `,
    code2:`
<MxaNav 
  :menuItems="[
      { title: 'Home', link: '/tool/nav/home' },
      { title: 'About', link: '/tool/nav/about' },
      { title: 'Contact', link: '/tool/nav/contact' }
    ]"
  :isDark="false"
  :isVertical="true"
/>
    `,
  
     }
  },
      methods: {
        handleClick() { 
          alert('Button clicked!');
        },
      }
  } 
  
  </script>
      
  <style scoped>
  .code-box {
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 15px;
  }
  code-box.pre{
    margin: 0;
  }
  .content{
    background-color: aliceblue;
      box-sizing: border-box;
      position: fixed;
      width: 100%;
      height: 1000px;
      top: 58px;
      left: 150px;
     
      overflow: auto;
      padding-bottom: 100px;
      background-image: url(https://tse1-mm.cn.bing.net/th/id/OIP-C.x3HEoP4_lRCBF4Wlp2dVIwHaLG?pid=ImgDet&w=474&h=710&rs=1);
      background-size: cover; 
      background-position: center; 
      background-repeat: no-repeat; 
  }
  .hljs-code-wrapper {
    border: soid 1px ;
    position: relative;
    padding: 0;
    box-sizing: border-box;
  }
  
  table {
      border-collapse: collapse;
    }
  td, th {
      border: 1px solid black;
      padding: 0;
      margin: 0;
    }
  
  </style>