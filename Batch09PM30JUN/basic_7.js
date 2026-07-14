const numbers = [1, 2, 3, 4, 5];

// values ----> Square ---->Create new array

// [ 1 , 4, 9, 16 , 25]

const sqt = [];

for (let i = 0; i < numbers.length; i++) {
  sqt[i] = numbers[i] * numbers[i];
}

console.log(sqt);

const squares = numbers.map((num) => num * num);

console.log(squares);

//filer

const even = numbers.filter((num) => num % 2 === 0);

//reduce ()

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);
