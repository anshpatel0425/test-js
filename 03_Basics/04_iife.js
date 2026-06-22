// Immediately Invoked Function Expression (IIFE)

// simple function call

function One() {
    console.log(`DB Connected`);
}
One();

// IIFE function 
(function Two(){
    console.log(`DB Connected 2`);
})();    /*this will immediately execute the function */
// semicoln is compulsory in last

// IIFE is used to avoid polution of global scope 

// arrow IIFE function

( () => {
    console.log(`DB Connected 3`);
} )();

( (name) => {
    console.log(`DB Connected ${name}`);
} )("Ansh");
