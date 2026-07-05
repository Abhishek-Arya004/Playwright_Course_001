//scope defines accessibility of variables, functions and objects in some particular part of your code.
//  In JavaScript, there are two types of scope: global scope and local scope.
// Global scope means that a variable or function is accessible from anywhere in your code,
// while local scope means that a variable or function is only accessible within the block of code where it is defined.

// var x = 10; // global variable

// function myFunction() {
//   var y = 20; // local variable
//   console.log(x); // can access global variable
//   console.log(y); // can access local variable
// }

// myFunction();

// console.log(x); // can access global variable

// console.log(y); // will throw an error because y is not defined in the global scope

// let a = 5; // global variable
// let b = 10; // global variable
// function myFunction2() {
//   let c = 15; // local variable
//   console.log(a); // can access global variable
//   console.log(b); // can access global variable
//   console.log(c); // can access local variable
// }
// myFunction2();
// console.log(a); // can access global variable
// console.log(b); // can access global variable
// console.log(c); // will throw an error because c is not defined in the global scope

// //code block scope
// if (true) {
//   let d = 20; // block scope variable
//   //console.log(d); // can access block scope variable
// }
//console.log(d); // will throw an error because d is not defined in the global scope
//variables declared with var are function scoped, while variables declared with let and const are block scoped.
// This means that variables declared with var are accessible throughout the entire function in which they are declared,
// while variables declared with let and const are only accessible within the block of code in which they are declared.

// let x = 20; // global variable
// function myFunction3() {
//   let x = 25;
//   console.log(x);
// } // local variable with the same name as global variable
// myFunction3();

// console.log(x); // will print 20 because the local variable x is not accessible outside the function, so it will use the global variable x.
//encapsulation is the concept of bundling data and methods that operate on that data within a single unit,
// such as an object or a class.
// It allows you to hide the internal details of an object and only expose a public interface for interacting with that object.
// This can help to improve code organization, reduce complexity,
// and increase security by preventing unauthorized access to the internal state of an object.
// In JavaScript, encapsulation can be achieved using closures, modules, and classes.

//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in your code, without getting an error.
// However, only the declarations are hoisted, not the initializations. So if you try to access a variable before it is initialized, you will get undefined.

console.log(x); // undefined
var x = 10; // variable declaration and initialization

myFunction(); // can call function before it is declared

function myFunction() {
  console.log("Hello, World!");
}

// In the above example, the variable x is hoisted to the top of the scope, but its initialization is not hoisted. Therefore, when we try to access x before it is initialized, we get undefined. The function myFunction is also hoisted to the top of the scope,
// so we can call it before it is declared without any issues.

// In JavaScript, classes and constructor functions are both used to create objects and define their properties and methods. However, there are some differences between the two:

// 1. Syntax: Classes use a more modern and concise syntax, while constructor functions use the traditional function syntax.

// 2. Inheritance: Classes support inheritance through the extends keyword, while constructor functions use the prototype chain to achieve inheritance.

// 3. Hoisting: Constructor functions are hoisted, meaning they can be called before they are defined in the code. Classes, on the other hand, are not hoisted and must be defined before they are used.

// 4. Strict mode: Classes are always in strict mode, while constructor functions can be used in non-strict mode.

// Overall, classes provide a more structured and organized way to define objects and their behavior, while constructor functions offer more flexibility and can be used in a variety of ways.
