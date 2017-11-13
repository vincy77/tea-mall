<template>
  <div id="home">
    <section class="banner">
      <my-slider></my-slider>
    </section>
    <section class="tip">
      <router-link to="">
        <p>优质严选</p>
      </router-link>
      <router-link to="">
        <p>优质严选</p>
      </router-link>
      <router-link to="">
        <p>优质严选</p>
      </router-link>
    </section>
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
        <div class="banner-category">绿茶</div>
        <img src="../../assets/images/ft2.png">
      </div>
      <div class="prime-pro-list">
        <ul class="pro-list">
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="prime-pro">
      <div class="prime-pro-banner">
        <div class="banner-category">红茶</div>
        <img src="../../assets/images/ft2.png">
      </div>
      <div class="prime-pro-list">
        <ul class="pro-list">
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="prime-pro">
      <div class="prime-pro-banner">
        <div class="banner-category">乌龙茶</div>
        <img src="../../assets/images/ft2.png">
      </div>
      <div class="prime-pro-list">
        <ul class="pro-list">
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
          <li class="list-item">
            <router-link to="">
              <div class="img-info">
                <img src="../../assets/images/ft2.png">
              </div>
              <div class="pro-info">
                <p class="title">标题</p>
                <p class="price">¥<span>600.00</span></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <no-result></no-result>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myFooter from '../../components/myFooter'
  import noResult from '../../components/noResult'
  import mySlider from '../../components/slider/mySlider'

  export default {
    data () {
      return {
        msg: 'Welcome to footer'
      }
    },
    mounted () {

    },
    methods: {

    },
    components: {myFooter, noResult, mySlider}
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import url("../../style/common.scss");
  #home{
    background-color: #fff;
    .banner{
      width: 7.5rem;
      height: 5rem;
      background-color: #000;
    }
    .tip{
      width: 7.5rem;
      height: 0.8rem;
      a{
        width: 33.33%;
        font-size: 0.28rem;
        text-align: center;
        float: left;
        line-height: 0.8rem;
      }
    }
    .main-pro{
      width: 7.5rem;
      height: 2.6rem;
      position: relative;
      .main-pro-item{
        position: absolute;
        img{
          border-radius: 0.2rem;
        }
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
      p:after{
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
        position: relative;
        .banner-category{
          position: absolute;
          height: 0.6rem;
          width: 2rem;
          left: 0;
          background-color: #000;
          color: #fff;
          font-size: .28rem;
          line-height: 0.6rem;
          border-radius: 0 10px 10px 0;
          top:.7rem;
          opacity: 0.7;
          padding-left: 0.2rem;
        }
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
            .img-info{
              height: 1.6rem;
              img{
                width: 2.4rem;
                height: 1.6rem;
              }
            }
            .pro-info{
              height: 0.8rem;
              padding: 0 0.05rem;
              .title{
                font-size: 0.28rem;
              }
              .price{
                font-size: 0.3rem;
                color: red;
                span{
                  font-size: 0.24rem;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
