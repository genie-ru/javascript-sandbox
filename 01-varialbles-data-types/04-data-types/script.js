// String

const firstName = "Sara";
//Number
const age = 30;
const temp = 98.9;

//Boolearn
const hasKids = true;
//Null
const aptNumber = null;

//Undefined
// let test;
const score = undefined;

console.log(score);

//Symbol
const id = Symbol('id');
// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

//Reference Typpes

const numbers = [1, 2, 3, 4];
const person = {
    name: 'Brad',
};

function sayHello() {
    console.log('Hello');
}

//Arrays
const output = sayHello;

console.log(output, typeof output);
