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

// nested scope
function one(){
    const username = "Patel"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);  /*website is not accesiable because it's scope is ended in function two */
    
    two()
}
one()


// errors in if else scope
if(true){
    const username = "RISH"
    if(username === "RISH"){
        const website = " website"
        console.log(username + website);
        
    }
    // console.log(website); this will give errors 
    
}
// console.log(username); this also gives errors


// ++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}
addOne(5) /*this will not print any result just returns the result because we didn't used console log */

// another way
const addTwo = function(num){
    return num + 2
}
addTwo(5) /*this will not print any result just returns the result because we didn't used console log */


// complex

console.log(addThree(5)); /*using function before declartion is valid */


function addThree(num){
    return num + 3
}

console.log(addFour(5)); /*this will give error because it doesn't allowed in variable to use it before declartion */

const addFour = function(num){
    return num + 4
}