console.group("Task 0");

const age = isWorkingAgePerson;
console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

/**
 * Function checks working age
 * @param {Number} age 
 * @returns {boolean} true or false
 */

function isWorkingAgePerson(age) {
  return age <= 65 && age >= 16;
}

console.groupEnd();

console.group("Task 1");

console.groupEnd();

