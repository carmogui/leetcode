export function twoSum(nums: number[], target: number): number[] {
  const possibleOptions = [];
  const correctOptions = [];

  nums.some((num, index) => {
    const possibleOption = {
      number: num,
      index,
    };

    const correctOption = possibleOptions.find((possibleOptionItem) => {
      const numberSum = possibleOptionItem.number + num;
      const isDone = numberSum === target;

      return isDone;
    });

    if (correctOption) {
      correctOptions.push(correctOption.index);
      correctOptions.push(index);
      return true;
    } else {
      possibleOptions.push(possibleOption);

      return false;
    }
  });

  return correctOptions;
}
