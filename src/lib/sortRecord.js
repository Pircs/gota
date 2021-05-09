import store from '@/store';
import dayjs from 'dayjs';
import clone from '@/lib/tools';

store.dispatch('initRecordList');

// 金额计算
function countMoney(val, type) {
  let count = 0;
  val.forEach((item) => {
    if (item.type.cut === type) {
      count += parseFloat(item.num);
    }
  });
  return count;
}

// 数组排序/倒序
function sortRecord(record) {
  record.sort((a, b) => dayjs(b.create).valueOf() - dayjs(a.create).valueOf());
  return record;
}

// 日期格式化
function formatDate(val) {
  const date = new Date(val).toISOString();
  if (dayjs().isSame(date, 'day')) {
    return '今日';
  }
  if (dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day')) {
    return '昨天';
  }
  return val;
}

// 重组数组
function formatRecord(record) {
  // 使用下标集合重复项
  const temp = [];
  record.forEach((item) => {
    const create = dayjs(item.create).format('YYYY-MM-DD');
    temp[create] = temp[create] || [];
    temp[create].push(item);
  });

  return Object.entries(temp).map((val) => ({
    create: formatDate(val[0]),
    income: countMoney(val[1], 1),
    payout: countMoney(val[1], 0),
    item: val[1],
  }));
}

function getRecordList(time, type) {
  const record = sortRecord(clone(store.getters.recordList));
  // 筛选指定月份或年份账单
  let dateType = 'month';
  if (type) {
    dateType = type;
  }
  const result = [];
  record.forEach((val) => {
    if (dayjs(new Date(time)).isSame(new Date(val.create), dateType)) {
      result.push(val);
    }
  });

  return formatRecord(result);
}

export default getRecordList;
