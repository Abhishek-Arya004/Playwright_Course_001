//module is simple object which is used to export the functionality from one file to another file
// function or variable can be exported from one file and imported in another file using module.
// exports and require() function.

//class| variables and Fucntions---->Modules

//export and import a function
//export a function from one file and import it in another file using module.exports and require() function.

//export a variable from one file and import it in another file using module.exports and require() function.

//class1---Variable or function------->Export --->class2---Import---->Variable or function

//Class---export, Variable or function---->import---->Class---Variable or function

import LoginPage from "./Moduledemo3.js";
//import * as Math from "./Moduledemo2.js";
import div, { add as addtion, sub, mul } from "./Moduledemo2.js";

//console.log(Math.add(5, 3));
console.log(addtion(5, 3));
//console.log(i);
//console.log(sub(5, 3));
//console.log(mul(5, 3));
//console.log(div(5, 3));
//console.log(employee.name);

const login = new LoginPage();
//login.login1();
login.A();
login.B();
login.login1();

console.log(div);
