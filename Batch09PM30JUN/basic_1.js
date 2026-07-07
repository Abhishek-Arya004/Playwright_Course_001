//two types of languages low level and high level
// webdevelopment/mobile app development
//variables: black containers which are used to store the data in it (Memory), its  value can be changed at any time,
// it is a container which is used to store the data in it.

// var or let or const are used to declare the variable in javascript.

var a; //declaration of variable, its value can be changed at any time, it can be redeclared and reinitialized at any time, it is function scoped variable.
let b; //declaration of variable, its value can be changed at any time, it cannot be redeclared but can be reinitialized at any time, it is block scoped variable.
const c = 10; // declaration and initialization of variable at the same time, its value cannot be changed at any time.

//var is used to declare the variable in javascript, it is a global scope variable, its value can be changed at any time,
//it can be redeclared and reinitialized at any time, it is function scoped variable.

//let is used to declare the variable in javascript, it is a block scope variable, its value can be changed at any time,
//it cannot be redeclared but can be reinitialized at any time, it is block scoped variable.

//const is used to declare the vgit ariable in javascript, it is a block scope variable, its value cannot be changed at any time,
//it cannot be redeclared and reinitialized at any time, it is block scoped variable.

//Data types: it is a classification of data which is used to store the data in it,
// it is a container which is used to store the data in it.
//string, number, boolean, null, undefined, object, array, function

a = 10; //number
b = "Hello"; //string
c1 = true; //boolean
d = null; //null
e = undefined; //undefined
f = { name: "John", age: 30 }; //object
g = [1, 2, 3, 4, 5]; //array
h = function () {
  console.log("Hello World");
}; //function

console.log("this is console log");
console.log(a);
console.log(b);
console.log(c1);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h());

//operators: it is a symbol which is used to perform the operation on the data,

// it is a container which is used to store the data in it.
//arithmetic operators, //+, -, *, /, %, ++, --
// assignment operators, //=, +=, -=, *=, /=, %=
// comparison operators, //==, ===, !=, !==, >, <, >=, <=
// logical operators, //&&, ||, !
// bitwise operators, //&, |, ^, ~, <<, >>, >>>
// ternary operators //condition ? true : false

let i = 10;
let j = 5;
let l = 6;
let m = 7;

console.log(i + j);
console.log(i - j);
console.log(i * j);
console.log(i / j);
console.log(i % j);

// I++ = I = I + 1 || ++I
//I-- = I = I - 1. || --I

console.log(i++); //ternary operator || pre-increment operator or post-increment operator ||pre decrement operator or post-decrement operator
console.log(i--);
console.log(++i); //ternary operator || pre-increment operator or post-increment operator ||pre decrement operator or post-decrement operator
console.log(--i);

i += 5; // i = i + 5
console.log(i);

i -= 5; // i = i - 5
console.log(i);

i *= 5; // i = i * 5
console.log(i);

i /= 5; // i = i / 5
console.log(i);

i %= 5; // i = i % 5

console.log(i);

console.log(i == j); //TURE OR FALSE
console.log(i === j); // difference between == and === is that == checks for value only and === checks for value and type both

console.log(i != j); //true or false
console.log(i !== j); //difference between != and !== is that != checks for value only and !== checks for value and type both

console.log(i > j); //true or false
console.log(i < j); //true or false
console.log(i >= j); //true or false
console.log(i <= j); //true or false

console.log(i > j && j < k); //true or false
console.log(i || j); //true or false
console.log(!(i > j)); //true or false

//&& table

//true && true = true
//true && false = false
//false && true = false
//false && false = false

//or table

//true || true = true
//true || false = true
//false || true = true
//false || false = false

//not table

//!true = false
//!false = true

//bitwise table( 0 and 1) O = false, 1 = true

//& table

//true & true = true
//true & false = false
//false & true = false
//false & false = false

//| table

//true | true = true
//true | false = true
//false | true = true
//false | false = false

//^ table

//true ^ true = false
//true ^ false = true
//false ^ true = true
//false ^ false = false

console.log(i & j); //i = 10 = 1010, j = 5 = 0101

//1.  0 ----0
//0.  1-----0
//1.  0-----0
//0.  1-----0

console.log(i | j);
console.log(i ^ j);
console.log(~i);
console.log(i << j); //binary calculation of i and j, left shift operator,
// it shifts the bits of the number to the left by the number of positions specified by the second operand.
//10>>j = 10>>5 = 0, because 10 in binary is 1010, and shifting it 5 positions to the right results in 0000.
console.log(i >> j);
console.log(i >>> j);

let k = i > j ? "i is greater than j" : "i is less than or equal to j";

//condition ? true_option_1 : false_option_2

console.log(k);

//functions: it is a block of code which is used to perform the operation on the data,
// it is a container which is used to store the data in it.
// function declaration, function expression, arrow function
