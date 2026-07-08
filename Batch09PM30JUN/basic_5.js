//what is function?: A function is a block of code that performs a specific task.
//  It can be called multiple times throughout the program and can accept parameters and return values.

//example of funtion: calculate the sum of two numbers( + , - , * , / , % , ** )

//code--chip---->Call---->execute

//function declaration
// function display() {
//   //function body

//   console.log("Hello World");
// }

// display(); //calling

//console.log(display());
// function call
//parameters: it is a variable that is used to pass the value to the function, it is used to accept the value from the function call.

// function sum(a, b, c, d, e, f, g) {
//   // paramerized function
//   console.log(a + b + c + d + e + f + g);
// }

// sum(1, 2, 3, 4, 5, 6, 7); // function call with arguments

//1 + 2 + undefined + undefined + undefined + undefined + undefined = NaN
//system input: it is a way to get the input from the user, it is used to accept the value from the user,
// it is used to get  input from the user in the form of string, number, boolean, object, array, function.
//function gets values from console and returns the value to the function,
//  it is used to get the input from the user in the form of string, number, boolean, object, array, function.

//return statement: it is a keyword which is used to return the value from the function,
// it is used to return the value from the function to the function call,

// function add(a, b) {
//   return a + b; // return statement
// }

// //let i = add(1, 2); //
// //console.log(i); // 3

// console.log(add(1, 2)); // 3 // calling of function and printing the return value of the function in the console

// //annonymous function: it is a function which does not have a name, it is used to create a function without a name,

// let sub = function (a, b) {
//   return a - b;
// };

// let div = function () {
//   console.log("This is an anonymous function");
// };

// div();

// let mul = function (a, b) {
//   console.log("This is an anonymous function for multiplication");
//   return a * b;
// };

// console.log(mul(2, 3)); // calling of anonymous function and printing the return value of the function in the console

//arrow function: it is a function which is used to create a function in a shorter way,
// it is used to create a function without a name,

let arrow = (a, b) => {
  return a + b;
};
console.log(arrow(1, 2)); // calling of arrow function and printing the return value of the function in the console

function greet1(name) {
  console.log("Hello" + name);
}
let greet2 = (name) => {
  console.log("Hello" + name);
};
greet1("Abhishek");

greet2("Abhishek");

let greet3 = () => {
  console.log("Hello");
};

greet3();

//Parameters => body

function add1(a, b) {
  return a + b;
}

let add2 = (a, b) => {
  return a + b;
};

console.log(add1(1, 2));
console.log(add2(1, 2));

let add3 = (a, b) => a + b;

console.log(add3(1, 2));
