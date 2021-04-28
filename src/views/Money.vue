<template>
  <Layout>
    <top-menu class="menu-top">
      <span>选择日期</span>
    </top-menu>
    <div class="money">
      <NumPanel/>
      <div class="label">
        <span>4月27日 今天</span>
        <span>收:6666.00</span>
        <span>支:2222.00</span>
      </div>
      <list-item/>
      <div class="add-record">
        <router-link to="/money/add">
          <icon icon="plus"/>
        </router-link>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import NumPanel from '@/components/Money/NumPanel.vue';
import TopMenu from '@/components/TopMenu.vue';
import ListItem from '@/components/Money/ListItem.vue';

export default {
  components: {
    ListItem, TopMenu, NumPanel, Layout,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.menu-top {
  position: sticky;
  top: 0;
}

.money {
  padding: 1rem;
}

.label {
  display: flex;
  margin-top: 2.2rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  color: $bg-132133134;
}

.add-record {
  position: absolute;
  bottom: 5rem;
  right: 2rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: $bg-grad;
  color: $bg-white;
  -webkit-box-shadow: 0 0 20px #33333350;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

::v-deep {
  .menu {
    justify-content: center;
  }
}
</style>
