//Write a JavaScript function named getJuniorMembers(members, seniorMembers)
// that returns a new array containing only the members who are NOT senior members you can not use inbuilt methods of array - time duration - 10 minutes.

const members = ["priya", "mayank", "alok", "shiv", "shikha", "zoheb"];
const seniorMembers = ["shiv", "shikha"];

const getJuniorMembers = (members, seniorMembers) => {
  const junior = [];

  const seniorMap = {};

  for (const mem of seniorMembers) {
    seniorMap[mem] = mem;
  }

  for (const member of members) {
    if (!seniorMap[member]) {
      junior.push(member);
    }
  }

  return junior;
};

console.log(getJuniorMembers(members, seniorMembers));
