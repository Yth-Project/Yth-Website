<template>
  <div class="newsPage">
    <div class="header">
      <h1>新闻资讯</h1>
      <p>全方位让您了解我们</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created(){
  },
  mounted() {
    
  },
  components:{
  },
  methods:{

  }
}
</script>

<style>
</style>
<style lang="less" scoped>
.newsPage{
  .header{
    height: 20rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  
}
</style>