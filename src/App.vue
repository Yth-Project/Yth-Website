<template>
  <div id="app">
    <div class="header">
        <img src="./assets/logo.png">
        <navBar :parentMessage="parentMessage"></navBar>
        <div class="sel">
          <span>{{value}}</span>
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
    </div>
    <!-- <Footer :fId="fId"></Footer> -->
    <router-view/>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
// import Footer from '@/components/footer'
export default {
  name: 'App',
  data(){
    return{
      parentMessage:'1',
      options: [{
          value: '中文',
          label: '中文'
        }, {
          value: 'English',
          label: 'English'
        }],
        value: '中文',
        // fId:'1'
    }
  },
  components:{
    navBar,
    // Footer
  },
  created(){
    this.parentMessage = this.$route.query.parentMessage
  },
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .el-input__inner{
    background-color: rgba(0,0,0,0);
    border: none;
    width: 0;
  }
}
</style>
<style lang="less" scoped>
#app{
  width: 100%;
  position: relative;
  background: #E5E5E5;
  height: 100%;
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10rem;
    z-index: 100;
    img{
      height: 3rem;
      width: 3rem;
    }
  }
}
</style>
