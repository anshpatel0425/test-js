const coding = ["js", "rb", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )
                            /*it does not retuen any value so output shows undefined */
// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.filter( (nums) => nums > 4) 
// console.log(newNum);

// another way

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (nums) => {
//     return nums > 4
// } )

// using for each loop

const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);


// complex case

const books = [
    {title : "Book One", genre : "History", publish: 1997, edition: 2001},
    {title : "Book Two", genre : "Fiction", publish: 2004, edition: 2010},
    {title : "Book Three", genre : "Non-Fiction", publish: 1987, edition: 1990},
    {title : "Book Four", genre : "Science", publish: 2005, edition: 2008},
    {title : "Book Five", genre : "Fiction", publish: 2021, edition: 2022},
    {title : "Book Six", genre : "History", publish: 1992, edition: 1999},
    {title : "Book Seven", genre : "Science", publish: 2002, edition: 2006},
    {title : "Book Eight", genre : "Non-Fiction", publish: 1988, edition: 2001},
    {title : "Book Nine", genre : "History", publish: 1954, edition: 2005},
]

let historyBook = books.filter( (bk) => {
    return bk.genre === "History"
} )
// console.log(historyBook);

let publishYear = books.filter( (bk) => {return bk.publish >= 2000} )
// console.log(publishYear);


let NewBook = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "Fiction"
} )
console.log(NewBook);
