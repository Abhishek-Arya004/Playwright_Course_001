// var mark = Array(6);

// console.log(mark);

// var mark = new Array(20, 21, 23, 24, 25, 26);

// console.log(mark); // complete arrya

// //console.log(mark[1]); //21

// mark.push(30); // add element at end of arrya

// //console.log(mark);

// mark.unshift(19); // add element at starting of array

// mark.unshift(18);

// //console.log(mark);

// mark.pop(); // remove element from end of array

// //console.log(mark);

// //console.log(subarray);

// //console.log(mark.indexOf(23)); // get the index of any elementt

// //console.log(mark.length); // retun lenth of an array

// //console.log(mark.at(2)); // return the element at given index

// sliced1 = mark.slice(4); // new array will be created from index 4 to till end

// console.log(sliced1); //The slice() method creates a new array.The slice()
// //  method does not remove any elements from the source array.

// sliced2 = mark.slice(1, 4); // Late element id not included

// //console.log(sliced2);

// stringArray = mark.toString();

// //console.log(stringArray); // it will return element of array in comma seperated string

// //console.log(mark);

// spliced3 = mark.toSpliced(1, 3); // start from index 1 , remove 3 elements in new array
// // it does not changed new array
// //array.toSpliced(start, deleteCount, item1, item2, ...)
// //console.log(spliced3);

// //console.log(mark);

// subarray = mark.splice(2, 5); // splice the array from main array starting from 2 posiiton then remove 5 elements after that

// //array.splice(start, deleteCount, item1, item2, ...);

// //Parameters:
// //start → index where operation begins
// //deleteCount → number of elements to remove
// //item1, item2... → elements to add (optional)
// // can be used for deletion, replacement and addition
// let sum = 0;
// let total = mark.reduce((sum, mark) => sum + mark, 0);

// console.log(total);

// let score = [12, 13, 14, 15, 16, 17];

// let newsocors = score.filter((evenscores) => evenscores % 2 == 0);

// console.log(newsocors);

// let sumofscore = 0;
// for (let i = 0; i < score.length; i++) {
//   sumofscore = sumofscore + score[i];
// }
// console.log(sumofscore);

// let sumfromred = score.reduce((sum, mark) => sum + mark, 0);

// console.log(sumfromred);

// let mappedarray = score.map((values) => values * 3);

// console.log(mappedarray);

// let sum1 = 0;
// let totalvalues = mappedarray.reduce((sum1, values) => sum1 + values, 0);
// console.log(totalvalues);

// let finalarry = [12, 13, 14, 15, 16, 17, 18];

// let finaltotal = finalarry
//   .filter((evenvalues) => evenvalues % 2 == 0)
//   .map((values) => values * 2)
//   .reduce((sum, mark) => sum + mark, 0);
// console.log(finaltotal);

// let fruits = ["mango", "banana", "grapes", "guava"];

// console.log(fruits.sort());

// let num = [12, 13, 15, 11, 10, 3];

// console.log(num.sort());

// num.sort(function (a, b) {
//   return a - b;
// });
// console.log(num.sort((a, b) => a - b)); // buble sort

//Array----> NUMBERS-----> BIGGER ONE AND LOWEST

let numbers = [1, 2, 56, 78, 90];//lowest/greates

//array--string--->Array
//loop