<template>
  <div class="wrapper">
    <swiper :options="swiperOption" :not-next-tick="notNextTick">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: "0001",
        imgUrl: "https://m4.tuniucdn.com/fb2/t1/G6/M00/96/CF/Cii-TF6O0rGIWxuhABNiU4_TqZQAAMR9wDFnTwAE2Jr049.png"
      }, {
        id: "0002",
        imgUrl: "https://m3.tuniucdn.com/fb2/t1/G6/M00/4D/08/Cii-TF4gAh6IeM6pAAPkusOqXEMAALHJwD_ErAAA-TS97.jpeg"
      }, {
        id: "0003",
        imgUrl: "http://m.elongstatic.com/promotions/wireless/uploadImages/images/161217139090243.jpg"
      },
      ]
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