<template>
  <div class="car">
    gouwuche
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
