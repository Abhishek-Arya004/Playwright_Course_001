//loops in javascript: it is a block of code which is used to perform the operation on the data,
//  it is used to repeat the block of code for a specific number of times or until a specific condition is met.

//print table  of 2

//for loop: it is a block of code which is used to perform the operation on the data,
// it is used to repeat the block of code for a specific number of times or until a specific condition is met.

//for loop syntax:
//for(initialization; condition; increment/decrement){
//block of code
//}

//initialization: it is used to initialize the variable, it is executed only once at the beginning of the loop.
//condition: it is used to check the condition, if the condition is true then the block of code is executed, if the condition is false then the loop is terminated.
//increment/decrement: it is used to increment or decrement the variable, it is executed after each iteration of the loop.

// for (let i = 1; i <= 10; i++) {
//   // i++ = i + 1;
//   console.log(i * 3);
// }

//do while loop

//do while loop syntax:
//do{
//block of code
//}while(condition);

// let j = 1;

// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

//while loop syntax:

//while(condition){
//block of code

//increment/decrement
//}

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//index            0       1        2         3         4
const fruits = ["apple", "banana", "mango", "grapes", "orange"];
console.log(fruits[0]);

//for in loop: it is used to iterate over the properties of an object.
//for of loop: it is used to iterate over the values of an iterable object.

for (let x in fruits) {
  console.log(fruits[x]);
}

for (let y of fruits) {
  console.log(y);
}

/*

******
******
******
****** 

*/

for (let i = 1; i <= 4; i++) {
  let str = "";
  console.log(str);

  for (let j = 1; j <= 6; j++) {
    str += "  *"; // str = str + "  *";
  }
  console.log(str);
}

/*
*
**
***
****
*****


*/

/*

*****
****
***
**
*

*/
