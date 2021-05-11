<template>
  <div class="date-picker">
    <van-datetime-picker
      v-model="currentDate"
      :type="type"
      :min-date="minDate"
      :max-date="maxDate"
      item-height="30"
      @confirm="confirm"
      @cancel="cancel"
    />
  </div>
</template>

<script>
export default {
  props: ['showDatePick', 'type'],
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
    };
  },
  methods: {
    confirm() {
      const date = new Date(this.currentDate.getTime() + 8 * 60 * 60 * 1000);
      this.$emit('getPickDate', date.toISOString());
      this.closeDatePicker();
    },
    cancel() {
      this.closeDatePicker();
    },

    closeDatePicker() {
      this.$emit('update:showDatePick', false);
    },
  },
};
</script>

<style scoped>
.date-picker {
  min-width: 100%;
  transition: all 0.3s;
}
</style>
