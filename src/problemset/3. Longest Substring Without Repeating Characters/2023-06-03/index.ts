export function lengthOfLongestSubstring(s: string): number {
  const sArray = s.split("");

  let repeated = [];
  const combinations = [[]];
  let curComb = 0;

  for (let i = 0; i < sArray.length; i++) {
    const sA = sArray[i];
    let foo = i;

    if (
      repeated.some((r) => {
        if (r.sA === sA) {
          foo = r.i;
          return true;
        }
        return false;
      })
    ) {
      i = foo;
      curComb++;
      combinations.push([]);
      repeated = [];
    } else {
      combinations[curComb].push(i);
      repeated.push({ sA, i });
    }
  }

  const largestCombination = combinations.reduce((acc, cur) => {
    if (cur.length > acc.length) {
      return cur;
    }

    return acc;
  }, []);

  const start = Number(largestCombination[0]);
  const end = Number(largestCombination[largestCombination.length - 1]);

  return s.substring(start, end + 1).length;
}
