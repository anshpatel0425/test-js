const score = 400

console.log(score);


const marks = new Number(100)
console.log(marks);

// properties of numbers
console.log(marks.toString());
// after converting to string we can also use properties of strings

console.log(marks.toString().length);


console.log(marks.toFixed(2)); /*used to show numbers after decimal */


const grade = 24.8966
console.log(grade.toPrecision(3)); /*it shows the total number value like in this case 3 digit and automatically round off other numbers*/


const hundreds = 1000000
console.log(hundreds.toLocaleString()); /*converts this according to US standars */
console.log(hundreds.toLocaleString('en-IN')); /*converts in indian standars */


//  *****************************  Maths *****************************

console.log(Math);

console.log(Math.abs(-4)); /*used to converts negative value in positive */

console.log(Math.round(8.3)); /*used to round off numbers */

console.log(Math.ceil(5.2)); /*always choose bigger number for round off like in this output is 6*/

console.log(Math.floor(9.8)); /*always choose lower value for round off like in this output is 9 */



console.log(Math.min(5, 3, 8, 6)); /*used to find minimum value */

console.log(Math.max(5, 8, 4, 9, 6)); /*used to find maximum value */



// important

console.log(Math.random());
console.log((Math.random() * 10) +1);
console.log(Math.floor(Math.random() * 10) +1)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max- min +1)) + min);
