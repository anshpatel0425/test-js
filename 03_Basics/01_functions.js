// function means wraping code in one container and use easily
console.log("A");
console.log("N");
console.log("S");
console.log("H");
// this way is very lengthy and not optimal
function MyName(){
    console.log("A");
    console.log("N");
    console.log("s");
    console.log("H");
}
// now whenever i want to print those line i don't need to write it every time
MyName(); /*i can use entire code with just this line */



// basic example of function
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}
addTwoNumbers(4, 25);
// some complex problem in this
addTwoNumbers(3, "4") /*it treats both numbers as a string */
addTwoNumbers(4, "a") /*same as above */

// parameters and argument
// when we take input in function declaration it's called parameter
// when we take input in function calling it's called argument


// ways to store function result in variable
// wrong Way 
function NumberSum(number1, number2){
    console.log(number1 + number2);
    
}
const result = NumberSum(3, 4);
console.log(result); /*it shows undefined in result */

// right way
function myNum (number1, number2){
    let result = number1 + number2
    return result /*when we use return all code after return will not be execute */
    console.log("ansh"); /*this will be not executed */
    
}
const result1 = myNum(8, 10);
console.log(result1);

// example of function
function UserLogin(username){
    return `${username} just logged in`
}
UserLogin("Ansh") /*this will not show anything because we didn't printed it */
console.log(UserLogin("Rish"));
// function call without passing a value

console.log(UserLogin()); /*shows undefined */

// basic if else in function
function MyNewName(username = "sam"){ /*this sam will used when user not give any inputs */
    if(!username){
        console.log("Please enter your username");
        return
        
    }
    return `${username} just logged in`
}
console.log(MyNewName()); /*this will use sam as a input */
console.log(MyNewName("Patel"));

