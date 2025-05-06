export function isPalindrome(x: number): boolean {
  const xString = String(x);
  const xArray = xString.split("");
  const xReverse = [...xArray].reverse();

  return xArray.every((xA, i) => xA === xReverse[i]);
}
