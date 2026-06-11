"use strict";  
// tells browser that we are using latest syntax currently "use strict" is used by default.

alert (3 +3); 
// this leads to error because we are coding in file not in browser console
// this statement is valid in console tab. learn better ways in future.

// this is better practice and improves code readablity.
console.log(3 + 3); 
console.log("Ansh");

// this is another way but not reccomeneded because it spoils the code readablity.
console.log(3 + 3); console.log("Ansh"); 

// Data types

// Numbers 
// range of numbers is 2 to power 54.
let Id= 25;

// string
let Name = "Rish";

// Boolean
let IsUSerLoggedIn = true;

// BigInt
// not used so much because it stores very large number data

// null
// null means empty value
let state= null;

// undefined
// value is not assigned yet.
let City;


// object will be learned in future.



// typeof
// used to know type of data.
console.log(typeof "Ansh");

console.log(typeof null);
// output is object.

console.log(typeof undefined);
// output is undefined.

