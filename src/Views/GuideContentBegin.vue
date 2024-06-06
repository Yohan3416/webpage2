<template>
    <div class="content">
        <div class="decorative-icons">&#128279;</div>
        <a href="https://yohan3416.github.io/mxa-ui/" target="_blank">快速开始</a>
    </div>       
  </template>
  
  <script>
  export default {
    data() {
      return {}
    },
  }
  </script>
  
  <style scoped>
 .content{
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 1000px;
  top: 58px;
  left: 150px;
  overflow: auto;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* 垂直居中内容 */
  background-image: url(https://ts1.cn.mm.bing.net/th/id/R-C.218d8446002ac17ae7f46a5e72148b4c?rik=zbf%2bdDsTZFKqVA&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f016c8e565bd50632f8759647a7eba1.png&ehk=pLeQWUPS6%2bnh%2fGzGqMKWtAS2XHs6hgLKonKbMWgLrIE%3d&risl=&pid=ImgRaw&r=0);
  background-size: cover;
      background-position: 10% 65%; 
      background-repeat: no-repeat; 
}

a {
  display: inline-block;
  padding: 15px 30px;
  background-color: hsl(274, 93%, 48%);
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 24px;
  border: 2px solid #2980b9;
  margin-top: 20px;
  transition: background-color 0.3s;
}

a:hover {
  background-color: #2980b9;
}

.decorative-icons {
  font-size: 50px;
  margin-bottom: 20px; /* 将图标与下面的链接标签间隔开 */
}
  </style>