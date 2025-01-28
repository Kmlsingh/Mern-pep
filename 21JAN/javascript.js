// let city = "Delhi"; 
// console.log(city); 

// let country = "India"; 
// console.log(country); 

// CONST
// It cannot be re-declared
// It is block scoped
// It cannot be re-assigned

// const city = "Delhi"; 
// console.log(city);

// const cannot be re-assigned
// city = "Mumbai"; //  error

// Data types
// let city = "delhi";
let pinCode = 441122;
let isUserDefined = false;
let data = {}; // Object
let fruits = []; // Array

// Type Coercion
const city = "Delhi";
const country = "India";
const address = city + ", " + country;
console.log(address); // Delhi, India

const ans1 = 10 + 30;
console.log(ans1); 

// const ans2 = 10 + "Hello";
console.log(ans2); 

const ans3 = "Hello" + 10;
console.log(ans3); 

const ans5 = "90" - "10"; 
console.log(ans5); 

// Strict Equality (===)
const nnS = "100";
const nN = 100;
if (nnS === nN) {
    console.log("Yes");
} else {
    console.log("No");
}

// ES6 - Template Literals
const greetings1 = "Namaste!";
const ans2 = `${greetings1} ${city}, ${country}`;
console.log(ans2); // Namaste! Delhi, India

// Functions
function printDataOnScreen(likes, hearts, name) {
    const result = `${name}'s engagements on the page are ${likes + hearts}`;
    console.log(result);
}

printDataOnScreen(33, 44, "Niteesh"); // Arguments

// Block Scope & Function Scope
const greet = () => {
    var x = 10;
    console.log(x);
};

greet();

// Strict Equality check for objects
const student1 = {
    name: "Ajay",
    city: "Delhi",
};

const student2 = {
    name: "Ajay",
    city: "Delhi",
};

console.log(student1 == student2); // No, different reference

// Arrays
const arr = ["Mango", "Apple", "Papaya", "Grapes"];
arr.push("Banana"); // Add to array
console.log(arr);

console.log(Array.isArray(arr)); // true
console.log(arr.toString()); // Mango,Apple,Papaya,Grapes,Banana

// Looping through arrays and objects
for (let i of arr) {
    console.log(i); // Mango, Apple, Papaya, Grapes, Banana
}

for (let key in obj) {
    console.log(key); // calm, wild, fast, domestic
}
