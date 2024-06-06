<template>
    <div class="content">
      <h2>MxaSwitch</h2>
      <h3>概述</h3>
  <p>MxaSwitch 组件是一个自定义开关组件，用于在界面上展示可切换的开关状态。</p>
  <hr>
  <h3>使用方法</h3>
  <MxaSwitch :size="'small'" :initialSwitchValue="false" v-on:switch-change="(switchOn) => {console.log('开关当前状态：'+switchOn);}" style="margin-bottom: 10px;"></MxaSwitch>
  <MxadropDown dropdownMaxWidth="1500px" buttonText="展开代码" buttonStyle="info">
  <div class="code-box">
    <pre style="font-weight: bold; font-size: 16px;">
          {{ code1 }}
    </pre>    
  </div>
  </MxadropDown>
  <hr>
  <h3>Props</h3>
  <ul>
    <h4>initialSwitchValue</h4>
    <li>类型: Boolean</li>
    <li>默认值: false</li>
    <li>描述: 开关的初始值，控制开关的状态</li>
    <h4>size</h4>
    <li>类型: String</li>
    <li>默认值: 'medium'</li>
    <li> 描述: 设置开关的尺寸大小，可选值为 'small', 'medium', 'large'</li>
  </ul>
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
        <td>switch-change</td>
        <td>当开关状态发生改变时触发，传递当前开关状态的值switvhOn: (Boolean)</td>
      </tr>
    </tbody>
  </table>
  </div>       
  </template>
              
<script>
import MxadropDown from '../Mxacomponents/MxadropDown.vue'
import MxaSwitch from '../Mxacomponents/MxaSwitch.vue'
              
export default {
                components: {
                  MxadropDown,
                  MxaSwitch,
                },
                data() {
                  return {
                    codeLength: 0,
                    code1: `
<template>
  <MxaSwitch :size="'small'" :initialSwitchValue="false" v-on:switch-change="(switchOn) => {console.log('开关当前状态：'+switchOn);}" style="margin-bottom: 10px;"></MxaSwitch>
<template>
`,
                  }
                },
                methods: {
                  handleSwitchChange(switchOn){
                    alert('开关当前状态：'+switchOn);
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
      background-image: url(https://img.shetu66.com/2023/04/10/1681123387975479.jpg);
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