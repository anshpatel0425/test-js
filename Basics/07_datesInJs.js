let mydate = new Date();

console.log(mydate);

// some operations on date

console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());


// type of date
console.log(typeof mydate); /*its an Object */

// custom date

let myCreatedDate = new Date(2050, 7, 1); /* syntax (year, month(0-11), date, hour, minits, second, milisecond) */
console.log(myCreatedDate.toDateString());


// declare date in YY-MM-DD format 

let Date1 = new Date("2040-08-01") /*in this month counts from 1-12 */
console.log(Date1.toLocaleString());

// format: MM-DD-YY
let Date2 = new Date("08-01-2035");
console.log(Date2.toLocaleString());

// Time stamp in js 

let myTimeStamp = Date.now();
console.log(myTimeStamp);

// way to compare dates

let date7 = new Date("2026-08-01");
let date8 = new Date("2025-08-25")
// for comparison convert it into milisecond 

console.log(date7.getTime());
console.log(date8.getTime());

// convert miliseconds into seconds

let date9 = Date.now();
console.log(Math.floor(date9/1000));


// other useful methods of Dates

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); /* 0-11 */
console.log(newDate.getHours());
console.log(newDate.getDay());

// important

newDate.toLocaleString('default', {
    weekday: "long", /*ctrl + space for suggestions */
})

