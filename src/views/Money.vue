<template>
  <Layout>
    <top-menu class="menu-top">
      <span @click="showDatePick = !showDatePick">
        <icon icon="calendar-alt" />
        {{ pickDateText }}
      </span>
    </top-menu>
    <div class="money">
      <NumPanel :in-come="monthIncome" :pay-out="monthPayOut" />

      <div v-for="item in recordList" :key="item.create">
        <div class="label">
          <span>{{ item.create }}</span>
          <div>
            <span class="income">收:{{ item.income }}￥</span>
            <span>支:{{ item.payout }}￥</span>
          </div>
        </div>
        <div class="items">
          <list-item :record-list="item.item" @click:item="onClickItem" />
        </div>
      </div>

      <div v-if="recordList.length <= 0" class="noRecord">
        <span>没有任何记录</span>
      </div>

      <div class="add-record">
        <router-link to="/money/add">
          <icon icon="plus" />
        </router-link>
      </div>
    </div>

    <van-action-sheet v-model="showDatePick" :round="false" duration="0.2">
      <date-picker
        type="year-month"
        :show-date-pick.sync="showDatePick"
        @getPickDate="getPickDate"
      />
    </van-action-sheet>
    <van-action-sheet
      v-model="itemAction.show"
      :actions="itemAction.actions"
      :round="false"
      @select="onSelectAction"
      cancel-text="取消"
    />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import NumPanel from '@/components/Money/NumPanel.vue';
import TopMenu from '@/components/TopMenu.vue';
import ListItem from '@/components/Money/ListItem.vue';
import DatePicker from '@/components/DatePicker.vue';
import dayjs from 'dayjs';
import getRecordList from '@/lib/sortRecord';
import { mapActions } from 'vuex';

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
      datePick: dayjs().format('YYYY-MM'),
      itemAction: {
        show: false,
        actions: [{ name: '删除', color: '#ee0a24' }, { name: '编辑' }],
        select: null,
      },
    };
  },
  computed: {
    pickDateText() {
      let month = dayjs(new Date(this.datePick)).month() + 1;
      if (month < 10) {
        month = `0${month}`;
      }
      return `${month}月`;
    },

    recordList() {
      return getRecordList(this.datePick);
    },

    monthIncome() {
      return this.getMonthMoney(1);
    },

    monthPayOut() {
      return this.getMonthMoney(0);
    },
  },
  methods: {
    ...mapActions(['deleteRecord']),
    getPickDate(event) {
      this.datePick = dayjs(event).format('YYYY-MM');
    },

    getMonthMoney(cut) {
      let count = 0;
      this.recordList.forEach((val) => {
        if (cut === 1) {
          count += val.income;
        }
        if (cut === 0) {
          count += val.payout;
        }
      });
      return count.toFixed(2);
    },

    onClickItem($event) {
      this.itemAction.select = $event;
      this.itemAction.show = true;
    },

    onSelectAction(item) {
      if (item.name === this.itemAction.actions[0].name) {
        this.deleteRecord(this.itemAction.select.create);
      }
      if (item.name === this.itemAction.actions[1].name) {
        this.$router.push({ name: 'addRecord', params: this.itemAction.select });
      }
      this.itemAction.show = false;
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
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  color: $bg-132133134;
}

.items {
  -webkit-box-shadow: 0 12px 17px 0 rgba(123, 123, 123, 0.05);
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

.noRecord {
  background: #fff;
  margin-top: 1.5rem;
  text-align: center;
  padding: 2rem 0;
  border-radius: 7px;
  -webkit-box-shadow: 0 12px 17px 0 rgba(123, 123, 123, 0.05);
}

::v-deep {
  .menu {
    justify-content: center;
  }
}
</style>
