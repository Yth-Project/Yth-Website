<template>
  <div class="hello">
    <router-link to="/home">主页</router-link>
    <router-link to="/product">产品中心</router-link>
    <router-link to="/news">新闻资讯</router-link>
    <router-link to="/partner">合作伙伴</router-link>
    <router-link to="/join">加入我们</router-link>
    <router-link to="/contact">联系我们</router-link>
    <router-view></router-view>   
    
  </div>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      parentMessage: "我是来自父组件的消息"
    }
  },
  components:{
    navBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
