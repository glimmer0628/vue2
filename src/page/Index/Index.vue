<template>
  <div class="home">
    <router-view></router-view>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from '../../components/Nav/Nav.vue';
export default {
  components: {
    navBar
  }
};
</script>

<style lang="stylus">
.home
  width: 100%
</style>
