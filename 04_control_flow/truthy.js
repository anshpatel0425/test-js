// truthy statements example

const UserEmail = "ansh@abc"

if (UserEmail){
    console.log("Got the user's email");
    
} else{
    console.log("Don't have user's email");
    
}

// truthy values means we assume that the statement is true
// another example

const UserName = ""

if(UserName){
    console.log(`welcome ${UserName}`);
    
} else{
    console.log("Tell us your name");   /*empty string means false value */
    
} 


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", {}, function(){}, [],


// check array is empty or not

const UserId = []

if(UserId.length === 0){
    console.log("Array is empty");
}

// check objectis empty or not

const EmptyObj = {}

if(Object.keys(EmptyObj).length === 0){
    console.log("Object is empty");
    
}


// nullish coalescing  operator (??): null, undefined
// example

let val1;

// val1 = 5 ?? 10

// val1 = null ?? 20

val1 = undefined ?? 30

console.log(val1);


// terniary operator
// syntax

// condition ? true : false 

// exaple of terniary operator

const IceTeaPrice = 100

IceTeaPrice >= 80 ? console.log("Ice Tea is On way") : console.log("Price is high");

