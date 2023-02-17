//An arrays is a list of things (items)...
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

//Each item can be adressed with a number in square brackets - that is the index
let someLetter = letters[4];
let anotherLetter = letters[7];

console.log(letters[4]); //output e

//They can be modified!
let letters2 = ["a", "b", "c", "d", "e", "f", "g", "h"];

let newarr = letters2;
newarr[4] = "*";

console.log(letters2[4]); //output *

console.log(letters); //show all the items in the array
console.log(letters2); //also shows all the item in the array, but now "e" is replaced with "*"
