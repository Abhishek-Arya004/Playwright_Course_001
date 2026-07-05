//String : sequenc o characters

//"a". 'A'
//           0 1 2 3 4 5 6 7
let name1 = "Abhishek.arya@gmail.com";
let numbers = "121212";

console.log(name1 + " " + numbers);

let srt = new String("hello");
console.log("str");

//console.log(name1.length);

console.log(name1[5]);

console.log(name1.charAt(5));

console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.trim());
console.log(name1.indexOf("h"));
console.log(name1.lastIndexOf("h"));

console.log(name1.includes("hello"));

console.log(name1.slice(2, 4));
// starting 2 index-----2 (include)
//end -------->         4(exclude)
console.log(name1);

console.log(name1.slice(-5));
console.log(name1.substring(0, 3));

console.log(name1.replace("Abhi", "hello"));

let splits_name = name1.split("@");

console.log(splits_name);

let str1 = "Hello";
let str2 = "word";
console.log(str1 + " " + str2);

console.log(str1.concat(" ", str2));

console.log(`my name1 is ${str1} and age is ${str2}`);

console.log(Number(numbers));
//console.log(Number(str1));
console.log(parseInt(numbers));
console.log(parseInt(numbers));

let text = 'He is my "Boss" ';
console.log(text);

let a = "apple";
let b = "pple";

console.log(a === b);
console.log(a.split("").reverse().join(""));

let str = "Javascript";//vowels ---->a i o e u
