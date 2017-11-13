<template>
  <div id="container">
    <ul id="list">
      <li><a href="javascript:;"><img src="../assets/images/5.jpg" /></a></li>
      <li class="active"><a href="javascript:;"><img src="../assets/images/1.jpg" /></a></li>
      <li><a href="javascript:;"><img src="../assets/images/2.jpg" /></a></li>
      <li><a href="javascript:;"><img src="../assets/images/3.jpg" /></a></li>
      <li><a href="javascript:;"><img src="../assets/images/4.jpg" /></a></li>
      <li><a href="javascript:;"><img src="../assets/images/5.jpg" /></a></li>
      <li><a href="javascript:;"><img src="../assets/images/1.jpg" /></a></li>
    </ul>
    <div id="buttons">
      <span index="1" class="on"></span>
      <span index="2"></span>
      <span index="3"></span>
      <span index="4"></span>
      <span index="5"></span>
    </div>
    <a @click = "prevBanner()" href="javascript:;" id="prev" class="arrow">&lt;</a>
    <a @click = "nextBanner()"  href="javascript:;" id="next" class="arrow">&gt;</a>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        index: 1,
        container: '',
        list: '',
        buttons: '',
        liWidth: '',
        imgWidth: '',
        left: '',
        offset2: '',
        maxOffset: ''
      }
    },
    created () {

    },
    mounted () {
      this.container = document.getElementById('container')
      this.list = document.getElementById('list')
      // var prev = document.getElementById('prev')
      // var next = document.getElementById('next')
      this.buttons = document.getElementById('buttons').getElementsByTagName('span')
      // slider模块的宽度
      this.conWidth = this.container.clientWidth // offsetWidth;
      // 单个li标签的宽度
      this.liWidth = this.list.children[0].clientWidth
      // li标签下banner图片的宽度
      this.imgWidth = this.list.children[0].getElementsByTagName('img')[0].clientWidth
      // li在container中居中，左右偏移量
      this.left = (this.conWidth - this.liWidth) / 2
      // li在container中居中，左右实际偏移量（因为显示的第一个li前面会有最后一个li标签）
      this.offset2 = this.left - this.liWidth
      //
      this.maxOffset = 5 * this.liWidth - this.left
      this.list.style.left = this.offset2 + 'px'
    },
    computed: {

    },
    methods: {
      prevBanner () {
        this.index -= 1
        if (this.index < 1) {
          this.index = 5
        }
        this.buttonsShow()
        this.animate(this.liWidth)
      },
      nextBanner () {
        // 由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        this.index += 1
        if (this.index > 5) {
          this.index = 1
        }
        this.buttonsShow()
        this.animate(-this.liWidth)
      },
      buttonsShow () {
        // 这里需要清除之前的样式
        for (var i = 0; i < this.buttons.length; i++) {
          if (this.buttons[i].className === 'on') {
            this.buttons[i].className = ''
          }
        }
        // 数组从0开始，故index需要-1
        this.buttons[this.index - 1].className = 'on'
      },
      animate (offset) {
        // 获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        // 且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        console.log(this.list.children[this.index - 1])
        // list.children[index -1].addClass('active').siblings('li').removeClass('active');
        var li = this.list.children
        for (var i = 0; i < li.length; i++) {
          li[i].className = ''
        }
        li[this.index].className = 'active'
        var newLeft = parseInt(this.list.style.left) + offset
        this.list.style.left = newLeft + 'px'

        if (newLeft < -this.maxOffset) {
          console.log('aaa')
          this.list.style.left = this.offset2 + 'px'
        }
        if (newLeft > this.offset2) {
          console.log('bbb')
          this.list.style.left = -this.maxOffset + 'px'
        }
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import url("../style/common.scss");
  #container {
    position: relative;
    width: 7.5rem;
    height: 5rem;
    /*border: 3px solid #333;*/
    overflow: hidden;
  }

  #list {
    position: absolute;
    z-index: 1;
    width: 4200px;
    height: 5rem;
    li{
      float: left;
      width: 4rem;
      list-style: none;
      img{
        float: left;
        width: 3.5rem;
        height: 4rem;
        margin: 0.5rem 0.25rem;
        opacity: 0.5;
      }
    }
  }
  #buttons {
    position: absolute;
    left: 3rem;
    bottom: .5rem;
    z-index: 2;
    height: .2rem;
    width: 2rem;
    span{
      float: left;
      margin-right: .1rem;
      width: .2rem;
      height: .2rem;
      border: 1px solid #fff;
      border-radius: 50%;
      background: #333;
      cursor: pointer;
    }
    .on{
      background: orangered;
    }
  }
  .arrow {
    position: absolute;
    top: 2rem;
    z-index: 2;
    /*display: none;*/
    width: .8rem;
    height: .8rem;
    font-size: .36rem;
    font-weight: bold;
    line-height: .8rem;
    text-align: center;
    color: #fff;
    background-color: RGBA(0, 0, 0, .3);
    cursor: pointer;
  }

  .arrow:hover {
    /*background-color: RGBA(0, 0, 0, .7);*/
  }

  #container:hover .arrow {
    /*display: block;*/
  }

  #prev {
    left: 0;
  }

  #next {
    right: 0;
  }
  .active img{
    width: 4rem!important;
    height: 4.5rem!important;
    margin: .25rem 0!important;
    opacity: 1!important;
  }
</style>
