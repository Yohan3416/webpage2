<template>
    <div class="content">
      <h2>MxaSearchBox</h2>
  <h3>简介</h3>
  <p>MxaSearchBox组件是一个可自定义的搜索输入框，带有一个按钮。通过传递不同的 props，该组件提供了在外观方面的灵活性。</p>
  <hr>
  <h3>Props</h3>
  <ul>
    <li>roundedInput（布尔值）：指定输入框是否应具有圆角边框。默认值：false。</li>
    <li>roundedButton（布尔值）：指定搜索按钮是否应具有圆角边框。默认值：false。</li>
    <li>placeholderText（字符串）：输入框的占位文本。默认值：请输入搜索内容。</li>
    <li>buttonText（字符串）：搜索按钮上显示的文本。默认值：搜索。</li>
    <li>buttonColor（字符串）：搜索按钮的背景颜色。默认值：#007bff。</li>
    <li>buttonTextColor（字符串）：搜索按钮的文本颜色。默认值：white。</li>
  </ul>
  <hr>
  <h3>事件</h3>
  <ul>
    <li>search：当单击搜索按钮时触发，将搜索词传递给父组件。</li>
  </ul>

  <hr>
  <h3>示例</h3>
  
  <div style="margin-left: 30px; background-color: aliceblue; width:250px;border-radius: 5px;">
<div style="display: flex;">
  <div style="margin-bottom: 20px;">
    <MxaSearchBox 
    :roundedInput="true"
    :roundedButton="true"
    placeholderText="请输入搜索内容"
    buttonText="搜索"
    buttonColor="#ff6347"
    buttonTextColor="white"
    v-on:search="(searchTerm) => {
        console.log('正在搜索:', searchTerm);
          // 在此处执行您自定义的搜索逻辑，例如发起API请求等
        }"
  />
  </div>
</div>
<MxadropDown dropdownMaxWidth="1000px" buttonText="展开代码" buttonStyle="info">
<div class="code-box">
  <pre style="font-weight: bold; font-size: 16px;">
        {{ code1 }}
  </pre>    
</div>
</MxadropDown>
</div>

  </div>       
  </template>
              
  <script>
  import MxaSearchBox from '../Mxacomponents/MxaSearchBox.vue'
  import MxadropDown from '../Mxacomponents/MxadropDown.vue'
  
  export default {
      components: {
        MxaSearchBox,
        MxadropDown,
      },
  data() {
      return {
              codeLength: 0,
               code1: `
<MxaSearchBox 
    :roundedInput="true"
    :roundedButton="true"
    placeholderText="请输入搜索内容"
    buttonText="搜索"
    buttonColor="#ff6347"
    buttonTextColor="white"
    v-on:search="(searchTerm) => {
        console.log('正在搜索:', searchTerm);
        // 在此处执行您自定义的搜索逻辑，例如发起API请求等
    }"
/>
  `,
  
     }
  },
      methods: {
        handleSearch(searchTerm) {
        console.log('正在搜索:', searchTerm);
      // 在此处执行您自定义的搜索逻辑，例如发起API请求等
    }
  
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