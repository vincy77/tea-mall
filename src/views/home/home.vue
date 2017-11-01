<template>
  <div id="home">
    <section class="banner">

    </section>
    <section class="tip"></section>
    <section class="main-pro">
      <div class="main-pro-item main-pro-item1">
        <img src="../../assets/images/ft2.png">
      </div>
      <div class="main-pro-item main-pro-item2">
        <img src="../../assets/images/ft2.png">
      </div>
      <div class="main-pro-item main-pro-item3">
        <img src="../../assets/images/ft2.png">
      </div>
      <div class="main-pro-item main-pro-item4">
        <img src="../../assets/images/ft2.png">
      </div>
    </section>
    <section class="prime-pro-title">
      <p>商城精选</p>
    </section>
    <section class="prime-pro">
      <div class="prime-pro-banner">
        <img src="../../assets/images/ft2.png">
      </div>
      <div class="prime-pro-list">
        <ul class="pro-list">
          <li class="list-item">
            <img src="../../assets/images/ft2.png">
          </li>
          <li class="list-item">
            <img src="../../assets/images/ft2.png">
          </li>
          <li class="list-item">
            <img src="../../assets/images/ft2.png">
          </li>
          <li class="list-item">
            <img src="../../assets/images/ft2.png">
          </li>
        </ul>
      </div>
    </section>
    <section class="prime-pro">
      <div class="prime-pro-banner">
        <img src="../../assets/images/ft2.png">
      </div>
      <div class="prime-pro-list">
        <ul class="pro-list">
          <li class="list-item">
            <img src="../../assets/images/ft2.png">
          </li>
          <li class="list-item">
            <img src="../../assets/images/ft2.png">
          </li>
          <li class="list-item">
            <img src="../../assets/images/ft2.png">
          </li>
          <li class="list-item">
            <img src="../../assets/images/ft2.png">
          </li>
        </ul>
      </div>
    </section>
    <section class="no-pro">
      <p>没有更多商品了～</p>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myFooter from '../../components/myFooter'

  export default {
    data () {
      return {
        msg: 'Welcome to footer'
      }
    },
    components: {myFooter}
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import url("../../style/common.scss");
  #home{
    background-color: #fff;
    margin-bottom: 1.2rem;
    .banner{
      width: 7.5rem;
      height: 3rem;
      background-color: black;
    }
    .tip{
      width: 7.5rem;
      height: 0.8rem;
    }
    .main-pro{
      width: 7.5rem;
      height: 2.6rem;
      position: relative;
      .main-pro-item{
        position: absolute;
      }
      .main-pro-item1{
        left: 0.1rem;
        top:0;
        border-radius: 5px;
        height: 2.6rem;
        width: 3.6rem;
      }
      .main-pro-item2{
        left: 3.8rem;
        top:0;
        height: 1.25rem;
        width: 3.6rem;
      }
      .main-pro-item3{
        left: 3.8rem;
        top:1.35rem;
        height: 1.25rem;
        width: 1.75rem;
      }
      .main-pro-item4{
        left: 5.65rem;
        top:1.35rem;
        height: 1.25rem;
        width: 1.75rem;
      }
    }
    .prime-pro-title{
      height: 0.8rem;
      width: 7.5rem;
      line-height: 0.8rem;
      p{
        font-size: 0.3rem;
        text-align: center;
        position: relative;
      }
      p:before{
        content: '';
        position: absolute;
        height: 0.01rem;
        width: 2rem;
        background-color: #ddd;
        top:0.4rem;
        left: 1rem;
      }
      p:aft2er{
        content: '';
        position: absolute;
        height: 0.01rem;
        width: 2rem;
        background-color: #ddd;
        top:0.4rem;
        left: 4.5rem;
      }
    }
    .prime-pro{
      .prime-pro-banner{
        height: 2rem;
        width: 7.5rem;
      }
      .prime-pro-list{
        height: 2.8rem;
        width: 7.5rem;
        background-color: #F5F5F5;
        .pro-list{
          white-space: nowrap;
          height: 3rem;
          overflow-x: scroll;
          .list-item{
            background-color: #ffffff;
            height: 2.4rem;
            width: 2.4rem;
            display: inline-block;
            margin: 0.2rem -0.2rem 0.2rem 0;
          }
        }
      }
    }
  }
  .no-pro{
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #F5F5F5;
    text-align: center;
    p{
      font-size: 0.28rem;
      position: relative;
    }
    p:before{
      position: absolute;
      content: '';
      height: 0.02rem;
      width: 1.5rem;
      background-color: #ddd;
      left: 1rem;
      top: 0.28rem;
    }
    p:after{
      position: absolute;
      content: '';
      height: 0.02rem;
      width: 1.5rem;
      background-color: #ddd;
      left: 5rem;
      top: 0.28rem;
    }
  }
</style>
