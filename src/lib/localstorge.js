const key = 'gota';
const typeKey = 'gataType';

const defaultTypes = [
  { name: 'ιΆι£', emoji: 'π«', cut: 0 },
  { name: 'εΊθ‘', emoji: 'π', cut: 0 },
  { name: 'ζζΈΈ', emoji: 'ποΈ', cut: 0 },
  { name: 'ει₯­', emoji: 'π', cut: 0 },
  { name: 'θ΄­η©', emoji: 'π', cut: 0 },
  { name: 'θΏε¨', emoji: 'π΄', cut: 0 },
  { name: 'ε»η', emoji: 'π¨ββοΈ', cut: 0 },
  { name: 'ζ°η ', emoji: 'π»', cut: 0 },
  { name: 'δ½ζΏ', emoji: 'π ', cut: 0 },
  { name: 'ε·₯θ΅', emoji: 'π³', cut: 1 },
  { name: 'ηΊ’ε', emoji: 'π§§', cut: 1 },
  { name: 'θ‘η₯¨', emoji: 'πΉ', cut: 1 },
  { name: 'ε€εΏ«', emoji: 'π°', cut: 1 },
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
