<template>
  <div id="charts"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  props: ['echarts'],
  mounted() {
    this.initEcharts();
  },
  watch: {
    echarts() {
      this.initEcharts();
    },
  },
  computed: {
    chartsDom() {
      return echarts.init(document.getElementById('charts'));
    },
  },
  methods: {
    initEcharts() {
      if (this.echarts.length > 0) {
        this.setEcharts(this.echarts.slice(0, 5));
      } else {
        this.setEcharts([{ name: '穷', value: 100 }]);
      }
    },
    setEcharts(val) {
      const option = {
        series: [
          {
            type: 'pie',
            radius: ['30%', '70%'],
            data: val,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      this.chartsDom.setOption(option);
    },
  },
};
</script>

<style scoped></style>
