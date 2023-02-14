"use strict";

// you can always get the length of a string, just by asking .length
const firstName = "Steffen";
const len = firstName.length;

console.log(`${firstName} is ${len} characters long`);

//you can get a single character with [index-of-the-character]
const letter = firstName[0];
console.log(`The first letter of ${firstName} is ${letter}`);

//----------------------------------------------------------------------

const newName = "Albus percival Wufric Brain Dumbledore";
const leng = newName.length;
const lett = newName[2];
const lette = newName[6];
const letterr = newName[28];
const letterrr = newName[37];

//1. what is the total number of characters, including spaces?
console.log(`${newName} is ${leng} characters long`);

//2. what is the character at index 2?
console.log(`The 2 letter of ${newName} is ${lett}`);

//3. which character is at index 6?
console.log(`The 6 letter of ${newName} is ${lette}`);

//4. What is the index of the first D in Dumbledore?
console.log(`The 29 letter of ${newName} is ${letterr}`);

//5. what is the index of the last e in Dumbledore?
console.log(`The 37 letter of ${newName} is ${letterrr}`);
