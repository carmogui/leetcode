export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);

  const half = Math.floor(nums.length / 2);

  return nums.length % 2 ? nums[half] : (nums[half - 1] + nums[half]) / 2;
}
