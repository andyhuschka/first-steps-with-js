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
