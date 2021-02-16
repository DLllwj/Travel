<template>
  <div class="icons">
    <div class="icon" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
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