//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ansh",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ******************************************************

// Memory

let myytname = "AnshPatel";

let anothername = myytname;
anothername = "Rish"


console.log(anothername);
console.log(myytname);

let userOne = {
    code: "Ansh",
    age: 20
}

let userTwo = userOne;

userTwo.code = "RISH"

console.log(userOne.code);
console.log(userTwo.code);

