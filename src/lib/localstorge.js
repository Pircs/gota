const key = 'gota';
const typeKey = 'gataType';

const defaultTypes = [
  { name: '零食', emoji: '🍫', cut: 0 },
  { name: '出行', emoji: '🚗', cut: 0 },
  { name: '旅游', emoji: '🏞️', cut: 0 },
  { name: '吃饭', emoji: '🍔', cut: 0 },
  { name: '购物', emoji: '🛒', cut: 0 },
  { name: '运动', emoji: '🚴', cut: 0 },
  { name: '医疗', emoji: '👨‍⚕️', cut: 0 },
  { name: '数码', emoji: '💻', cut: 0 },
  { name: '住房', emoji: '🏠', cut: 0 },
  { name: '工资', emoji: '💳', cut: 1 },
  { name: '红包', emoji: '🧧', cut: 1 },
  { name: '股票', emoji: '💹', cut: 1 },
  { name: '外快', emoji: '💰', cut: 1 },
];

function readRecord() {
  const res = JSON.parse(localStorage.getItem(key));
  return res || [];
}

function saveRecord(val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function readTypes() {
  const res = JSON.parse(localStorage.getItem(typeKey));
  return res || defaultTypes;
}

function saveTypes(val) {
  localStorage.setItem(typeKey, JSON.stringify(val));
}

export {
  readRecord, saveRecord, readTypes, saveTypes,
};
