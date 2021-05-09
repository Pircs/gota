<template>
  <div class="panel">
    <span>收支盈余</span>
    <span class="num">{{ surplus }} <small>￥</small></span>
    <div class="type">
      <span>
        <icon class="down" icon="level-down-alt"/>
        {{ payOut }}
      </span>
      <span>
        <icon class="up" icon="level-up-alt"/>
        {{ inCome }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['inCome', 'payOut'],
  computed: {
    surplus() {
      const count = this.inCome - this.payOut;
      return count.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.panel {
  background: $bg-grad;
  border-radius: 7px;
  padding: 2rem;
  color: $bg-221223226;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0 0 20px #33333350;

  > .num {
    font-size: 2rem;
    font-weight: 600;
    margin: 0.5rem 0;

    > small {
      font-size: 0.5em;
      margin-left: -0.5em;
    }
  }

  > .type {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;

    > span {
      display: inline-block;
      flex: 1;

      > .down {
        color: $bg-red;
      }

      > .up {
        color: $bg-green;
      }
    }
  }
}
</style>
