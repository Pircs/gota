function mergeType(val) {
  return val.reduce((next, cur) => {
    const nextTemp = next;
    const obj = {
      name: cur.type.name,
      value: parseFloat(cur.num).toFixed(2) - 0,
      emoji: cur.type.emoji,
    };

    if (!nextTemp[obj.name]) {
      nextTemp[obj.name] = obj;
    } else {
      nextTemp[obj.name].value += obj.value;
    }
    return nextTemp;
  }, {});
}

function objToArray(val) {
  return Object.entries(val).map((item) => item[1]);
}

function sortTotal(val) {
  val.sort((a, b) => b.value - a.value);
  return val;
}

function totalType(val) {
  return sortTotal(objToArray(mergeType(val)));
}

export { totalType, sortTotal };
