import { twoSum } from "../../src/index.js";

describe.skip("1. Two Sum", () => {
  test("case 1", () => {
    const input = {
      nums: [2, 7, 11, 15],
      target: 9,
    };

    const output = [0, 1];

    const result = twoSum(input.nums, input.target);

    expect(result).toEqual(output);
  });

  test("case 2", () => {
    const input = {
      nums: [3, 2, 4],
      target: 6,
    };

    const output = [1, 2];

    const result = twoSum(input.nums, input.target);

    expect(result).toEqual(output);
  });

  test("case 3", () => {
    const input = {
      nums: [3, 3],
      target: 6,
    };

    const output = [0, 1];

    const result = twoSum(input.nums, input.target);

    expect(result).toEqual(output);
  });
});
