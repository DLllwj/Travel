<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: "//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",
          title: "故宫",
          desc: "世界五大宫之首，穿越与您近在咫尺"
        },
        {
          id: "0002",
          imgUrl: "//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",
          title: "故宫",
          desc: "世界五大宫之首，穿越与您近在咫尺"
        },
        {
          id: "0003",
          imgUrl: "//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",
          title: "故宫",
          desc: "世界五大宫之首，穿越与您近在咫尺"
        },
        {
          id: "0004",
          imgUrl: "//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg",
          title: "故宫",
          desc: "世界五大宫之首，穿越与您近在咫尺"
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  .item-img-wrapper {
    .item-img {
      width: 100%;
      height: 180px;
    }
  }

  .item-info {
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-height: 0.4rem;
      color: gray;
    }
  }
}
</style>