// Single line Comment

/* 
Das ist ein Multi Line Comment
Wie man sieht
*/

//--- Test 1 ---//

function logHello() {
  console.log("hello Users");
}

logHello();

const helloFn = logHello;

helloFn();

//--- Test 2 ---//

const sayHello = function () {
  console.log("hello");
};

sayHello();

//--- Test 3 ---//

function sayMorning() {
  console.log("morning");
}

function executeFn(Fn) {
  Fn();
}

executeFn(sayMorning);

//--- Test 4 ---//

const arr = [1, 2, 3];

arr.reverse();

console.log(arr);

//--- Test 5 ---//

const arr1 = [1, 2, 3];

const str = arr1.join();
console.log(str);

const str2 = arr1.join("-");
console.log(str2);

const str3 = arr1.join("");
console.log(str3);

//--- Test 6 ---//

const arr2 = [1, 2, 3];

const is2Included = arr2.includes(2);
console.log(is2Included);

const is4Included = arr2.includes(4);
console.log(is4Included);

//--- Test 7 ---//

const arr3 = ["Peter", "Paul", "Mary"];

function sayGood(name) {
  console.log("Good " + name);
}

arr3.forEach(sayGood);

//--- Test 8 ---//

const arr4 = ["Peter", "Paul", "Mary"];

function filter(name) {
  return name.length < 5;
}

const filteredArr = arr4.filter(filter);
console.log(filteredArr);

//--- Test 9 ---//

const arr5 = [2, 4, 5, 7];

function square(n) {
  return n * n;
}

const squaredArr = arr5.map(square);
console.log(squaredArr);

//--- Test 10 ---//
// ohne parameter

const arr6 = [-1, 100, 4, 2];

const sortedArr = arr6.sort();
console.log(sortedArr); // -1, 100, 2, 4 <== kein Sinn

//--- Test 10.5 ---//

function sortNumbers(a, b) {
  console.log("comparing " + a + " and " + b);
  return a - b;
}

const sortedArr1 = arr6.sort(sortNumbers);
console.log(sortedArr);

//--- Test 11 ---//

const arr7 = [2, 4, 5, 7];

// function square(n) {
// return n * n;
// }

const squaredArr1 = arr7.map(function (n) {
  return n * n;
});

console.log(squaredArr1);

//--- Test 12 ---//

let sum = 0;

function addToSum(num) {
  sum += num;

  return sum;
}

console.log(addToSum(5));
console.log(addToSum(5));

//--- Test 12.5 ---//

function addToSum1(num1) {
  let sum1 = 0;
  sum1 += num1;

  return sum1;
}

console.log(addToSum1(5));
console.log(addToSum1(5));

//--- Test 13 ---//

const addToSum2 = (sum2, num2) => {
  sum2 += num2;

  return sum2;
};

const greetUser = (username) => "Hallo " + username;

console.log(addToSum2(10, 5));
console.log(addToSum2(10, 5));
console.log(greetUser("John"));

const jane = {
  firstName: "jane",
  age: 30,
  id: 1,
  lastName: "Doe",
  greeting() {
    return `Hallo ${this.firstName}`;
  },
};
console.log(jane.greeting());

//--- Test 14 ---//

const people = ["John", "Jane"];
people.forEach(function () {
  console.log("Ich wurde ausgeführt");
});

//--- Test 14.5 ---//

const people1 = ["John", "Jane"];
people1.forEach(function (element, index, arr8) {
  console.log(element, index, arr8);
});
