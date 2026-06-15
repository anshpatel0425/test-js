// example of this keyword

const user = {
    username: "Ansh",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this); 
        
    }
}
user.welcomeMessage()
user.username = "Rish"  /*when we use this keyword it lets to change username and print it */
user.welcomeMessage()

// this is used to refere current context
console.log(this);


// we can't use this in functions
function One(){
    let username= "Ansh"
    console.log(this.username) /*it will give undefined as output */
}
One()

// Arrow functions

const MyName = () => { /*we can replace function word with => */
    let username = "Patel"
    console.log(this.username);
    
}
MyName()

// exaple of arrow function

const addTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(5, 4));

// implicit arrow function means one line 

const addTWO = (num1, num2) => num1 + num2  /*it eliminates need of {} and return */
console.log(addTWO(10, 15));

// another way
const addTwoNew = (num1, num2) => (num1 + num2)
console.log(addTwoNew(25, 50));


// return object using arrow function

const Obj = (num1, num2) => {username: "ansh"} /*it is wrong way it give undefined */
console.log(Obj());

// right way
const obj1 = (num1, num2) => ({username: "Ansh"})
console.log(obj1());

