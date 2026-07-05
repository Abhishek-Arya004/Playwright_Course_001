// // //simple functions
// // function add(a, b) {
// //   return a + b;
// // }

// // let additionvalues = add(2, 3);

// // console.log(additionvalues);

// // //annoymus functions--,it does not have name

// // let addition2 = function (a, b) {
// //   return a + b;
// // };

// // console.log(addition2(3, 4));

// // let sumof = (a, b) => a + b;

// // console.log(sumof(3, 4));
// // //-------------------------------

// // //functions: === Methods----> code which some specific task

// // //Java---> Method

// // //java script --->function

// // //use of functions

// // //addition---->Code---Add-->

// // //1. Reuse the code
// // //Improve readiability
// // //avoid repetition
// // // divide code in smaller parts

// // //Syntex for of function( parametrize and non parameteriz)

// // // function functionname() {
// // //   let i = 0;
// // //   console.log("Hello");
// // // }

// // //functionname();

// // // call the function
// // // function with parameter
// // // function add(a, b) {
// // //   console.log(a + b);
// // // }

// // // add(2, 3);

// // // add(4, 3);

// // // add(5, 3);

// // // add(6, 3);
// // // default Parameters

// // function great(name = "Guest") {
// //   console.log("hello " + name);
// // }

// // great("Abhishek");

// // //Anonymous Function

// // let msg = function (name) {
// //   console.log("hello " + name);
// // };
// // msg("ARYA");

// // // Immediately invoked function expression IIFE

// // (function () {
// //   console.log("this is IIFE");
// // })();

// //Callback function

// // function passed as argument to another function

// function greet(name, callback) {
//   console.log("hello. " + name);

//   callback();
// }

// function bye() {
//   console.log("Goodbye");
// }

// greet("ARYA", bye);
// //Recursive function

// //function calling itself

// function factotial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factotial(n - 1);
// }

// console.log(factotial(9));

// // Funcion scope

// let globalvar = 34;

// function test() {
//   let i = 10;

//   let j = 9;

//   console.log(i + " " + j);
//   console.log("hello " + globalvar);
// }
// test();

// console.log(globalvar);

//rest parameters

// function sum(...numbers) {
//   let total = 0;

//   for (let n of numbers) {
//     total += n; // total = total + n;
//   }

//   return total;
// }

// let result = sum(1, 2, 4, 5, 6, 7);

// console.log(result);

// get();

// function get() {
//   console.log("this is hoisting in function");
// }

// sayHi();

// let sayHi = function () {
//   console.log();
// };
// //

// function test() {
//   // function definition
//   return "Hello";
// }

// let str = test();
// //console.log(test());
// console.log(str);

// console.log(test());

// function add(a, b) {
//   console.log(a + b);
// }

// let sum = add(23, 24);
// console.log(sum);

// function test() {
//   console.log("Hello word");
// }

// let gus = () => {
//   console.log("Hello word");
// };

// gus();
// // console.log(gus());

// function add(a, b) {
//   return a + b;
// }

// let sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(1, 2));

// let addition = (a, b) => a + b;

// console.log(addition(4, 2));

// function squre(num) {
//   return num * num;
// }

// let strval1 = (num) => num * num;

// // console.log(strval1(4));

// function iseven(num) {
//   return num % 2 === 0;
// }

// //convert it arraow function

// console.log(iseven(2));

// map function

let number1 = [1, 2, 3, 4, 5, 6, 7, 8];

let result = number1.map((var1) => var1 * 3);

console.log(result);

// let str = (var1) => var1 + 2;

// console.log(str(2));

//filter

// function iseven(num) {
//   return num % 2 === 0;
// }

//let evennumber = (num) => num % 2 === 0;

// let number = [1, 2, 3, 4, 5, 6, 7, 8];

let even = result.filter((num) => num % 2 === 0);

console.log(even);

let sum = even.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

// //array.reduce((accumulator , currentvalue)=>{ }, intialvalue)

let number = [1, 2, 3, 4, 5, 6, 7, 8];

let total = number
  .map((num) => num * 3)
  .filter((num) => num % 2 === 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(total);
