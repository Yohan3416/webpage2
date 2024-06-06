<template>
  <div class="navbar">
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      @select="handleSelect"
    >
    <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/guide">指南</el-menu-item>
      <el-menu-item index="/tool">组件</el-menu-item>
      <el-menu-item index="/other">其他</el-menu-item>
    </el-menu>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const activeIndex = ref(localStorage.getItem('activeIndex') || '')
const router = useRouter()

const handleSelect = (key) => {
  activeIndex.value = key
  localStorage.setItem('activeIndex', key)
  router.push(key)
}
onMounted(() => {
    router.push(activeIndex.value)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
</style>

