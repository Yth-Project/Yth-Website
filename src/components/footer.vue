<template>
    <div class="footer">
      <div class="main">
          <div class="msg">
        <ul>
          <li>
            <h5>总部地址</h5>
            <p>东莞市松山湖科汇路1号 中国科学院</p>
          </li>
          <li>
              <h5>深圳地址</h5>
            <p>深圳市福田区八卦三路深药大厦325</p>
          </li>
          <li>
              <h5>联系电话</h5>
            <p>0755-25117477</p>
            </li>
          <li>
            <h5>企业邮件</h5>
            <p>info@cloud-100.com</p>
            </li>
          <li><img src="../assets/logo.png" class="codeImg"><p>云天昊科技有限公司</p></li>
        </ul>
      </div>
      <div class="copy flex al_ct ju_sb">
        <p>Copyright &copy; 2020 All Rights Reserved，Cloud Sky Technology Co., Ltd.</p>
        <p>云天昊科技有限公司，版权所有！</p>
      </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{

        }
    },
    props:{
        fId:{
            type:String,
            default:'',
            required:true
        }
    },
    created(){

    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
.footer{
    width: 100%;
    background: #e5e5e5;
    position: relative; 
    // bottom:0;
    .main{
        margin: 0 10rem;
        text-align: center;
    }
    h5{
        font-size: 14px;
        margin-bottom: 1.5rem;
    }
    p{
        font-size: 12px;
    }
    .msg{
      padding: 1.9rem 0;
      border-bottom: 1px solid #AAAAAA;
    }
    .msg ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      li{
        width: 20%;
      }
      .codeImg{
        height: 4rem;
        width: 4rem;
        border: 1px solid #000;
      }
    }
    .copy{
      padding: 1rem 5px;
    }
  }
</style>