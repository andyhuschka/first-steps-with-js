// Single line Comment

/* 
Das ist ein Multi Line Comment
Wie man sieht
*/

// Question 1
// TODO: implement welcomeMsg function

function welcomeMsg(name) {
  return `Welcome ${name}!`;
}

console.log(welcomeMsg("Andy"));
//Welcome Andy!

console.log(welcomeMsg("Marc"));
//Welcome Marc!

console.log(welcomeMsg("Jane"));
//Welcome Jane!

//Question 2
// TODO: implement calcGrossPrice function

function calcGrossPrice(netPrice, taxRate) {
  return netPrice * (1 + taxRate);
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

//Question 3
// TODO: Implement the addPositive function

function addPositive(a, b) {
  // Convert negative numbers to positive using Math.abs()
  return Math.abs(a) + Math.abs(b);
}
console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
