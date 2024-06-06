<template>
  <div class="left-nav">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="selectedItem"
          text-color="#fff"
          @select="handleSelect"
          style="width: 150px; height: 1000px;"
        >
          <el-menu-item index="/guide/install">安装</el-menu-item>
          <el-menu-item index="/guide/begin">快速开始</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedItem = ref(localStorage.getItem('selectedItem') || '/guide/install')

const handleSelect = (key) => {
  selectedItem.value = key
  localStorage.setItem('selectedItem', key)
  router.push(key)
}

onMounted(() => {
  router.push(selectedItem.value)
})
</script>

<style scoped>
.left-nav {
  position: fixed;
  top: 58px;
  left: 0px;
}
</style>