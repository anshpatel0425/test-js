// loop on object 

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

// For in loop

for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
    
    
}

// for in loop on array

 const programming = ["js", "rb", "py", "cpp", "swift"]

 for (const key in programming) {
    console.log(`${programming[key]}`);
    
}