export function reverse(x: number): number {
  const isNegative = x < 0;

  const stringfiedNumber = String(x).slice(isNegative ? 1 : 0);

  const result = Number(stringfiedNumber.split("").reverse().join(""));

  if (isNegative) {
    if (-result < -Math.pow(2, 31)) return 0;

    return -result;
  }

  if (result >= Math.pow(2, 31)) return 0;

  return result;
}
