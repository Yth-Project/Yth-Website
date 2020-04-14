<template>
  <div class="contactPage">
    <h1>联系我们</h1>
    <p>{{msg}}</p>
    <!-- <navBar :parentMessage="parentMessage"></navBar> -->
  </div>
</template>

<script>
// import navBar from '@/components/navBar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // parentMessage:'6'
    }
  },
  components:{
    // navBar
  },
  created(){
    // this.parentMessage = this.$route.query.parentMessage
  },
}
</script>

<style>
</style>
<style lang="less" scoped>
.contactPage{
  
}
</style> 