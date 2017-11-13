<template>
  <div class="my-slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" @click = "test('111')">
          <img src="../../assets/images/1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/3.jpg">
        </div>
      </div>
      <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
      <!--<div class="swiper-pagination"></div>-->

      <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->

      <!--&lt;!&ndash; 如果需要滚动条 &ndash;&gt;-->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data () {
      return {

      }
    },
    created () {

    },
    mounted () {
      var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', //
        loop: true,
        effect: 'coverflow',
        slidesPerView: '1' // slider容器能够同时显示的slides数量
      })
      console.log(mySwiper)
    },
    methods: {
      test: function (data) {
        console.log(data)
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import url("../../style/common.scss");
  // @import url("");
  .swiper-container {
    width: 7.5rem;
    height: 5rem;
    /*background: #fff;*/
  }

</style>
