<template>
  <div>
    <div class="content">
      <slot/>
    </div>
    <Nav class="nav"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: { Nav },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.nav {
  height: 3.2rem;
}

.content {
  height: calc(100vh - 3.2rem);
  overflow: scroll;
  overflow-x: hidden;
}
</style>
