<template>
  <div>
    <div class="title">旅行攻略</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
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
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.title {
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