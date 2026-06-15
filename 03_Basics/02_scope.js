{} /*called scope */
// basic example of scope

if(true){
    let a=10
    const b=20
    var c=30
}
// now this three variable should not produce result outside block of if to maintain block scope
// console.log(a); /*its not defined outside the code block that we want */
// console.log(b); /*same as above */
// console.log(c); /*its not maintaining block scope it gives result */


// global scope and block scope

let myName = "Ansh";

if (true){
    let myName= "Rish"
    console.log("INNER Name: ", myName);
    
}
console.log(myName); /*declared outside the block will act as a global scope */
