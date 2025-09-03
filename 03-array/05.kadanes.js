/**
 * find the maximum sum of a contiguous subarray
 * arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
👉 The subarray [4, -1, 2, 1] has the largest sum = 6.

    Stock market problems (max profit if you buy/sell once).
    Competitive programming (fast maximum subarray problems).
    Dynamic programming fundamentals (teaches optimal substructure & overlapping subproblems).
 */

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const bruteForce = (array) => {
  let sum = 0;
  let start, end;
  for (let index = 0; index < array.length; index++) {
    let innersum = array[index];
    for (let j = index; j < array.length; j++) {
      innersum += array[j];
      if (innersum > sum) {
        sum = innersum;
        start = index;
        end = j;
      }
    }
  }
  console.log({ sum });
  return { sum, start, end };
};

console.log(bruteForce(arr));
