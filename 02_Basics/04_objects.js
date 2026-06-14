// Singleton Object

const User = new Object();

// another way to add values in object 
User.id = "Ansh0425";
User.name = "Ansh";
User.city = "Unjha";
User.IsLoggedIn = false;

console.log(User);

// objects in another objects called object nesting
const regularUser = {
    email : "ansh123@gmail.com",
    FullName: {
        userFullName : {
            firstName: "Ansh",  /*this is called nested object */
            lastName: "Patel",
        }
    }
}
// ways to access nested object
console.log(regularUser.FullName.userFullName.firstName);

// merging of objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const onj3 = {obj1, obj2}; /*not a good way because it shows object inside object not a single merged object */
console.log(onj3);

// better way
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// most use method
const onj5 = {...obj1, ...obj2};
console.log(onj5);


// useful in databases
const myUser = {
    name : "Ansh",
    id: "12Ansh",
    email: "ansh12@gmail.com",
    IsLoggedIn: "false",
}
console.log(Object.keys(myUser)); /*used to access all the keys of object and store it in array */

console.log(Object.values(myUser));

console.log(Object.entries(myUser)); /*convert every key and value pairs into different array */

// very useful to check the property exixts in object or not

console.log(myUser.hasOwnProperty('IsLoggedIn')); /*automatically checks the property exixtance */


// destructuring in object 

const course = {
    courseName : "js in hindi",
    coursePrice : "999",
    courseInstuctor : "hitesh",
}
// basic way to acces value
console.log(course.courseInstuctor);
// optimal way to access value
const {courseInstuctor} = course;
console.log(courseInstuctor);
// another way
const {courseInstuctor: instuctor} = course;
console.log(instuctor);
