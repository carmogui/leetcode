import { twoSum } from "../src/index.js";

test("pass", () => {
  const input = {
    nums: [2, 7, 11, 15],
    target: 9,
  };
  const output = [0, 1];

  const result = twoSum(input.nums, input.target);

  expect(result).toEqual(output);
});
