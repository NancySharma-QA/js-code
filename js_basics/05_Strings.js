const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //this is not used generally in modern code writing

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') //Another way to declare String in which key value pair made like indexing of ecah letter happerns starts from 0

// console.log(gameName[0]); // O/P = h
// console.log(gameName.__proto__); // O/P = {} (returns Object)


// console.log(gameName.length); // can access methods like this
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log("Another String =",anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); //O/p = [hitesh hc com] it spilts whenever there is -

// check methods on mdn site