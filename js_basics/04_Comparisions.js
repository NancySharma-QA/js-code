// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); Output = true, automatically it converts into number
// console.log("02" > 1); Output = true, automatically it converts into number

console.log(null > 0); //Output = false
console.log(null == 0); //Output = false
console.log(null >= 0); //Output = true

console.log(undefined == 0); //Output = false
console.log(undefined > 0); //Output = false
console.log(undefined < 0); //Output = false Avoid these above null undefined type conversions

// === it checks value strictly i.e it check values as well as data types too

console.log("2" === "2"); //Output = false