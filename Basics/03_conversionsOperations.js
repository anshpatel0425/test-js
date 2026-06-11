let score = "33"
// currently it is stored as string
console.log(typeof score);


let valueInNUmber = Number(score);
// it is now converted into number
console.log(typeof (valueInNUmber));


let marks = "33abs"
// this is not a valid number 

let valueMarks = Number(marks);
// when we convert this type of not valid number still it doesn't throw errors.

console.log(typeof (valueMarks));
console.log(valueMarks);
//This will not throw error it shows output as special datatype NaN 

let grade = null
// it converts null as 0
let valueGrade = Number(grade);

console.log(valueGrade);


let percentage = undefined;
// it converts undefined as NaN

let valuePercentage = Number(percentage);

console.log(valuePercentage);


let argument = true;
// it shows 1 for true and 0 for false

let valueArgument = Number(argument);

console.log(valueArgument);

let name = "Ansh"
// it converts strings into NaN

let valueName = Number(name);

console.log(valueName);


// convert number into boolean value

let IsLoggedIn = 1

let booleanIsLoggedIn = Boolean(IsLoggedIn);

console.log(booleanIsLoggedIn);


// convert string into boolean
let names = "Ansh"
// it shows true for strings and false for empty string ""
let valueNames = Boolean(names);

console.log(valueNames);

// number to string
let someNumber = 25

let valueSomeNumber = String(someNumber);
console.log(valueSomeNumber);
// it looks like a number but when we use type of it clears that it is string
console.log(typeof valueSomeNumber);


// *********************** Operations ****************

let value = 8
let negValue = -value;
console.log(negValue);

// Basic maths operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
// used for 2 to the power 3
console.log(2/3);
console.log(2%3);


// joint two strings
let str1 = "hello"
let str2 = " Ansh"

let str3 = str1 + str2;
console.log(str3);

// Some Complex Operations

console.log("1" + 2);  /*Output = 12*/
console.log(1 + "2"); /*Output = 12*/
console.log("1" + 2 + 2); /*Output = 122*/
console.log(1 + 2 + "2"); /*Output = 32*/


console.log(+true); /*Output = 1    automatically converts the boolean into number */
console.log(+""); /*Output = 0   empty string converts into 0*/


let num1, num2, num3

num1 = num2 = num3 = 2+2;
console.log(num1);


// incremental operations

let gameCounter = 100
++gameCounter /*prefix operator increment value then use */
console.log(gameCounter);
gameCounter++ /*postfix operator use value then increment it */
console.log(gameCounter);










