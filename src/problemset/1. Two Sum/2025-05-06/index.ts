export function twoSum(nums: number[], target: number): number[] {
  const length = nums.length;

  let i, j, result;

  for (i = 0; i < length; i++) {
    if (result) break;

    const subtraction = target - nums[i];

    for (j = 0; j < length; j++) {
      if (j === i) continue;

      if (nums[j] === subtraction) result = [i, j];
    }
  }

  return result;
}
