<template>
    <div class="content">
      <h2>MxaForm</h2>
  
  <p>MxaForm组件是一个用于用户登录和注册的表单组件,有基本的内置的验证器，要求</p>
  
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
        <td>formType</td>
        <td>String</td>
        <td>"login"或"register"</td>
        <td>undefined</td>
      </tr>
      <tr>
        <td>usernameMaxLength</td>
        <td>Number</td>
        <td>设置用户名最大长度</td>
        <td>16</td>
      </tr>
      <tr>
        <td>minPasswordLength</td>
        <td>Number</td>
        <td>设置密码最小长度</td>
        <td>6</td>
      </tr>
      <tr>
        <td>size</td>
        <td>String</td>
        <td>可以是"small", "medium", "large"，设置组件容器的尺寸</td>
        <td>"medium"</td>
      </tr>
      <tr>
        <td>handleLogin</td>
        <td>function</td>
        <td>处理登录操作的自定义函数。</td>
        <td> <pre style="font-weight: bold; font-size: 16px;">
function(formData) {
    console.log("Default login handler. Logging in with username:", formData.username, "email:", formData.email, "and password:", formData.password);
    this.message = "Login successful";
}</pre>
        </td>
      </tr>
      <tr>
        <td>handleRegister</td>
        <td>function</td>
        <td>处理注册操作的自定义函数。</td>
        <td><pre style="font-weight: bold; font-size: 16px;">
function(formData) {
    console.log("Default register handler. Registering with username:", formData.username, "email:", formData.email, "and password:", formData.password);
    his.message = "Registration successful";
}
        </pre></td>
      </tr>
      <tr>
        <td>Loginsuccess</td>
        <td>function</td>
        <td>登录成功的回调函数</td>
        <td><pre style="font-weight: bold; font-size: 16px;">
function(formData) {
    console.log("Login successful with data:", formData);
}
        </pre></td>
      </tr>
      <tr>
        <td>Registsuccess</td>
        <td>function</td>
        <td>注册成功的回调函数</td>
        <td><pre style="font-weight: bold; font-size: 16px;">
function(formData) {
    console.log("Registration successful with data:", formData);
}
        </pre></td>
      </tr>
    </tbody>
  </table>
<hr>
  <h3>formData 数据结构</h3>
  <p>formData 是用于存储用户输入数据的对象，包含以下字段:</p>
  <ul>
    <li>username (String): 用户名</li>
    <li>email (String): 电子邮件地址</li>
    <li>password (String): 密码</li>
  </ul>
  <hr>
  <h3>方法</h3>
    <ul><li>submitForm(formData, formType):提交表单操作,会调用handelLogin或者handelRegister</li>
        <li>validateUsername(): 验证用户名格式。</li>
        <li>validatePassword(): 验证密码格式。</li>
    </ul> 
 <hr>
  
  <h3>示例</h3>
  <div style="margin-left: 30px; background-color: aliceblue; width: 500px; border-radius: 5px;">
   <MxaForm 
      formType="login"
      :handleLogin="customLoginHandler"
      :Loginsuccess="handleLoginSuccess"
      size="large"
    /> 
    <hr>
    <MxaForm 
      formType="register"
      :handleLogin="customregistHandler"
      :Loginsuccess="handleregistSuccess"
      size="large"
    /> 
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
  import MxaForm from '../Mxacomponents/MxaForm.vue'
  import MxadropDown from '../Mxacomponents/MxadropDown.vue'
  
  export default {
      components: {
      MxadropDown,
      MxaForm,
      },
  data() {
      return {
              codeLength: 0,
               code1: `
    <MxaForm 
      formType="login"
      :handleLogin="customLoginHandler"
      :Loginsuccess="handleLoginSuccess"
      size="large"
    /> 
    <MxaForm 
      formType="register"
      :handleLogin="customregistHandler"
      :Loginsuccess="handleregistSuccess"
      size="large"
    /> 
  `
  
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