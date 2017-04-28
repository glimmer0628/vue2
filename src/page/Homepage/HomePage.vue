<template>
  <div class="home">
    <div class="banner">
      <ul class="activeContainer">
        <li class="swiper">
          <swiper>
            <swiper-slide :key="index" v-for="(banner, index) in banners">
              <img :src="banner" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  data() {
    return {
      banners: ['./timg.jpg', './timg.jpg', './timg.jpg'],
      swiperOption: {
        autoplay: 2500,
        loop: true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style scoped lang="stylus">
.banner
  width: 100%
  height: 150px
  .activeContainer
    padding: 0
    margin: 0
    width: 100%
    height: 100%
    .swiper
      list-style: none
      img
        width: 100%
        height: 100%
</style>
