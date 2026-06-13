let marvel_heros = ["thor", "spiderman", "ironman"];
let dc_heros = ["flash", "superman", "batman"];

// marvel_heros.push(dc_heros);
console.log(marvel_heros); /*not a good way it join both array but produce result like one array in another array and count entire array as a 1 element like in this case there are 4 elements*/

// console.log(marvel_heros[3][1]);

// another method to joint array

let allheros = marvel_heros.concat(dc_heros); /*it returns new array with all elements of both arrays */
console.log(allheros);

// another way to joint arrays
let new_heros = [...marvel_heros, ...dc_heros] /*known as spread operator */
console.log(new_heros);


// complex situation 
let n1 = [1, 2, 3, 4, [6, 8, 9], 7, 3, [4, 5, 8, [9, 2, 1], 5]]

let n2 = n1.flat(3) /*flat takes number of depth as argument like in this 3 */
console.log(n2); 
n2= n1.flat(Infinity) /*in case we don't know the depth */
console.log();


// important 
// about converting other datatypes in array

console.log(Array.isArray("ansh")); /*to check whether the data is array or not */

// to convert in array
console.log(Array.from("ansh"));

// complex cases
console.log(Array.from({name: "Ansh"})); /*it returns empty array when unable to convert in array */


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); /*of is used to convert in arrays */
