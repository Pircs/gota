const key = 'gota';

function readRecord() {
  return JSON.parse(localStorage.getItem(key));
}

function saveRecord(val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export { readRecord, saveRecord };
