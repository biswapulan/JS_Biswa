//Dates

let myDate = new Date()
//console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
//console.log(typeof myDate)

let myCreateDate = new Date(2024, 0 , 15)
// let myCreateDate = new Date(2024, 0 , 15, 5 , 20)
// console.log(myCreateDate.toString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday : "long"
}) 




