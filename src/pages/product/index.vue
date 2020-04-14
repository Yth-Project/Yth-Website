<template>
  <div class="productPage">
    <h1>产品中心</h1>
    <!-- <navBar :parentMessage="parentMessage"></navBar> -->
  </div>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  name: 'Product',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // parentMessage:'2'
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
.productPage{

}
</style>