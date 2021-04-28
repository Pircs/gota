<template>
  <div class="items">
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
    <div class="item">
      <type-img class-prefix="list" />
      <span class="num">+666.00</span>
    </div>
  </div>
</template>

<script>
import TypeImg from '@/components/TypeImg.vue';

export default {
  components: { TypeImg },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.items {
  background: $bg-white;
  border-radius: 7px;
  padding: 0 1rem;

  > .item {
    padding: 1rem 0;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
    }
  }
}

.items :last-child {
  border-bottom: none;
}

::v-deep {
  .list-item {
    display: flex;
    align-items: center;

    > .tips {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
