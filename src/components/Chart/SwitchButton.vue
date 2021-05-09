<template>
  <div class="switch">
    <div
      v-for="item in types"
      :class="{ active: select === item.type }"
      :key="item.type"
      @click="changeType(item)"
    >
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['types', 'default'],
  data() {
    return {
      select: this.default,
    };
  },
  methods: {
    changeType(val) {
      this.select = val.type;
      this.$emit('change-type', val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.switch {
  display: flex;
  background: $bg-221223226;
  padding: 2px;
  border-radius: 5px;
  font-size: 12px;

  > div {
    transition: all 0.3s;
    border-radius: 5px;
    padding: 5px 7px;
  }
}

.active {
  background: #fff;
  font-weight: bold;
}
</style>
