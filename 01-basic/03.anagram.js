/**
 * Write a function to determine if two given strings are anagrams of each other. 
 * Two strings are anagrams if they contain the same characters in any order,
 *  ignoring spaces, punctuation, and case.

Example:
"listen" and "silent" are anagrams.
"Triangle" and "Integral" are anagrams.
"hello" and "world" are not anagrams
 */

const isAnagramSorting = (string1, string2) => {
  /**
   * sort both numbers
   * compare if both are same
   * if same then they are anagram
   * if not then they are not
   */
  //   const sort1 = string1.sort((a, b) => {
  //     a - b;
  //   });
  //   const sort2 = string2.sort((a, b) => {
  //     a - b;
  //   });
  //   console.log({ sort1, sort2 });
  /**
 * Strings do not have a .sort() method
    .sort() is an array method.
    You need to split the string into an array first.

    The sort callback is not returning a value
    For strings, you can use .sort() without a callback, 
    or use localeCompare.

 */

  string1 = string1.split("").sort().join("");
  string2 = string2.split("").sort().join("");
  console.log({ string1, string2 });
  if ((string1 = string2)) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagramSorting("listen", "silent"));
console.log(isAnagramSorting("node", "deno"));

console.log("========apporach two======");

const isAnngramMap = (string1, string2) => {
  if (string1.lenght !== string2.lenght) return false;

  let map1 = {};
  let map2 = {};

  for (let char of string1) {
    if (map1[char]) {
      map1[char] = map1[char] + 1;
    } else {
      map1[char] = 1;
    }
  }

  for (let char of string2) {
    if (map2[char]) {
      map2[char] = map2[char] + 1;
    } else {
      map2[char] = 1;
    }
  }

  for (const key of Object.keys(map1)) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnngramMap("node", "denosdfsad"));
console.log(isAnngramMap("node", "deno"));
