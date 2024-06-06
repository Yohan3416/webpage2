 <template>
  <div class="left-nav">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="selectedItem1"
          text-color="#fff"
          @select="handleSelect"
          style="width: 150px;height: 1000px;"
        >
          <el-menu-item index="/tool/button">MxaButton</el-menu-item>

          <el-menu-item index="/tool/form">MxaForm</el-menu-item>
          
          <el-menu-item index="/tool/nav">MxaNav</el-menu-item>
          
          <el-menu-item index="/tool/switch">MxaSwitch</el-menu-item>

          <el-menu-item index="/tool/serachbox">MxaSearchBox</el-menu-item>

          <el-menu-item index="/tool/usercard">MxauserCard</el-menu-item>

          <el-menu-item index="/tool/dropDown">MxadropDown</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedItem1 = ref(localStorage.getItem('selectedItem1') || '/tool/button')

const handleSelect = (key) => {
  selectedItem1.value = key
  localStorage.setItem('selectedItem1', key)
  router.push(key)
}

onMounted(() => {
  router.push(selectedItem1.value)
})
</script>

<style scoped>
.left-nav {
  position: fixed;
  top: 58px;
  left: 0px;
}
</style>  