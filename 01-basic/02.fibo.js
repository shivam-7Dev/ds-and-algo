/**
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
    F(0) = 0

    F(1) = 1

    F(n) = F(n-1) + F(n-2) for n ≥ 2
 */

const fibboArray = (n) => {
  if (n < 0) {
    return "return a number greater than or equql to zero";
  }

  const arr = [0, 1];
  if (n <= 1) {
    return arr;
  }

  //   for (let index = 2; index <= n; index++) {
  //     arr.push(arr[index - 1] + arr[index - 2]);
  //   }

  for (let index = 2; index <= n; index++) {
    arr.push(arr.at(-1) + arr.at(-2)); // 👈 negative indexing works here
  }
  return arr;
};

// fibboArray(-1);
// fibboArray(0);
// fibboArray(1);
console.log(fibboArray(0));
console.log(fibboArray(1));
console.log(fibboArray(2));
console.log(fibboArray(3));
console.log(fibboArray(4));
console.log(fibboArray(5));
console.log(fibboArray(10));
console.log("=============================");

/**
 ⚡ If you only wanted the n-th Fibonacci number (not the full array),
  you could reduce space complexity to O(1)
   by just keeping track of the last two numbers instead of the full array.
 */

const fibboNumber = (n) => {
  if (n < 0) return "return a number greater than or equal to zero";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let fibo;

  let i = 2;
  while (i <= n) {
    fibo = a + b;
    a = b;
    b = fibo;
    i++;
  }
  return fibo;
};

console.log(fibboNumber(5));
console.log(fibboNumber(10));
console.log("=============================");
const fibonacci = (n) => {
  if (n < 0) return "return a number greater than or equal to zero";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev2 = 0; // F(0)
  let prev1 = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log("=============================");

const fibboRecc = (number) => {
  if (number < 0) return "return a number greater than or equal to zero";
  if (number === 0) return 0;
  if (number === 1) return 1;
  const fib = fibboRecc(number - 1) + fibboRecc(number - 2);
  return fib;
};

console.log(fibboRecc(0));
console.log(fibboRecc(1));
console.log(fibboRecc(6));
console.log(fibboRecc(10));
