const coding = ["js", "rb", "cpp"]

// coding.forEach( function (item)  {
//     console.log(item);
    
// }  )

// arrow function

coding.forEach( (val) => {
    console.log(val);
    
}  )

// interesting

function printme(val) {
    console.log(val);
    
}
coding.forEach(printme)

// *******

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
}  )

// object inside array

const myCoding = [
    {
        LanguageName : "JavaScript",
        LanguageFileName : "js"
    },
    {
        LanguageName : "Java",
        LanguageFileName : "Java"
    },
    {
        LanguageName : "Python",
        LanguageFileName : "py"
    }
]

myCoding.forEach( (item)=> {
    console.log(item.LanguageName);
    
} )