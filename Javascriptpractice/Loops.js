for (let i = 0; i < 5; i++) {
  if (i == 3) {
    //break;
    continue;
  }

  console.log(i);
}

console.log("this is out of loop");

/* 
   * * * * *
   * * * * * 
   * * * * * 
   * * * * * 
   
   */

let n = 5;

for (let i = 1; i <= n; i++) {
  // number of rows
  let row = "";

  for (let j = 1; j <= 7; j++) {
    // number of values /cloumn per row
    row = row + "*  ";
  }
  console.log(row);
}
//* * * *

console.log("++++++++++++++++++++++++++++++");

let n1 = 5;

for (let i = 1; i <= n1; i++) {
  // number of rows
  let row = "";

  for (let j = 1; j <= i; j++) {
    // number of values /cloumn per row
    row = row + "*  ";
  }
  console.log(row);
}
