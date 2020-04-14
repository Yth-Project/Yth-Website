<template>
  <div class="homePage">
    <div class="banner">
      <div class="msg">
        <h1>健康生活小管家 / 健康生活分享家 / 健康生活创想家</h1>
        <p>{{msg}}</p>
      </div>
      <div class="selTab">
        <ul class="flex ju_sb">
          <li><img src="../../assets/logo.png" alt=""><p>关于我们</p></li>
          <li><img src="../../assets/logo.png" alt=""><p>使命与愿景</p></li>
          <li><img src="../../assets/logo.png" alt=""><p>发展历程</p></li>
          <li><img src="../../assets/logo.png" alt=""><p>未来研究院</p></li>
        </ul>
      </div>
    </div>
    <div class="homeMian">
      <div class="join">
        <h1>加入我们</h1>
      </div>
      <div class="hz">
        <h1>合作伙伴</h1>
      </div>
    </div>
    <Footer :fId="fId"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer'
export default {
  name: 'Home',
  data () {
    return {
      msg: '云天昊科技 - 用科技和创新，让生命更精彩！',
      fId:'1'
    }
  },
  components:{
    Footer
  },
  created(){
    this.parentMessage = this.$route.query.parentMessage
  },
  methods:{
  }
}
</script>

<style lang="less">
//修改组件样式
.homePage{
}
</style>
<style lang="less" scoped>
.homePage{
  .banner{
    height: 500px;
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
    .selTab{
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      img{
        width: 142px;
        height: 80px;
        border: 1px solid #000;
        margin: 0 20px;
      }
      li{
        position: relative;
      }
      p{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
  .homeMian{
    background-color:#fff;
    height: 500px;
  }
}
</style>