<template>
  <div :class="{ [classPrefix + '-item']: classPrefix }">
    <div class="img"></div>
    <div class="tips">
      <span>零食</span>
      <span class="tip">吃啥吃啊</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['classPrefix'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgb(237 237 237);
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tip {
  font-size: 12px;
  color: rgb(187 189 191);
  margin-top: 2px;
}
</style>
