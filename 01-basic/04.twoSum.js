/**
 * You are given an array of integers nums and an integer target.
 find the indices of the two numbers in the array whose sum is equal to the target.
    You may assume that each input would have exactly one solution, 
    and you may not use the same element twice.
    You can return the answer in any order.

    nums = [2, 7, 11, 15], target = 9. => output=[0, 1]


 */

const nums = [2, 7, 11, 15];

const target = 9;

const bruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i != j) {
        let sum = nums[i] + nums[j];

        if (sum == target) {
          return [i, j];
        }
      }
    }
  }
};
console.log(bruteForce(nums, target));
console.log(bruteForce([3, 2, 4], 6));

console.log("=======good solution using object and complemet=========");

const goodSolution = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const complemet = target - nums[i];
    //check if complemt exist in the obj
    //if it exist then return current index and the index of complemet
    //if it does not exist then save the complement as key and current index as value

    if (obj[complemet]) {
      return [obj[complemet], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
console.log(goodSolution([3, 2, 4], 6));
