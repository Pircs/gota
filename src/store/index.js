import Vue from 'vue';
import Vuex from 'vuex';
import { readRecord, saveRecord } from '@/lib/localstorge';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    types: [
      { name: '零食', emoji: '🍫', cut: 0 },
      { name: '出行', emoji: '🚗', cut: 0 },
      { name: '旅游', emoji: '🏞️', cut: 0 },
      { name: '吃饭', emoji: '🍔', cut: 0 },
      { name: '购物', emoji: '🛒', cut: 0 },
      { name: '水果', emoji: '🍉', cut: 0 },
      { name: '运动', emoji: '🚴', cut: 0 },
      { name: '医疗', emoji: '👨‍⚕️', cut: 0 },
      { name: '数码', emoji: '💻', cut: 0 },
      { name: '住房', emoji: '🏠', cut: 0 },
      { name: '工资', emoji: '💳', cut: 1 },
      { name: '红包', emoji: '🧧', cut: 1 },
      { name: '股票', emoji: '💹', cut: 1 },
      { name: '外快', emoji: '💰', cut: 1 },
    ],
    recordList: [],
  },
  getters: {
    types: (state) => state.types,
    recordList: (state) => state.recordList,
  },
  mutations: {
    setRecordList(state, payload) {
      state.recordList.push(payload);
    },
    initRecordList(state, payload) {
      state.recordList = payload;
    },
    deleteRecord(state, payload) {
      state.recordList.splice(payload, 1);
    },
  },
  actions: {
    async initRecordList(context) {
      let res;
      res = await readRecord();
      if (!res) {
        res = [];
      }
      context.commit('initRecordList', res);
    },

    async setRecordList(context, payload) {
      await context.commit('setRecordList', payload);
      saveRecord(context.getters.recordList);
    },

    async deleteRecord(context, payload) {
      const { recordList } = context.getters;
      recordList.forEach((val, i) => {
        if (val.create === payload) {
          context.commit('deleteRecord', i);
        }
      });
      saveRecord(context.getters.recordList);
    },
  },
  modules: {},
});
