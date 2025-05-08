// ===== Arrays in JavaScript =====
// Arrays are ordered collections of elements stored in contiguous memory blocks
// Elements can be accessed by their index (starting from 0)

const students = ["Paul", "John", "Alex", "Sam"]; // Initial array
console.log(students); // Output: [ 'Paul', 'John', 'Alex', 'Sam' ]

// Accessing elements by index (zero-based indexing)
console.log(students[2]); // Output: Alex (3rd element in the array)

// ===== Modifying Arrays =====

// Replace the element at index 3 (Sam → Able)
students[3] = "Able";

// .push() → Adds an element to the END of the array
students.push("Melissa"); // Now: ["Paul", "John", "Alex", "Able", "Melissa"]

// .unshift() → Adds an element to the START of the array
students.unshift("Jane"); // Now: ["Jane", "Paul", "John", "Alex", "Able", "Melissa"]

// .pop() → Removes the LAST element from the array
students.pop(); // Removes "Melissa"

// After all operations, the current array is:
console.log(students); // Output: [ 'Jane', 'Paul', 'John', 'Alex', 'Able' ]

// ===== Checking and Searching =====

// Array.isArray() → Checks whether a variable is an array
const result = Array.isArray(students);
console.log(result); // Output: true

// .indexOf() → Returns the index of the first match; returns -1 if not found
const samIndex = students.indexOf("Sam"); // Not found, returns -1
console.log(samIndex);

// ===== Additional Useful Methods =====

// .includes() → Checks if an element exists in the array
console.log(students.includes("Alex")); // Output: true

// .length → Returns the number of elements in the array
console.log(students.length); // Output: 5

// .splice(startIndex, deleteCount, newItem1, newItem2...) → Remove/add elements
// Remove 1 element at index 2 and insert "Ben"
students.splice(2, 1, "Ben"); // Replaces "John" with "Ben"
console.log(students); // Output: ['Jane', 'Paul', 'Ben', 'Alex', 'Able']

// .slice(start, end) → Extracts a portion of the array (does NOT modify original)
const subArray = students.slice(1, 4);
console.log(subArray); // Output: ['Paul', 'Ben', 'Alex']

// ===== Summary Notes for Students =====
// - Use arrays to store multiple values in one variable.
// - Arrays are zero-indexed (first element at index 0).
// - Use array methods like push, pop, unshift, shift, splice, and slice to modify them.
// - Use Array.isArray() to check type, and indexOf/includes to find items.
