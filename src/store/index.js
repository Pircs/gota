import Vue from 'vue';
import Vuex from 'vuex';
import { Toast } from 'vant';
import {
  readRecord, readTypes, saveRecord, saveTypes,
} from '@/lib/localstorge';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    types: [],
    recordList: [],
  },
  getters: {
    types: (state) => state.types,
    recordList: (state) => state.recordList,
  },
  mutations: {
    initRecordList(state, payload) {
      state.recordList = payload;
    },
    setRecordList(state, payload) {
      state.recordList.push(payload);
    },
    deleteRecord(state, payload) {
      state.recordList.splice(payload, 1);
    },
    editRecord(state, payload) {
      state.recordList[payload.index] = payload.payload;
    },

    initTypes(state, payload) {
      state.types = payload;
    },
    addType(state, payload) {
      state.types.push(payload);
    },
  },
  actions: {
    async initRecordList(context) {
      const record = await readRecord();
      context.commit('initRecordList', record);
    },

    async setRecordList(context, payload) {
      await context.commit('setRecordList', payload);
      saveRecord(context.getters.recordList);
    },

    async deleteRecord(context, payload) {
      const { recordList } = context.getters;
      await recordList.forEach((val, i) => {
        if (val.create === payload) {
          context.commit('deleteRecord', i);
        }
      });
      saveRecord(context.getters.recordList);
    },

    async editRecord(context, payload) {
      const { recordList } = context.getters;
      let index = 0;
      recordList.forEach((val, i) => {
        if (val.create === payload.create) index = i;
      });
      context.commit('editRecord', { index, payload });
      saveRecord(context.getters.recordList);
    },

    async initTypes(context) {
      const types = await readTypes();
      context.commit('initTypes', types);
    },

    async addType(context, payload) {
      const temp = context.getters.types.filter((val) => (val.name === payload.name ? val : null));
      if (temp.length > 0) return Toast(`${payload.name} 已经存在`);
      await context.commit('addType', payload);
      return saveTypes(context.getters.types);
    },
  },
  modules: {},
});
