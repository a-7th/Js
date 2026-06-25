/*// ==========================================
// THE 7 PRIMITIVE TYPES (Stored by Value)
// ==========================================

// 1. String
const userText = 'Hello World';

// 2. Number
const PI = 3.14159;

// 3. BigInt (Note the 'n' at the end)
const massiveNumber = 9007199254740991n;

// 4. Boolean
const isActive = true;

// 5. Null (Explicitly empty)
const emptyValue = null;

// 6. Undefined (Declared but has no value assigned yet)
let calculatedResult;

// 7. Symbol (The unique memory address identifier!)
const uniqueID = Symbol('secret_key');

// ==========================================
// THE 1 OBJECT TYPE (Stored by Reference)
// ==========================================

// 8. Object (Your dictionary-style collection)
const userProfile = {
  username: 'dev_alex',
  loginCount: 5,
};

// ==========================================
// VERIFICATION (Printing types to the console)
// ==========================================

console.log('--- JAVASCRIPT DATA TYPES ---');
console.log('1. String:           ', typeof userText); // "string"
console.log('2. Number:           ', typeof PI); // "number"
console.log('3. BigInt:           ', typeof massiveNumber); // "bigint"
console.log('4. Boolean:          ', typeof isActive); // "boolean"
console.log('5. Undefined:        ', typeof calculatedResult); // "undefined"
console.log('6. Symbol:           ', typeof uniqueID); // "symbol"
console.log('7. Object:           ', typeof userProfile); // "object"

// Note: This prints "object" because of a famous 30-year-old JavaScript bug,
// but 'null' is officially a primitive type!
console.log('8. Null (JS Quirk):  ', typeof emptyValue); // "object"*/

// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

let fullName = `7th`;
let age = 25;
let isStudent = false;

document.getElementById('p1').textContent = `Your name is ${fullName}`;
document.getElementById('p2').textContent = `You are ${age} years old`;
document.getElementById('p3').textContent = `Enrolled: ${isStudent}`;
