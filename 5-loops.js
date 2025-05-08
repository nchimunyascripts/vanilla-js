/**
 * loops.js - Demonstrates different looping constructs and array operations in JavaScript.
 */

/**
 * Basic for loop
 * Logs "Hello World" ten times.
 */
for (let index = 0; index < 10; index++) {
  console.log("Hello World");
}

/**
 * Array declaration
 * @type {string[]}
 */
const arr = ["Apple", "Mango", "Banana"];

/**
 * Loop through array using traditional for loop
 */
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/**
 * Loop through array using for...of loop
 * More readable than traditional for loop for arrays.
 */
for (const element of arr) {
  console.log(element);
}

/**
 * Use forEach to iterate through array
 * Executes a callback for each element.
 */
arr.forEach(function (element) {
  console.log(element);
});

/**
 * Use map() to transform each element
 * Returns a new array with all elements uppercased.
 * @returns {string[]}
 */
const upperCased = arr.map(function (element) {
  return element.toUpperCase();
});
console.log("Using map():", upperCased);

/**
 * Use filter() to select elements
 * Returns a new array that only includes "Apple".
 * @returns {string[]}
 */
const filtered = arr.filter(function (element) {
  return element === "Apple";
});
console.log("Using filter():", filtered);

/**
 * While loop from 0 to 20
 */
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

/**
 * While loop with break
 * Stops when j reaches 9
 */
let j = 0;
while (j <= 20) {
  if (j == 9) {
    break;
  }
  console.log(j);
  j++;
}

/**
 * While loop with continue
 * Skips the iteration when z is 9
 */
let z = 0;
while (z <= 20) {
  if (z == 9) {
    z++; // Required to prevent infinite loop
    continue;
  }
  console.log(z);
  z++;
}

/**
 * Do...while loop from 0 to 10
 * Executes the block at least once
 */
let l = 0;
do {
  console.log(l);
  l++;
} while (l <= 10);

/**
 * ===================
 * SUMMARY & NOTES
 * ===================
 *
 * Loop Types:
 * - for: Use when number of iterations is known.
 * - for...of: Clean syntax for iterating arrays.
 * - forEach: Executes a function on each array item (does not return anything).
 * - map(): Transforms each element, returns a new array.
 * - filter(): Selects elements based on a condition, returns a new array.
 * - while: Continues as long as the condition is true.
 * - do...while: Executes at least once, checks condition after each run.
 *
 * Notes:
 * - Use map() when you need to transform data.
 * - Use filter() when you need a subset of the data.
 * - Always increment counters properly inside while loops with continue to avoid infinite loops.
 */
