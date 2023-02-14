"use strict";

//some methods take parameters, e.g. .substring( star, end )

const fullName = "peter Heronimous Lind";
const firstName = fullName.substring(0, 5);

console.log(fullName);
console.log(`First name is ${firstName}`);

//-------------------------------------------------------------

const fulname = "Albus percival Wufric Brain Dumbledore";
const namepart = fulname.substring(0, 5);
const namepart2 = fulname.substring(28);
const namepart3 = fulname.substring(15, 21);
const namepart4 = fulname.substring(14, 21);
const namepart5 = fulname.substring();
const namepart6 = fulname.substring();

//Figure out which values you need in .substring to get these results:
//1. "Albus"
console.log(namepart); // the values (0, 5)

//2. "Dumbledore" (can you do to with just one parameter?)
console.log(namepart2); // the value is (28)

//3. "Wulfric"
console.log(namepart3); // the values are (15, 21)

//4. " Wulfric"
console.log(namepart4); // the values are (14, 21)

//5 "ian"

//6 "bus"
