//Strings
//UI Automation
//API testing
//Json Validation
//Data Validation
//File Handling
//Interview questions

// sequence of characters : a , b  , c , s ! @ # % & * " "
// Double quotes " "
// single quotes ' '
//Backtick ` ` (template literals)

let name = "Abhishek";

let city = "Delhi";

let chr = "a";

// " he's mine "  |. ' this is  nice name "ARYA" ';

let company = `openAi`;

let str1 = "Hello";

let str2 = "word";

let str3 = `javascript`;
//              0 1 2 3 4
//.  DELHI ---> D E L H I

console.log(str1.length);

console.log(str1[1]);

console.log(str1.charAt(4)); // postion

console.log(str1.at(-2));

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

let username = "  admian    ";

console.log(username);

console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

console.log(username.includes("ab"));

console.log(username.startsWith(" ")); // true or false

console.log(username.endsWith(" "));

console.log(username.indexOf("a"));

console.log(username.lastIndexOf("a"));

//slice()

//Extract part of string

let text = "Play,wright,Play";

console.log(text.slice(0, 4));

console.log(text.slice(-5));

console.log(text);

console.log(text.substring(0, 4)); // does not suppoprt negative index

console.log(text.replace("Play", "good"));

console.log(text.replaceAll("Play", "good"));

let splitarr = text.split(",");

console.log(splitarr);

console.log(splitarr.join("-"));

let first = "this is ";

let second = "World";

console.log(first.concat(second));
