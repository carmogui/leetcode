export function longestPalindrome(s: string): string {
  const size = s.length;

  if (size === 1) {
    return s;
  }

  if (size === 2) {
    const firstChar = s.charAt(0);

    if (firstChar === s.charAt(1)) {
      return s;
    } else {
      return firstChar;
    }
  }

  const oddLengthPalindromes = [];
  const pairLengthPalindromes = [];

  for (let i = 0; i < size; i++) {
    let edge = 1;

    let charBeforeIndex = s.charAt(i - edge);
    let charAfterIndex = s.charAt(i + edge);

    // odd palindrome
    if (i > 0 && i < size - 1 && charBeforeIndex === charAfterIndex) {
      while (
        i - edge >= 0 &&
        i + edge < size &&
        charBeforeIndex === charAfterIndex
      ) {
        edge++;

        charBeforeIndex = s.charAt(i - edge);
        charAfterIndex = s.charAt(i + edge);
      }

      oddLengthPalindromes.push({ index: i, edge: edge - 1 });
    }

    // pair palindrome
    edge = 1;

    charBeforeIndex = s.charAt(i - edge + 1);
    charAfterIndex = s.charAt(i + edge);

    while (
      i - edge + 1 >= 0 &&
      i + edge < size &&
      charBeforeIndex === charAfterIndex
    ) {
      edge++;

      charBeforeIndex = s.charAt(i - edge + 1);
      charAfterIndex = s.charAt(i + edge);
    }

    if (edge > 1) {
      pairLengthPalindromes.push({ index: i, edge: edge - 1 });
    }
  }

  let longestPalindrome;

  if (oddLengthPalindromes.length) {
    const { index, edge } = oddLengthPalindromes.sort(
      (a, b) => b.edge - a.edge
    )[0];

    longestPalindrome = s.substring(index - edge, index + edge + 1);
  }

  if (pairLengthPalindromes.length) {
    const { index, edge } = pairLengthPalindromes.sort(
      (a, b) => b.edge - a.edge
    )[0];

    const sizeTwoPalindrome = s.substring(index - edge + 1, index + edge + 1);

    if (longestPalindrome) {
      return sizeTwoPalindrome.length > longestPalindrome.length
        ? sizeTwoPalindrome
        : longestPalindrome;
    }

    return sizeTwoPalindrome;
  }

  return longestPalindrome ? longestPalindrome : s.charAt(0);
}
