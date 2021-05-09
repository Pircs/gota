<template>
  <div class="cate">
    <div class="img">{{ item.emoji }}</div>
    <div class="detail">
      <div class="info">
        <div>
          <span>{{ item.name }}</span>
          <span class="percent">{{ mScale }}%</span>
        </div>
        <span>{{ cut ? "" : "-" }}{{ item.value.toFixed(2) }} </span>
      </div>
      <div class="progress">
        <van-progress
          :show-pivot="false"
          :color="color"
          stroke-width="6px"
          :percentage="percentage"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'cut', 'income'],
  data() {
    return {};
  },
  computed: {
    mScale() {
      if (this.income <= 0) {
        return 100;
      }
      return ((this.item.value / this.income) * 100).toFixed(2);
    },
    color() {
      const colorList = ['#67C23A', '#409EFF', '#409EFF', '#F56C6C', '#F56C6C'];
      if (this.cut === 1) {
        colorList.reverse();
      }
      if (this.mScale <= 20) return colorList[0];
      if (this.mScale <= 50) return colorList[1];
      if (this.mScale <= 80) return colorList[2];
      if (this.mScale <= 99) return colorList[3];
      if (this.mScale >= 100) return colorList[4];
      return colorList[0];
    },
    percentage() {
      if (this.mScale > 100) {
        return 100;
      }
      return this.mScale;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.cate {
  display: flex;
  align-items: center;
  margin-top: 1rem;

  > .img {
    width: 2.5rem;
    height: 2.5rem;
    background: $bg-221223226;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.7rem;
  }

  > .detail {
    flex-grow: 1;

    > .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
  }
}

.percent {
  font-size: 12px;
  margin-left: 0.4rem;
  color: $bg-132133134;
}
</style>
