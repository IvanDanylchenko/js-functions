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

// console.log(primeNumber(n));

const n = Number(prompt("Input number"));
console.log(primeNumber(n));

/**
 * Function checks prime number or not
 * @param {Number} n
 * @returns {boolean} true or false
 */

function primeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

console.groupEnd();

console.group("Task 2");

/**
 * Function checks dividing the number whole or not
 * @param {Number} n1
 * @param {NUmber} n2
 * @returns {boolean} true or false
 */

function checkMultiplicity(n1, n2) {
  if (Number.isInteger(n1 / n2)) {
    return true;
  }
  return false;
}

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

console.groupEnd();

console.group("Task 3");

/**
 * Function checks whether a triangle is possible or not
 * @param {Number} a
 * @param {Number} b
 * @param {boolean} c
 * @returns true or false
 */

function triangle(a, b, c) {
  if (a + b <= c || b + c <= a || a + c <= b) {
    return false;
  }
  return true;
}

console.log(triangle(10, 10, 5));

console.groupEnd();


