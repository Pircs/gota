<template>
  <div class="items">
    <div class="item" v-for="(item, index) in recordList" :key="index" @click="onClickItem(item)">
      <type-img :type="item.type" :note="item.note" class-prefix="list"/>
      <span class="num" :class="{ redText: item.type.cut }">
        {{ item.type.cut ? "+" : "-" }}{{ item.num }}
      </span>
    </div>
  </div>
</template>

<script>
import TypeImg from '@/components/TypeImg.vue';

export default {
  components: { TypeImg },
  props: ['recordList'],
  data() {
    return {};
  },
  methods: {
    onClickItem(val) {
      this.$emit('click:item', val);
    },
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

.redText {
  color: #d75846;
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
