<template>
    <div class="content">
      <h2>MxadropDown</h2>
      <h3>概述</h3>
  <p>MxadropDown 是一个提供可交互下拉菜单功能的组件。</p>
  <hr>
  <h3>Props</h3>

  <table border="1">
  <thead>
    <tr>
      <th>Props</th>
      <th>类型</th>
      <th>默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>buttonStyle</td>
      <td>String</td>
      <td>'default'</td>
      <td>按钮样式</td>
    </tr>
    <tr>
      <td>buttonText</td>
      <td>String</td>
      <td>'显示内容'</td>
      <td>按钮上显示的文本</td>
    </tr>
    <tr>
      <td>dropdownMaxWidth</td>
      <td>String</td>
      <td>'200px'</td>
      <td>下拉框的最大宽度</td>
    </tr>
    <tr>
      <td>dropdownMaxHeight</td>
      <td>String</td>
      <td>'200px'</td>
      <td>下拉框的最大高度</td>
    </tr>
  </tbody>
</table>
<hr>
  <h3>使用方式</h3>
<div style="display: flex;">
  <div style="margin-bottom: 20px;">
    <MxadropDown :buttonStyle="'primary'" :buttonText="'展开'" :dropdownMaxWidth="'1000px'" :dropdownMaxHeight="'250px'">
        <pre style="font-weight: bold; font-size: 16px;">{{ code1 }}</pre>
    </MxadropDown>
  </div>
</div>

<hr>
<h3>可用的按钮样式</h3>
<ul>
    <li>primary：具有特定的背景颜色 rgb(236, 188, 188)，鼠标悬停和聚焦时背景色变为 #8ec1f7， 边框颜色变为 #66b1ff，文字颜色变为 #fff。</li>
    <li>success：背景为 lightgreen，悬停和聚焦时背景变为 #85ce61，边框颜色变为 #85ce61，文字颜色变为 #fff。</li>
    <li>info：背景为 lightblue，悬停和聚焦时背景变为 #a6a9ad，边框颜色变为 #a6a9ad，文字颜色变为 #fff。</li>
    <li>warning：背景为 red，悬停和聚焦时背景变为 #ebb563，边框颜色变为 #ebb563，文字颜色变为 #fff。</li>
    <li>error：背景为 blueviolet，悬停和聚焦时背景变为 #f78989，边框颜色变为 #f78989，文字颜色变为 #fff。</li>
    <li>default：背景为默认，有 1px 实线边框，颜色为 #ccc，文字颜色为 #606266，悬停和聚焦时颜色变为 #409eff，边框颜色变为 #c6e2ff，背景颜色变为 #ecf5ff。</li>
</ul>

  </div>       
  </template>
              
<script>
import MxadropDown from '../Mxacomponents/MxadropDown.vue'
              
export default {
                components: {
                  MxadropDown,
                },
                data() {
                  return {
                    codeLength: 0,
                    code1: `
<MxadropDown :buttonStyle="'primary'" :buttonText="'展开'" :dropdownMaxWidth="'1000px'" :dropdownMaxHeight="'250px'">
  下拉菜单内容在这里插入 
</MxadropDown>
`,
                  }
                },
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