// Single line Comment

/* 
Das ist ein Multi Line Comment
Wie man sieht
*/

// Coding-Task: If & switch statements

// Question 1
//  * Spot the errors and fix them
//  - Copy the following complete code block to your script.js file
//    and try to spot and fix the errors.

const size = 20;
let result;

if (size > 20) {
  result = "Greater than 10";
} else if (size > 10) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// Question 2
// Implement a oddEven function.

// The function has one parameter which is a number
// If the number is an even number, the function returns the string even
// If the number is an od number, the function returns the string odd

// TODO: Implement the oddEven function

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// Livesession //

function oddOrEven(number) {
  // if (Math.floor(number / 2) === number / 2)
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven(10));
// even
console.log(oddOrEven(11));
// odd

// Livesession //

// Question 3

// Implement a oldYoung function.

// The function has one parameter which is a number
// If the number is less than 16, return "children"
// If the number is less than 50, return "young person"
// Otherwise return "elder person"
// If the number is not a number or a negative number a string invalid parameter

// TODO: Implement the oldYoung function

function oldYoung(age) {
  if (typeof age !== "number" || age < 0) {
    return "invalid paramter";
  } else if (age < 16) {
    return "children";
  } else if (age < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
