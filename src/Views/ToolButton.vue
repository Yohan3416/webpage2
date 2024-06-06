<template>
  <div class="content">
    <h2>Mxa-Button</h2>

<p>Mxa-Button 是一个多功能的按钮组件。通过本文档，您将了解组件的所有样式类、props、slots、事件方法以及样式变量。</p>

<h3>Props</h3>

<p>以下是 Mxa-Button 组件的 props 列表：</p>

<table border="1">
  <thead>
    <tr>
      <th>Props</th>
      <th>类型</th>
      <th>描述</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>按钮类型，可选值为 'default', 'primary', 'success', 'info', 'warning', 'error'</td>
      <td>'default'</td>
    </tr>
    <tr>
      <td>round</td>
      <td>Boolean</td>
      <td>是否显示圆角按钮</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Boolean</td>
      <td>是否显示加载中状态</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>是否禁用按钮</td>
      <td>false</td>
    </tr>
    <tr>
      <td>circle</td>
      <td>Boolean</td>
      <td>是否显示圆形按钮</td>
      <td>false</td>
    </tr>
  </tbody>
</table>
<hr>
<h3>Events</h3>

<table border="1">
  <thead>
    <tr>
      <th>事件名称</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>click</td>
      <td>按钮被点击时触发</td>
    </tr>
  </tbody>
</table>
<hr>
<h3>Slots</h3>

<ul>
  <li>默认插槽：可插入按钮文字。</li>
</ul>
<hr>
<h3>示例代码</h3>
<div style="margin-left: 30px; background-color: aliceblue; border-radius: 5px; width: 1100px;">
<p>我们提供多种样式选择：</p>

<div style="display: flex;">
  <div v-for="type in types" style="margin-right: 20px;">
    <MxaButton :key="type" :type="type" @click="handleClick()">Click {{ type }} Button</MxaButton>
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

<div style="margin-left: 30px; background-color: aliceblue; border-radius: 5px; width: 210px;">
<p>我们也提供加载状态的按钮：</p>
<div style="display: flex;">    
<MxaButton loading="true"></MxaButton>
</div> 
<MxadropDown dropdownMaxWidth="1000px" buttonText="展开代码" buttonStyle="info">
<div class="code-box">
  <pre style="font-weight: bold; font-size: 16px;">
        {{ code2 }}
  </pre>    
</div>
</MxadropDown>
</div>

<div style="margin-left: 30px; background-color: aliceblue; border-radius: 5px; width: 210px;">
<p>我们也提供一些按钮的形状：</p>
<div style="display: flex;">
  <div style="margin-right: 20px;">   
    <MxaButton :round="true">圆角按钮</MxaButton>
  </div> 
    <MxaButton :circle="true">圆形</MxaButton>
</div> 
<MxadropDown dropdownMaxWidth="1000px" buttonText="展开代码" buttonStyle="info">
<div class="code-box">
  <pre style="font-weight: bold; font-size: 16px;">
        {{ code3 }}
  </pre>    
</div>
</MxadropDown>
</div> 

</div>       
</template>
            
<script>
import MxaButton from '../Mxacomponents/MxaButton.vue'
import MxadropDown from '../Mxacomponents/MxadropDown.vue'

export default {
    components: {
    MxaButton,
    MxadropDown,
    },
data() {
    return {
            codeLength: 0,
             code1: `
<template>
<div style="display: flex;">
  <div v-for="type in types" style="margin-right: 20px;">
    <MxaButton :key="type" :type="type" @click="handleClick()">Click {{ type }} Button</MxaButton>
  </div>
</div>
<template>
//types: ['primary', 'success', 'info', 'warning', 'error', 'default']
`,
  code2:`<MxaButton loading="true"></MxaButton>`,
  code3:`
  <div style="display: flex;">
  <div style="margin-right: 20px;">   
    <MxaButton :round="true">圆角按钮</MxaButton>
  </div> 
    <MxaButton :circle="true">圆形</MxaButton>
  </div> 
`,

  types: ['primary', 'success', 'info', 'warning', 'error', 'default']

   }
},
    methods: {
      handleClick() { 
        alert('Button clicked!');
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