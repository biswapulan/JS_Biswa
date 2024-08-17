const accountId = 8895980
var accountEmail = "biswa.bhai@yahoo.com"
let accountPassword = "Biswa@bhai"
accountCity = "Bhubaneswar"
let accountState

//accountId = 809344   changing const is not allowed 

accountEmail = "biswa_bhai@outlook.com"
accountPassword = "Biswa@kaiseHo"
accountCity = "Noida"

/* 
Prefer not to use var , because of issuse in block scope
*/

//console.log(accountId);
console.table([accountId , accountEmail, accountPassword , accountCity, accountState])
