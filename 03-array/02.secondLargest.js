/**
 * Problem: Find the Second Largest Element in an Array
 *
 * Given an array of integers, find and return the second largest element in the array.
 * If the array does not have a second largest element, indicate accordingly.
 *
 * Example:
 * Input: [12, 35, 1, 10, 34]
 * Output: 34
 *
 * Input: [10, 10, 10, 10]
 * Output: No second largest element
 */

const secLarge = (array) => {
  const uniqueArray = [...new Set(array)];
  const element = uniqueArray
    .sort((a, b) => {
      return a - b;
    })
    .at(-2);
  return element;
};

console.log(secLarge([12, 35, 1, 10, 34, 100]));
console.log(secLarge([10, 10, 10, 10, 1]));
console.log("=======optimal=======");
const secondLargestOptimise = (nums) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLarget = Number.NEGATIVE_INFINITY;
  for (const num of nums) {
    //check if the current number is greater that largest
    //if yes then assign it to largest and assign the value of largest to to second lasrgest
    if (num > largest) {
      secondLarget = largest;
      largest = num;
    } else if (num != largest && num > secondLarget) {
      secondLarget = num;
    }
  }
  return secondLarget;
};

console.log(secondLargestOptimise([101, 12, 35, 1, 10, 34]));
console.log(secondLargestOptimise([10, 10, 10, 10, 1]));
