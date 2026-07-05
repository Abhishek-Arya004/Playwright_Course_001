var a = 10;
var b = 2;
var c = 30;

var d = "20";

console.log(a + b);

console.log(2 + 3);

console.log(2 > 3);

console.log(a > b || a < c);
console.log(a > b && a < c);

console.log(d == b);
console.log(d === b);

console.log(a != b);

console.log(a | b);

console.log(a & b);
console.log(a * b);

console.log(a ** b); // exponential

console.log(a++);
10;
//11
console.log(a--); //11
//10

console.log(++a); //11
console.log(--a); //10

//Prefix : ++i = i+1

//Posfix : i++ =i+1

//Priority:  Prefix > Method > posfix
console.log(a+=3); a = a + 3;

console.log(a-=3); a = a + 3;

console.log(a*=3); a = a + 3;

console.log(true &&= 10);