<template>
  <Layout>
    <top-menu class="menu-top">
      <span @click="showDatePick = !showDatePick">
        <icon icon="calendar-alt"/>
        {{ pickDateText }}
      </span>
    </top-menu>
    <div class="money">
      <NumPanel/>
      <div class="label">
        <span>今日</span>
        <div>
          <span class="income">收:{{ income }}￥</span>
          <span>支:{{ payout }}￥</span>
        </div>
      </div>
      <list-item :record-list="this.recordList"/>
      <div class="add-record">
        <router-link to="/money/add">
          <icon icon="plus"/>
        </router-link>
      </div>
    </div>
    <date-picker :show-date-pick.sync="showDatePick" type="year-month" @getPickDate="getPickDate"/>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import NumPanel from '@/components/Money/NumPanel.vue';
import TopMenu from '@/components/TopMenu.vue';
import ListItem from '@/components/Money/ListItem.vue';
import { mapGetters, mapActions } from 'vuex';
import DatePicker from '@/components/DatePicker.vue';
import dayjs from 'dayjs';

export default {
  components: {
    DatePicker,
    ListItem,
    TopMenu,
    NumPanel,
    Layout,
  },
  data() {
    return {
      showDatePick: false,
      datePick: new Date(),
    };
  },
  beforeMount() {
    this.initRecordList();
    this.initNumPad();
  },
  computed: {
    ...mapGetters(['recordList']),
    income() {
      return this.initNumPad(1);
    },
    payout() {
      return this.initNumPad(0);
    },
    pickDateText() {
      let month = dayjs().month() + 1;
      if (month < 10) {
        month = `0${month}`;
      }
      return `${month}月`;
    },
  },
  methods: {
    ...mapActions(['initRecordList']),

    getPickDate(event) {
      this.datePick = event;
    },

    initNumPad(cut) {
      let temp = 0;
      this.recordList.forEach((val) => {
        if (val.type.cut === cut) {
          temp += parseFloat(val.num);
        }
      });
      return temp;
    },
  },
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
  position: fixed;
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

.income {
  color: $bg-red;
  margin-right: 1rem;
}

::v-deep {
  .menu {
    justify-content: center;
  }
}
</style>
