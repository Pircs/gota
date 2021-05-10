<template>
  <Layout>
    <div class="type-list">
      <SwitchButton
        :types="cateType"
        :default="cateType[0].type"
        @change-type="defaultCut = $event.type"
      />
      <div class="item" v-for="(item, index) in filterType" :key="item.name">
        <type-img :type="item.item" class-prefix="list" />
        <div class="del-this" @click="deleteType(index)">
          <span>❌</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import { mapActions, mapGetters } from 'vuex';
import TypeImg from '@/components/TypeImg.vue';
import SwitchButton from '@/components/Chart/SwitchButton.vue';

export default {
  components: { SwitchButton, TypeImg, Layout },
  data() {
    return {
      cateType: [
        { name: '支出', type: 0 },
        { name: '收入', type: 1 },
      ],
      defaultCut: 0,
    };
  },
  beforeMount() {
    this.initTypes();
  },
  computed: {
    ...mapGetters(['types']),

    filterType() {
      const temp = [];
      this.types.forEach((val, i) => {
        if (val.cut === this.defaultCut) temp.push({ index: i, item: val });
      });
      return temp;
    },
  },
  methods: {
    ...mapActions(['initTypes', 'deleteTypes']),
    deleteType(val) {
      this.deleteTypes(val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.type-list {
  padding: 1rem;

  .item {
    background: $bg-white;
    margin-bottom: 0.4rem;
    padding: 0.5rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .del-this {
      min-width: 2rem;
      min-height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
  }

  :last-child {
    margin-bottom: 0;
  }
}

::v-deep {
  .list-item {
    display: flex;
    align-items: center;
  }

  .switch {
    padding: 0.3rem;
    font-size: 14px;
    margin-bottom: 1rem;
    text-align: center;

    > div {
      padding: 0.7rem 0;
      min-width: 50%;
    }
  }
}
</style>
