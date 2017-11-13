<template>
  <div class="category">
    <search-bar></search-bar>
    <section class="banner">

    </section>
    <section class="all-category">
      <ul>
        <li>
          <router-link to="">
            <img src="../../assets/images/ft2.png">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/ft2.png">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/ft2.png">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/ft2.png">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/ft2.png">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/ft2.png">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/ft2.png">
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../assets/images/ft2.png">
          </router-link>
        </li>
      </ul>

    </section>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myFooter from '../../components/myFooter'
  import searchBar from '../../components/searchBar'

  export default {
    data () {
      return {
        msg: 'Welcome to footer'
      }
    },
    components: {myFooter, searchBar}
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  @import url("../../style/common.scss");
  .category{
    .banner{
      width: 7.5rem;
      height: 3rem;
      background-color: black;
    }
    .all-category{
      padding: 0.3rem;
      overflow-y: auto;
      ul{
        width: 7.5rem;
        li{
          float: left;
          height: 3.3rem;
          width: 3.3rem;
          margin: 0 0.3rem 0.3rem 0;
          img{

          }
        }
      }
    }
  }
</style>
