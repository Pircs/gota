<template>
  <Layout>
    <div class="head">
      <SwitchButton :types="cateType" :default="cateType[0].type" @change-type="changeCate" />
      <SwitchButton :types="dateType" :default="dateType[0].type" @change-type="changeDate" />
    </div>

    <div class="panel">
      <span>收支分析</span>
      <Budget :record="this.recordList" @update:income="income = $event" />
    </div>

    <div class="panel">
      <span>{{ defaultCut ? "收入" : "支出" }}占比TOP5</span>
      <PieChart :echarts="totalFilter" class="charts" />
    </div>

    <div class="panel">
      <span>{{ defaultCut ? "收入" : "支出" }}类目排行</span>
      <cate-item
        v-for="(item, index) in totalFilter"
        :income="income"
        :item="item"
        :cut="defaultCut"
        :key="index"
      />
      <div v-if="totalFilter.length === 0" class="tips">
        <span>零收入的一个月</span>
      </div>
    </div>

    <div></div>
    <div></div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import SwitchButton from '@/components/Chart/SwitchButton.vue';
import Budget from '@/components/Chart/Budget.vue';
import PieChart from '@/components/Chart/PieChart.vue';
import CateItem from '@/components/Chart/CateItem.vue';
import getRecordList from '@/lib/sortRecord';
import dayjs from 'dayjs';
import { totalType } from '@/lib/chartTools';

export default {
  components: {
    CateItem,
    PieChart,
    Budget,
    SwitchButton,
    Layout,
  },
  data() {
    return {
      cateType: [
        { name: '支出', type: 0 },
        { name: '收入', type: 1 },
      ],
      defaultCut: 0,

      dateType: [
        { name: '上月', type: 'month' },
        { name: '本年', type: 'year' },
      ],
      defaultDate: 'month',
      income: 0,
    };
  },
  methods: {
    changeCate($event) {
      this.defaultCut = $event.type;
    },
    changeDate($event) {
      this.defaultDate = $event.type;
    },
  },
  computed: {
    recordList() {
      return getRecordList(dayjs().subtract(1, 'month').format('YYYY-MM'), this.defaultDate);
    },

    cutFilter() {
      const typeList = [];
      this.recordList.forEach((item) => {
        item.item.map((val) => {
          if (val.type.cut === this.defaultCut) {
            typeList.push(val);
          }
          return val;
        });
        return item;
      });
      return typeList;
    },

    totalFilter() {
      return totalType(this.cutFilter);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.head {
  background: $bg-white;
  border-bottom: 1px solid $bg-221223226;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 20;
}

.panel {
  margin: 1rem;
  background: $bg-white;
  border-radius: 7px;
  padding: 1rem;
  -webkit-box-shadow: 0 12px 17px 0 rgba(123, 123, 123, 0.05);

  > span {
    font-weight: 600;
  }
}

.charts {
  margin-top: 1rem;
  height: 9rem;
}

.tips {
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  color: $bg-132133134;
}
</style>
