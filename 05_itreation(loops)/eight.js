// Reduce function

const myNums = [1, 2, 3]

let TotalNum = myNums.reduce( (acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)
console.log(TotalNum);


const ShoppingCart = [
    {
        CourseName : "js course",
        price : 2999
    },
    {
        CourseName : "py course",
        price : 999
    },
    {
        CourseName : "app dev course",
        price : 5999
    },
    {
        CourseName : "data science course",
        price : 12999
    }
]

const PriceToPay = ShoppingCart.reduce( (acc, item) => {
   return acc + item.price
},0 )
console.log(PriceToPay);
