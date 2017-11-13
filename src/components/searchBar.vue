<template>
  <div class="search">
    <section class="search-bar">
      <i class="iconfont">&#xe753;</i>
      <input placeholder="轻输入要搜索的关键字">
    </section>
  </div>
</template>
<script></script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  .search{
    padding-top: 1rem;
    .search-bar{
      height: 1rem;
      width: 7.5rem;
      background-color: #ffffff;
      position: fixed;
      top:0;
      left: 0;
      .iconfont{
        font-size: 0.46rem;
        position: absolute;
        top: 0.26rem;
        left: 0.5rem;
        color: #999;
      }
      input{
        height: 0.8rem;
        width: 5rem;
        padding: 0.1rem;
        position: absolute;
        top: 0.1rem;
        left: 1rem;
        outline: none;
        font-size: .28rem;
      }
    }
  }

</style>
