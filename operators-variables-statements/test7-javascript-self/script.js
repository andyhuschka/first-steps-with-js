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
