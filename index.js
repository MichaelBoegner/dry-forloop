exports.forDry;

Array.prototype.forDry = function(cb, index = 0, operator, length, iterator) {
  //es6 default values only trigger on undefined and not null, this will trigger on anything false (including 0)
  operator = operator || "<=";
  length = length || "length - 1";
  iterator = iterator || "++";
  //special case since 0 is considered false for the above methods
  index == "null" ? (index = 0) : "";

  switch (length) {
    case "length - 1":
      length = this.length - 1;
      break;
    case "length":
      length = this.length;
      break;
    default:
      length = parseInt(length);
      break;
  }

  const operatorsObj = {
    ">": () => {
      return index > length;
    },
    "<": () => {
      return index < length;
    },
    ">=": () => {
      return index >= length;
    },
    "<=": () => {
      return index <= length;
    },
    "!==": () => {
      return index !== length;
    },
    "===": () => {
      return index === length;
    }
  };
  const iteratorObj = {
    "++": () => {
      return index++;
    },
    "--": () => {
      return index--;
    }
  };

  for (index; operatorsObj[operator](); iteratorObj[iterator]()) {
    cb(this[index], index, this);
  }

  return;
};
