// example

let myarr = [0, 1, 2, 3, 4, 5];

let myarr2 = ["ansh", 4, true, "rish"];

// other ways to declare arrays
let myarr3 = new Array(1, 5, 4, "monday", true) /*in this type it does not need square brackets */

console.log(myarr[2]);
console.log(myarr2[2]);

// interview important
/*when we copy array it created shallow copy of array means both array shares rhe same reference location */
/* another is deep copy means it does not share same reference loaction */

// methods in array 
myarr2.push(23);
console.log(myarr2); /*used to add value in arrays */

myarr2.pop() /*used to delete last element of the array */
console.log(myarr2);


// use of unshift
myarr2.unshift(10); /*it adds value at the start of the array and shifts all the values with 1 index */
console.log(myarr2); /*not used much in production level because it creates load on device by shifting all the elements */


myarr2.shift() /*used to delete 1st element of the array */
console.log(myarr2);

// question type methods

console.log(myarr2.includes(4));
console.log(myarr2.includes("Patel"));

console.log(myarr2.indexOf("rish"));
console.log(myarr2.indexOf("Patel")); /*shows -1 when element is not included in array */

// used many times
let newArr = myarr.join(); /*copy all the elements of the arrays but tin string format */
console.log(myarr);
console.log(newArr);
console.log(typeof newArr);


// slice operation

console.log(" A", myarr);

let myn1 = myarr.slice(1, 3) /*includes start argument but not include end argument */

console.log(myn1);
console.log("B", myarr);


// splice operation
let myn2 = myarr.splice(1, 3) /*it includes both start and end values */

/*the major difference is splice remove the portion of the spliced part from the original array */
console.log("C", myarr);

console.log(myn2);

