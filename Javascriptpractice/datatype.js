/*

String
Number
Boolean
null
undefined
Object.   */

var i = 10;

console.log(typeof i);

var j = "arya";

console.log(typeof j);

var k = true;

console.log(typeof k);

var l = null; //intentionaly empty value

console.log(l == undefined); // == treats undefine and null same

console.log(typeof l);// object

var m; // undefined

console.log(m === null); // === it checkes only null

console.log(typeof m);

console.log(null == undefined);// true

console.log(null === undefined); false

console.log(typeof null); //object

console.log(typeof undefined); // undefined

console.log(null + 1); // 1

console.log(undefined + 1);
//Nan;

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); //true

var z = null;

if (z == null) {
  console.log("null is undefined");
}

let x; // x = undefined// it is possible but it is not recommended

console.log(x);


var a = 10;
var b = 20;

console.log(x);