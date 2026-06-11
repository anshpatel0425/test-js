console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);


// tricky

console.log("2" > 1);/*output = true because it automatically converts the string into number*/
console.log("02" > 1); /*output = true same as above*/

// this is not good practice so make sure the comparing variables should be of same datatypes


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


// === stictly checks means checks the datatype along with value

console.log("2" === 2); /*output = false*/
