<template>
  <el-container id="app">
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" 
        @select="handleSelect" background-color="#333" text-color="#a6d2ff" active-text-color="#f9dada">
          <el-menu-item index="1">
            <router-link to="/vritem">首页展示</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/classify">精选分类</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/funcMenu">功能</router-link>
            <!-- <a href="#" target="_blank">其他</a> -->
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main class="main">
        <router-view/>
      </el-main>

      <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
body{
  width: 100%;
  height: 100%;
}
body, section, a, span{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
.el-header, .el-footer{
  padding: 0;
  background-color: #333;
  color: #a6d2ff;
}
.el-main{
  height: 87vh;
  padding: 0;
}
.el-menu-item{
  padding: 0;
}
.el-menu-item a{
  padding: 20px 20px;
}
</style>
