<template>
  <footer>
    <ul>
      <li>
        <router-link to="/home">
          <img src="../assets/images/ft2.png">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category">
          <img src="../assets/images/ft2.png">
          <p>分类</p>
        </router-link>
      </li>
      <li>
        <img src="../assets/images/ft2.png">
        <p>购物车</p>
      </li>
      <li>
        <img src="../assets/images/ft2.png">
        <p>我的</p>
      </li>
    </ul>
  </footer>
</template>
<script>
  export default {
    name: 'myFooter'
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import url("../style/common.scss");
  footer{
    background-color: #000;
    height: 1rem;
    width: 7.5rem;
    color: #ffffff;
    position: fixed;
    bottom:0;
    left:0;
    ul{
      li{
        width: 25%;
        float: left;
        height: 1rem;
        line-height: 0.42rem;
        text-align: center;
        img{
          height: 0.4rem;
          width: 0.4rem;
        }
        p{
          font-size: 0.24rem;
          color: #fff;
        }
      }
    }
  }
</style>
