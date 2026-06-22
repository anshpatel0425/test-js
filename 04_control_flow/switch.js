// syntax of switch statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// example of switch statement

const month = 3

switch (month){
    case 1: 
    console.log("Jan");
    break;
    case 2: 
    console.log("Feb");
    break;
    case 3: 
    console.log("Mar");
    break;
    case 4: 
    console.log("Apr");
    break;
    case 5: 
    console.log("May");
    break;
    case 6: 
    console.log("Jun");
    break;
    case 7: 
    console.log("Jul");
    break;
    case 8: 
    console.log("Aug");
    break;
    case 9: 
    console.log("Sep");
    break;
    case 10: 
    console.log("Oct");
    break;
    case 11: 
    console.log("Nov");
    break;
    case 12: 
    console.log("Dec");
    break;

    default:
        console.log("wrong input");
        
    break;
}

const month1 = "Fab"

switch (month1){         /*use string as a argument */
    case "Jan":
        console.log("1st month");
        break;

    case "Fab":
        console.log("2nd month");
        break;

    default:
        console.log("wrong input");
        break;
}