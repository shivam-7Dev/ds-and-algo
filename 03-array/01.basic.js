(() => {
  console.log("====start=====");
  const arr = [1, 2, 3];
  //adding at the end
  arr.push("four", "five");
  console.log(arr);

  //removing from teh end
  arr.pop();
  console.log(arr);

  //adding at the begining of the array
  arr.unshift(0, "zero");
  console.log(arr);

  //removign from the begining for the array
  arr.shift();
  console.log(arr);
  console.log("=====end=====");
})();
