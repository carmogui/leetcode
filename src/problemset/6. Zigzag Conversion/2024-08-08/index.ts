export function convert(s: string, numRows: number): string {
  const size = s.length;
  const helper = numRows - 2;
  let newHelper = 0;

  const finalArray = new Array(numRows).fill(null).map(() => []);

  for (let i = 0; i < size; i++) {
    if (newHelper === 0) {
      for (let j = 0; j < numRows; j++) {
        finalArray[j].push(s.charAt(i + j));
      }

      i = i + numRows - 1;
      newHelper = helper;
    } else {
      for (let j = 0; j < numRows; j++) {
        if (newHelper === j) {
          finalArray[j].push(s.charAt(i));
        } else {
          finalArray[j].push(" ");
        }
      }

      newHelper--;
    }
  }

  const result = finalArray.reduce((acc, cur) => {
    acc = acc + cur.filter((c) => c !== " ").join("");

    return acc;
  }, "");

  return result.length < size ? s : result;
}
