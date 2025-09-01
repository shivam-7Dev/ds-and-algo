/**
 * Problem: Rotate Array by K Positions
 *
 * Given an array of integers and a number k, rotate the array to the right by k steps.
 *
 * Example:
 * Input: arr = [1, 2, 3, 4, 5], k = 2
 * Output: [4, 5, 1, 2, 3]
 *
 * Input: arr = [10, 20, 30, 40], k = 1
 * Output: [40, 10, 20, 30]
 */

const rotateK = (nums, k) => {
  //   const lastArray = nums.slice(-k);
  //   console.log(lastArray, nums);
  const startElem = [];

  for (let index = 0; index < k; index++) {
    startElem.unshift(nums.pop());
  }
  //   nums.unshift(...startElem);
  nums.splice(0, 0, ...startElem);
  return nums;
};
console.log(rotateK([1, 2, 3, 4, 5], 2));
console.log(rotateK([10, 20, 30, 40], 1));

console.log("=========second========");

const arr = [1, 2, 3, 4, 5];
const helperRotate = (array, start, end) => {
  while (start <= end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }

  return array;
};

const rotateK2 = (nums, k) => {
  let size = nums.length;

  if (k > size) {
    k = k % size;
  }

  const fullRotated = helperRotate(nums, 0, size - 1);

  //rotate the fullROtated array from start to k-1
  const secondRotation = helperRotate(fullRotated, 0, k - 1);

  //reverese from k till end

  const finalRoattion = helperRotate(secondRotation, k, size - 1);

  return finalRoattion;
};
console.log(rotateK2([1, 2, 3, 4, 5], 2));
console.log(rotateK2([10, 20, 30, 40], 1));
