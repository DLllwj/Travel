<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店"
        },
        {
          id: "0002",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          desc: "机票"
        },
        {
          id: "0003",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          desc: "火车票"
        },
        {
          id: "0004",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票"
        },
        {
          id: "0005",
          imgUrl: "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          desc: "海外酒店"
        },
        {
          id: "0006",
          imgUrl: "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
          desc: "特价机票"
        },
        {
          id: "0007",
          imgUrl: "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
          desc: "汽车票船票"
        },
        {
          id: "0008",
          imgUrl: "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
          desc: "攻略"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top: 0.1rem;

  .icon {
    float: left;
    width: 25%;
    padding-bottom: 25%;
    position: relative;
    height: 0;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: #333;
      text-align: center;
    }
  }
}
</style>