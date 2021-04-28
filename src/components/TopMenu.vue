<template>
  <div class="menu">
    <slot/>
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

.menu {
  background: $bg-white;
  min-height: 2.6rem;
  width: 100%;
  border-bottom: 1px solid $border-color;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}
</style>
