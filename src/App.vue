<template>
  <div id="app">  
    <router-view/> 
  </div>
   
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less'; 
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:absolute;
  width:100%;
  height:100%;
  /* margin-top: 60px; */
  
   background-color:#de335e; 
}
</style>
