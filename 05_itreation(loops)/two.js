// while loop 
// example

let index = 0

while (index <= 10) {
    console.log(`value of i is ${index}`);
    index = index + 2;
}

// array loop with while

let myarray = ["flash", "batman", "superman"]
let arr = 0

while (arr < myarray.length) {
    // console.log(`value of array is ${myarray[arr]}`);
    arr = arr +1
}

// Do while loop

let score = 1

do {
    console.log(`value of score is ${score}`);
    score++
} while (score <= 10);

// do - while complexity

let marks = 11
do {
    console.log(`marks is ${marks}`);
    marks++
    
} while (marks<=10); /*it always print 1 statement than check condition means do first then check */