<template>
  <div>
    <top-menu>
      <div @click="backTo">🔙</div>
      <span>又买了?</span>
      <span>😂</span>
    </top-menu>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue';

export default {
  components: { TopMenu },
  data() {
    return {};
  },
  methods: {
    backTo() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .menu {
    justify-content: space-between;
  }
}
</style>
