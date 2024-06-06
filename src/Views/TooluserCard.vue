<template>
    <div class="content">
      <h2>MxaSearchBox</h2>
  
  <h3>Props</h3>
  <table border="1">
  <thead>
    <tr>
      <th>Props</th>
      <th>类型</th>
      <th>默认值</th>
      <th>必填</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>userId</td>
      <td>String</td>
      <td>-</td>
      <td>是</td>
      <td>用户ID</td>
    </tr>
    <tr>
      <td>username</td>
      <td>String</td>
      <td>-</td>
      <td>是</td>
      <td>用户名</td>
    </tr>
    <tr>
      <td>avatarUrl</td>
      <td>String</td>
      <td>-</td>
      <td>是</td>
      <td>头像URL</td>
    </tr>
    <tr>
      <td>backgroundUrl</td>
      <td>String</td>
      <td>-</td>
      <td>是</td>
      <td>卡片背景图片URL</td>
    </tr>
    <tr>
      <td>isRoundAvatar</td>
      <td>Boolean</td>
      <td>true</td>
      <td>否</td>
      <td>是否使用圆形头像</td>
    </tr>
    <tr>
      <td>followCount</td>
      <td>Number</td>
      <td>0</td>
      <td>否</td>
      <td>关注数量</td>
    </tr>
    <tr>
      <td>fanCount</td>
      <td>Number</td>
      <td>0</td>
      <td>否</td>
      <td>粉丝数量</td>
    </tr>
    <tr>
      <td>userPageUrl</td>
      <td>String</td>
      <td>-</td>
      <td>是</td>
      <td>用户主页URL</td>
    </tr>
    <tr>
      <td>isFollowing</td>
      <td>Boolean</td>
      <td>false</td>
      <td>否</td>
      <td>是否已关注该用户</td>
    </tr>
  </tbody>
</table>
  <hr>
  <h3>事件</h3>
  <ul>
    <li>handleFollow: 当用户点击关注或取消关注按钮时触发该事件，参数为更新后的isFollowing属性值。</li>
    <li>handleMessage: 当用户点击发送消息按钮时触发该事件，参数为用户ID。</li>
  </ul>
<hr>
  <h3>描述</h3>
  <p>用户卡片（MxauserCard）组件用于显示用户信息，包括用户的头像、用户名、ID、关注数、粉丝数等信息，并提供关注/取消关注和发送消息的交互功能。</p>
<hr>
  <h3>示例</h3>
  
  <div style="margin-left: 30px; background-color: aliceblue; width: 370px; border-radius: 5px;">
<div style="display: flex;">
  <div style="margin-bottom: 20px;">
    <MxauserCard
    :userId="'12345'"
    :username="'John Doe'"
    :avatarUrl="'https://s3.cn.bing.net/th?id=OJ.aVH5iUvDVS002Q&pid=msnjvdata'"
    :backgroundUrl="'https://s3.cn.bing.net/th?id=OJ.aVH5iUvDVS002Q&pid=msnjvdata'"
    :userPageUrl="'/user/12345'"
    :isFollowing="true"
    :followCount="100"
    :fanCount="200"
    v-on:handleFollow="(isFollowing) => {console.log('当前关注状态：',isFollowing)}"
    v-on:handleMessage="(userId) => {console.log('给用户',userId,'发消息')}"
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
  import MxadropDown from '../Mxacomponents/MxadropDown.vue'
  import MxauserCard from '../Mxacomponents/MxauserCard.vue'
  export default {
      components: {
        MxadropDown,
        MxauserCard,
      },
  data() {
      return {
              codeLength: 0,
               code1: `
  <MxauserCard
    :userId="'12345'"
    :username="'John Doe'"
    :avatarUrl="'https://s3.cn.bing.net/th?id=OJ.aVH5iUvDVS002Q&pid=msnjvdata'"
    :backgroundUrl="'https://s3.cn.bing.net/th?id=OJ.aVH5iUvDVS002Q&pid=msnjvdata'"
    :userPageUrl="'/user/12345'"
    :isFollowing="true"
    :followCount="100"
    :fanCount="200"
    v-on:handleFollow="(isFollowing) => {console.log('当前关注状态：',isFollowing)}"
    v-on:handleMessage="(userId) => {console.log('给用户',userId,'发消息')}"
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