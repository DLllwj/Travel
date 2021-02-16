<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
    }
  },
  computed: {
    //轮播图开始显示的是第一页，全部加载完再显示
    showSwiper() {
      return this.list.length
    }
  }
}
</script>


<style lang="stylus" scoped>
img {
  width: 100%;
  height: 137px;
}

/* .wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
} */
</style>