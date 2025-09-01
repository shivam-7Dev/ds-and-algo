/**
 * Write a function that checks whether a given input is a palindrome.
 * The input can be either a number or a string.
 * A palindrome is a sequence t
 * hat reads the same backward as forward (e.g., "madam", "121").
 * Ignore case and, for strings, ignore non-alphanumeric characters
 */

const palindNumber = (number) => {
  let accumilator = 0;
  while (number > 0) {
    //get the last digit
    let lastNumber = number % 10;
    //update the accuilator
    accumilator = accumilator * 10 + lastNumber;
    //reduce the original value of number
    number = Math.floor(number / 10); //very important
  }
  return accumilator;
};

// console.log(palindNumber(429));

const palindNumber2 = (number) => {
  if (Number.isNaN(+number)) {
    console.log("please provide a number");
    return;
  }

  const reverse = number.split("").reverse().join("");
  console.log({ reverse });
  if (reverse === number) {
    return true;
  } else {
    return false;
  }
};

console.log(palindNumber2("121"));
