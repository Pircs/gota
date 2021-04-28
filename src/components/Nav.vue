<template>
  <div class="nav">
    <router-link to="/money" active-class="active">
      <icon icon="wallet"></icon>
    </router-link>

    <router-link to="/chart" active-class="active">
      <icon icon="chart-pie"></icon>
    </router-link>

    <router-link to="/setting" active-class="active">
      <icon icon="cog"></icon>
    </router-link>
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

.nav {
  background: $bg-white;
  border-top: 1px solid $border-color;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: $default-color-light;
  transition: all 0.3s;

  > a {
    text-align: center;
    flex: 1;
  }
}

.active {
  color: $default-color;
}
</style>
