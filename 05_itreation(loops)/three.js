// For of loop

// basic syntax
// for (const element of object) {
    
// }

// example of for of loop

let myarr = [1, 2, 3, 4, 5]

for (const num of myarr) {
    // console.log(num);
    
}

// for of loop on string

let greeting = "Hello World"

for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}

// new datatype Map

const map = new Map()

map.set("IN", "India")
map.set("FR", "France")
map.set("CH", "Chaina")

// console.log(map);
// maps always gives unique values and ignores duplicate values

map.set("IN", "India")
map.set("IN", "India")
map.set("FR", "France")
map.set("CH", "Chaina")

console.log(map);

// for of loop on map

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}