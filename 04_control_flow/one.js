//  if
// if (condition){
//     statement
// }
// example
const IsUserLoggedIn = true

if(IsUserLoggedIn){
    console.log(`welcome to the website`);
}
// types of operator 
//  >, <, <=, >=, ==, !=, ===. !==

// example

const temprature = 41

if(temprature < 50){
    console.log("temprature is less than 50");
    
} else{
    console.log("temprature is grater than 50");
    
}
// single line IF
const score = 200
if(score > 100) console.log("you are great");

// nested IF-ELSE

const money = 1000

if(money < 500){
    console.log("money is less than 500");
}else if(money < 750){
    console.log("money is less than 750");
}else if(money < 900){
    console.log("money is less than 900");
}else {
    console.log("money is less than 1200");
    
}

// Real life example

const Is_User_Logged_in = true
const Debit_Card = true

if(Is_User_Logged_in && Debit_Card){
    console.log("You Can Shop");
}

const LoggedInFromGoogle = true
const LoggedInFromEmail = false

if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("welcome to the shopping journey");
    
}