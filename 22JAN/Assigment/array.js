const array = [3, 6, 9, 12, 15, 18];

console.log("Original array:", array);
const shiftedElement = array.shift();
console.log("Shifted element:", shiftedElement);
console.log("Array after shift:", array);

console.log("Length of the array:", array.length);

console.log("Array as a string:", array.toString());

console.log("Element at index 2:", array.at(2));
console.log("Last element (using -1 index):", array.at(-1));

console.log("Array joined with commas:", array.join(', '));
console.log("Array joined with hyphen:", array.join('-'));

const poppedElement = array.pop();
console.log("Popped element:", poppedElement);
console.log("Array after pop:", array);

array.push(23);
console.log("Array after push(23):", array);

array.unshift(1);
console.log("Array after unshift(1):", array);

array.splice(2, 1);
console.log("Array after splice(2, 1):", array);

const slicedPart = array.slice(1, 3);
console.log("Sliced array from index 1 to 3:", slicedPart);

const extendedArray = array.concat([100, 200]);
console.log("Array after concat([100, 200]):", extendedArray);

const nestedArray = [array, [10, 20]];
const flatArray = nestedArray.flat();
console.log("Flattened array:", flatArray);

const copiedArray = array.copyWithin(1, 0, 2);
console.log("Array after copyWithin(1, 0, 2):", copiedArray);

const filledArray = new Array(4).fill(5);
console.log("Filled array with 5:", filledArray);

console.log("Array includes 4:", array.includes(4));
console.log("Array includes 10:", array.includes(10));

console.log("Index of 6:", array.indexOf(6));
console.log("Index of 10:", array.indexOf(10));

const foundElement = array.find(num => num > 5);
console.log("First element greater than 5:", foundElement);

const greaterThanFive = array.filter(num => num > 5);
console.log("Numbers greater than 5:", greaterThanFive);

const sortedArray = [...array].sort((a, b) => a - b);
console.log("Sorted array in ascending order:", sortedArray);

const reversedArray = [...array].reverse();
console.log("Reversed array:", reversedArray);

console.log("Array elements with forEach():");
array.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

const doubledArray = array.map(num => num * 2);
console.log("Doubled values:", doubledArray);

const hasEvenNumber = array.some(num => num % 2 === 0);
console.log("Array has even number:", hasEvenNumber);

const allEvenNumbers = array.every(num => num % 2 === 0);
console.log("All numbers are even:", allEvenNumbers);

const totalSum = array.reduce((accumulator, num) => accumulator + num, 0);
console.log("Total sum of elements:", totalSum);

const totalProduct = array.reduce((accumulator, num) => accumulator * num, 1);
console.log("Total product of elements:", totalProduct);
