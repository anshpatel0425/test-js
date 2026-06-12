let name = "Ansh"
let age = 20

console.log(name + age);  /*outdated way*/

console.log(`my name is ${name} and my age is ${age}`); /*latest way */


// Another way to declare strings

let gameName = new String('Rish-patel')

console.log(gameName[0]);

// other properties of string that we can use 

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));


let newGameName = gameName.substring(0, 3) /*the end value will be not count so the output will be Ris*/
console.log(newGameName);


let gameName2 = gameName.slice(-8, 4) /*we can use negative values in slice and when we use negative value it starts from reverse. it gives the reult of 8th last to 4th index*/
console.log(gameName2);


let stringOne = "     Ansh     "  /*we can use trim function to remove unwanted space*/
stringTwo = stringOne.trim();
console.log(stringOne);
console.log(stringTwo);


let url = "anshpatel.com/ansh%20patel"  /*replace is used to replace characters */
console.log(url.replace('%20', '-'));


// we can ask questions to strings

console.log(stringOne.includes('Ansh')); /*output will be true*/
 console.log(stringOne.includes('rish')) /*output will be false */


//  split 
let myname = "Ansh-K-Patel"  /*we can use split function to store these three words as a array */
console.log(myname.split('-'));


// there are many more properties we can learn by documentation