//  Primitive (Call by value - Means when we do changes then it will happen in the copy of its referenc not in the original reference)

//  7 types : String, Number, Boolearn, null, undefined, Symbol(used to make value unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // this is treated as undefined

const id = Symbol('123')
const anotherId = Symbol('123') // Symbol is used to make vale uniques, as is and anotherId has same value but because of using sumbol they both have unique values as tested in line 15

console.log(id === anotherId); //Output = false

const bigNumber = 3456543576654356754n //on putting n in the ned - it becomes bigInt automatically



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array
let myObj = {
    name: "hitesh",
    age: 22,
}  //Object (Can be stored in variables and also we can declare it in only curly braces) key value pair

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber); // O/p = Undefined
console.log(typeof outsideTemp); // O/p = object (type of null value is return as Object)
console.log(typeof myFunction); // O/p = function (but called as object function)
console.log(typeof anotherId); // o/p = Symbol

// **NOTE: Datatypes (Typeof) for all Non primitive is returned as Object

// https://262.ecma-international.org/5.1/#sec-11.4.3