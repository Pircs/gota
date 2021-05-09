<template>
  <div class="budget">
    <div class="item">
      <div>
        <span>收入</span>
        <span>{{ budget.income }}</span>
      </div>
      <div>
        <span>交易数</span>
        <span>{{ budget.avol }}</span>
      </div>
    </div>
    <div class="item">
      <div>
        <span>支出</span>
        <span>{{ budget.payout }}</span>
      </div>
      <div>
        <span>天</span>
        <span>{{ budget.days }}</span>
      </div>
    </div>
    <div class="item">
      <div>
        <span>结余</span>
        <span>{{ (budget.income - budget.payout).toFixed(2) }}</span>
      </div>
      <div>
        <span>日均支出</span>
        <span>{{ equalDays }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['record'],
  data() {
    return {};
  },
  computed: {
    budget() {
      let income = 0;
      let payout = 0;
      let days = 0;
      let avol = 0;
      this.record.forEach((val) => {
        days += 1;
        income += val.income;
        payout += val.payout;
        avol += val.item.length;
      });
      this.$emit('update:income', income);
      return {
        days,
        income: income.toFixed(2) - 0,
        payout: payout.toFixed(2) - 0,
        avol,
      };
    },
    equalDays() {
      if (this.budget.days === 0) {
        return 0;
      }
      return (this.budget.payout / this.budget.days).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.budget {
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
  margin-bottom: -0.7rem;

  > .item {
    > div {
      margin-bottom: 0.7rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      :first-child {
        font-size: 12px;
        margin-bottom: 0.3rem;
        color: $bg-132133134;
      }
    }
  }
}
</style>
