const s = "  -123-2";

const length = s.length;

let isNegative = false;

let number = null;
let i;

for (i = 0; i < length; i++) {
  const char = s[i];

  if (char === "-" || char === "+") {
    if (number === null) {
      if (i + 1 < length) {
        if (isNaN(Number(s[i + 1]))) {
          break;
        } else {
          number = "";

          if (char === "-") {
            isNegative = true;
          }

          continue;
        }
      }
    }

    break;
  }

  if (char === " ") {
    if (number !== null) {
      break;
    }
    continue;
  } else {
    if (isNaN(Number(char))) {
      break;
    }
  }

  if (number === null) {
    number = "";
  }

  number += char;
}

const result = Number(number);

if (isNegative) {
  if (-result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }

  return -result;
}

if (result >= Math.pow(2, 31)) {
  return Math.pow(2, 31) - 1;
}

return result;
