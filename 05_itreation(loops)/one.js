// for loop

// basic example

for(let i = 0; i <= 10; i++){
    let number = i;
    console.log(`number is ${number}`);
    
}

// if else in loop


// for(let i = 0; i <= 10; i++){
//     let number = i;
//     if (i == 4) {
//         console.log("4 is best number");
        
//     }
//     console.log(`number is ${number}`);
    
// }




// loop inside loop

for (let i = 0; i <= 5; i++) {
//    console.log(`Outer loop value: ${i}`);
   
    for(j = 0; j <=5; j++){
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
}

// loops on array

let myarray = ["flash", "superman", "batman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}

// important keywords : break and continue
// example

// for (let index = 0; index <=  10; index++) {
//     if (index == 4) {
//         console.log("Detected 4");
//         break
//     }
//     const element = index;
//     console.log(`value of i is ${index}`);
    
    
// }


for (let index = 0; index <=  10; index++) {
    if (index == 4) {
        console.log("Detected 4");
        continue
    }
    const element = index;
    console.log(`value of i is ${index}`);
    
    
}