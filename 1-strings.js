// ===== String Concatenation (Combining Strings) =====
const name = "John";
const surname = "Doe";

// Concatenation without space
const result_1 = name + surname;
console.log(result_1); // Output: JohnDoe

// Concatenation with space in between
const result_2 = name + " " + surname;
console.log(result_2); // Output: John Doe

// IMPORTANT: Concatenation can quickly become hard to manage with many variables
// → In such cases, Template Literals (below) are preferred for readability

// ===== Using Variables in Strings (Template Literals) =====
const company = "Apple";
const numberOfEmployees = 3000;

// Traditional concatenation (older method)
const details_1 =
  "The " + company + " has " + numberOfEmployees + " number of employees.";

// Template Literals using backticks (``) and ${} syntax — much cleaner!
const details_2 = `The ${company} has ${numberOfEmployees} number of employees.`;

console.log(details_1); // Output: The Apple has 3000 number of employees.
console.log(details_2); // Output: The Apple has 3000 number of employees.

// ===== String Methods and Properties =====
const sampleText = "Hello World";

// .length property → returns number of characters including spaces
console.log(sampleText.length); // Output: 11

// .toUpperCase() → converts all characters to uppercase
console.log(sampleText.toUpperCase()); // Output: HELLO WORLD

// .toLowerCase() → converts all characters to lowercase
console.log(sampleText.toLowerCase()); // Output: hello world

// .substring(start, end) → returns a portion of the string from index 0 to 2 (excluding 2)
console.log(sampleText.substring(0, 2)); // Output: He

// Chaining methods: substring + toLowerCase (commented line in your original code)
console.log(sampleText.substring(0, 2).toLowerCase()); // Output: he

// .split("") → splits string into an array of characters
console.log(sampleText.split("")); // Output: ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

// .split(" ") → splits string by space (useful for separating words)
console.log(sampleText.split(" ")); // Output: ['Hello', 'World']

// ===== Additional Useful String Methods =====

// .includes(substring) → checks if the string contains a specific substring
console.log(sampleText.includes("World")); // Output: true

// .indexOf(substring) → returns index of the first occurrence, -1 if not found
console.log(sampleText.indexOf("o")); // Output: 4

// .replace(old, new) → replaces the first occurrence of the specified substring
console.log(sampleText.replace("World", "Universe")); // Output: Hello Universe

// .trim() → removes whitespace from both ends of a string
const messy = "   JavaScript   ";
console.log(messy.trim()); // Output: JavaScript

// ===== Summary Notes for Students =====
// - Use "+" for simple concatenation, but prefer template literals for dynamic strings.
// - Explore string methods for transforming, analyzing, and cleaning string data.
// - Strings are immutable — methods return new strings; they do not change the original.
