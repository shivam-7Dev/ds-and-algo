// create a test function that produces exactly the expected outputs specified against the console.log (focus on objects) time duration - 10 minutes

const test = (arg) => {
  const type = typeof arg;

  if (type === "number") {
    return 10 + arg;
  } else if (type === "string") {
    return "hello " + arg;
  } else if (type === "boolean") {
    return !arg;
  } else if (Array.isArray(arg)) {
    const length = arg.length;
    return [...arg, `test${length + 1}`];
  } else if (type === "object" && arg !== null) {
    const length = Object.keys(arg).length + 1;
    return { ...arg, [length]: `test${length}` };
  }
};

console.log(test(5));
console.log(test("shiv"));
console.log(test(true));
console.log(test([1, 2]));
console.log(test({ a: 1, b: 2 }));
