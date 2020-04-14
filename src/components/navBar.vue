<template>
    <div class="navTab">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgba(0,0,0,0)"
            text-color="#000"
            active-text-color="#ffd04b">
            <el-menu-item index="1">云天昊科技</el-menu-item>
            <el-menu-item index="2">产品中心</el-menu-item>
            <el-menu-item index="3">新闻资讯</el-menu-item>
            <!-- <el-menu-item index="4">合作伙伴</el-menu-item>
            <el-menu-item index="5">加入我们</el-menu-item> -->
            <el-menu-item index="6">联系我们</el-menu-item>
        </el-menu>  
        
    </div>
</template>
<script>
export default {
    name:'navBar',
    data(){
        return {
            msg:[
                {name: "云天昊科技",index: 1},
                {name: "产品中心",index: 2},
                {name: "新闻资讯",index: 3},
                {name: "合作伙伴",index: 4},
                {name: "加入我们",index: 5},
                {name: "联系我们",index: 6},
            ],
            activeIndex: '1',
        }
    },
    props: {
        parentMessage: {
            type: String,
            default: '默认显示的信息',
            require: true 
        }
    },
    created(){
        this.activeIndex = this.parentMessage
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        var keyPath = keyPath.toString()

        switch (keyPath){
            case '1':
                this.$router.push({ path: '/', query: { parentMessage: keyPath }})
                break;
            case '2':
                this.$router.push({ path: '/product', query: { parentMessage: keyPath }})
                break;
            case '3':
                this.$router.push({ path: '/news', query: { parentMessage: keyPath }})
                break;
            case '4':
                this.$router.push({ path: '/partner', query: { parentMessage: keyPath }})
                break;
            case '5':
                this.$router.push({ path: '/join', query: { parentMessage: keyPath }})
                break;
            case '6':
                this.$router.push({ path: '/contact', query: { parentMessage: keyPath }})
                break;
            default :
                console.log('路径出错')
                break;
        }
      }
    }
}
</script>
<style lang="less" scoped>
.navTab{
    background: none;
    margin-left: 10rem;
}
</style>