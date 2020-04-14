<template>
  <div class="parPage">
    <h1>合作伙伴</h1>
    <navBar :parentMessage="parentMessage"></navBar>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      parentMessage:'4'
    }
  },
  created(){
    this.parentMessage = this.$route.query.parentMessage
  },
  components:{
    navBar
  }
}
</script>

<style>
</style>
<style lang="less" scoped>
.parPage{
  
}
</style>