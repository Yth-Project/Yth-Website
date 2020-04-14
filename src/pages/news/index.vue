<template>
  <div class="newsPage">
     <div class="banner">
      <div class="msg">
        <h1>新闻资讯</h1>
        <p>全方位让您了解我们</p>
      </div>
    </div>
    <div class="main flex ju_sb">
      <div class="newBox" v-for="item in 3" :key="item">
        <h4>云天昊科技旗下“陈功了艺术工作室”</h4>
        <p class="tips">云天昊科技旗下“陈功了艺术工作室” 荣膺“2018中国新经济品牌价值百强企业”、“中国艺术培训最具影响力品牌”、“中国艺术培训行业杰出领军人物”。</p>
        <button>了解详情</button>
      </div>
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
  position: relative;
  background: #e5e5e5;
  height: 100%;
  .banner{
    height: 300px;
    text-align: center;
    position: relative;
    .msg{
      position: relative;
      top: 30%; 
      transform: translateY(-30%);
      h1{
        margin-bottom: 2.8rem;
      }
    }
  }
  .main{
    margin: 0 10rem;
    text-align: left;
    .newBox{
      width: 16.8rem;
      font-size: 8px;
      h4{
        margin-bottom: 15px;
      }
      button{
        margin-top: 20px;
        padding: 0 10px;
        border: 1px solid #A0A0A0;
      }
    }
  }
}
</style>