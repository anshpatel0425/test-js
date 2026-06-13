// if we declare object with constructor it become singleton.
// Object.create  constructor method


// if we declare objects using litrals it does not make singleton
let jsUser = {
    name : "Ansh",
    age : 20,
    city : "Unjha",
    email : "ansh@abc",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"] 
}
// easy way to access the object but not used much
console.log(jsUser.age);

// another way
console.log(jsUser["name"]);
// reason to use this method

let myobject = {
    "study" : "Javascript"
}
// now i can't access it with 1st way like console.log(myobject.study)
// i have to use second method to access the values
console.log(myobject["study"]);


// using symbol in object
// wrong way
let mysym = Symbol("key1");

let myO = {
    mysym : "mykey1" /* this produce result but in form of string */
}
console.log(myO["mysym"]);
console.log(typeof myO.mysym);

// real way
let myO2 = {
    [mysym]: "mykey2" /*use square brackets */
}
console.log(myO2[mysym]);


// ways to change the values of email
jsUser.city = "Patan";
console.log(jsUser["city"]);

// to lock the object means no data will be changed
// Object.freeze(jsUser);
jsUser.email = "rish@1234"; /*this changes will not be done because we freezed the object */
console.log(jsUser["email"]);


// use functions
jsUser.greetings = function(){
    console.log("Hello Js User");
}
console.log(jsUser.greetings());

// another way
jsUser.greetingsTwo = function(){
    console.log(`hello Js User, ${this.name}`);
}
console.log(jsUser.greetingsTwo());
