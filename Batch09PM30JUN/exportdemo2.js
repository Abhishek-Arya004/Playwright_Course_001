//Modules---> Modules

import { add, div, mul, sub, name, age } from "./exportdemo1.js"; // named export

import { display } from "./exportdemo3.js";

import cal from "./exportdemo4.js"; // default export

let x1 = add(4, 5);

let x2 = div(2, 6);

let x3 = mul(3, 6);

let x4 = sub(6, 7);

// console.log(x1);

// console.log(x2);

// console.log(x3);

// console.log(x4);

// console.log(name + " " + age);

// display();

cal.Hello();
console.log(cal.message());
