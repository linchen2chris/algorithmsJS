/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var sortedNums = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      let head = sortedNums[i];
      let tail = sortedNums[j];
      if (head + tail === target) {
        return [nums.indexOf(head), nums.lastIndexOf(tail)];
      } else if (head + tail > target) {
        continue;
      } else {
        break;
      }
    }
  }
};

export default twoSum;
