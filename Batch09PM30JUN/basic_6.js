//difference between == and ===

// == (loose equality)

// it compares values after perfroming type conversion

console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1); // 1 = true and 0 false

console.log(true === 1);

// === (stricy Equality) || both value and type should be match

console.log(10 === "10");

//== | compare values --->Convert types( value)
//===| compare values only ( comparison type and value)

console.log(null == undefined);

console.log(null === undefined);

console.log(10 == "AB");

console.log("" == 0);

console.log("" === 0);

console.log([] == false);

console.log([] === false);
