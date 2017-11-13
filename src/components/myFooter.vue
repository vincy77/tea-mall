<template>
  <div class="my-footer">
    <footer>
      <ul>
        <li>
          <router-link to="/home">
            <i class="iconfont">&#xe751;</i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/category">
            <i class="iconfont">&#xe78e;</i>
            <p>分类</p>
          </router-link>
        </li>
        <li @click = "gotoAddress('/car')">
          <i class="iconfont">&#xe73d;</i>
          <p>购物车</p>
        </li>
        <li @click = "gotoAddress('/uc')">
          <i class="iconfont">&#xe75e;</i>
          <p>我的</p>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    created () {

    },
    mounted () {

    },
    computed: {

    },
    methods: {
      gotoAddress (path) {
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import url("../style/common.scss");
  .my-footer{
    padding-bottom: .96rem;
  }
  footer{
    background-color: #000;
    height: .96rem;
    width: 7.5rem;
    color: #ffffff;
    position: fixed;
    bottom:0;
    left:0;
    ul{
      li{
        width: 25%;
        float: left;
        height: .96rem;
        line-height: 0.4rem;
        text-align: center;
        .iconfont{
          font-size: 0.4rem;
          color: #fff;
        }
        p{
          font-size: 0.24rem;
          color: #fff;
        }
      }
    }
  }
</style>
