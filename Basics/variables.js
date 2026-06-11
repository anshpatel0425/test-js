const AccountId = '0425';
let AccountName = "Ansh"
var AccountPassword = "1234"
AccountCity = "Patan" 
// not defining keyword is not best practice like above done in AccountCity
let AccountState;

// var is outdated and it has no block scope and functional scope so it is not used in modern time
// AccountId = 4625 const remain same throughout file so it's value can't be changed.


// these all the values stored in let, var can be changed.
AccountName = "Rish";
AccountPassword = "0408"
AccountCity = "Unjha"

// we can print output 1 by 1
console.log(AccountId);
console.log(AccountName);

// also we can use table to print multiple output at once.
console.table([AccountId, AccountName, AccountPassword, AccountCity,AccountState]);
