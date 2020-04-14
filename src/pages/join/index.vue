<template>
  <div class="joinPage">
      <h1>加入我们</h1>
      <p>{{msg}}</p>
      <navBar :parentMessage="parentMessage"></navBar>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  name: 'Join',
  data () {
    return {
      msg: '加入我们',
      parentMessage:'5'
    }
  },
  components:{
    navBar
  },
}
</script>

<style>
</style>
<style lang="less" scoped>
.joinPage{
  
}
</style>