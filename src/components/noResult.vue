<template>
  <section class="no-pro">
    <p>没有更多商品了～</p>
  </section>
</template>
<script>

</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
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
