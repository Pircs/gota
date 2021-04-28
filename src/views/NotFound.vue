<template>
  <div class="lose">
    <div class="tips">
      <icon class="icon" icon="heart-broken"/>
      <span>404 Not Found</span>
      <button class="backTo" @click="$router.back()">返回上一页</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.lose {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tips {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $default-color-light;

  > span {
    margin-top: 0.5rem;
    font-weight: 600;
  }

  > .icon {
    font-size: 3rem;
  }

  > .backTo {
    margin-top: 1rem;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid $default-color;
  }
}
</style>
