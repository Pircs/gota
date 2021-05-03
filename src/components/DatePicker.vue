<template>
  <div class="date-picker" :class="{ active: showDatePick }">
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
      this.$emit('getPickDate', this.currentDate.toISOString());
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
  border-top: 2px solid #919191;
  position: fixed;
  min-width: 100%;
  bottom: -100%;
  transition: all 0.3s;
}

.active {
  bottom: 0;
}
</style>
