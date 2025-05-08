/**
 * dataTypes.js - Demonstrates the use of different data types, variables, and reassignment in JavaScript.
 */

/**
 * Data Type Examples:
 * - String: Represents text data
 * - Number: Represents numeric values
 * - Boolean: Represents true or false
 * - Null: Represents an intentional absence of any object value
 * - Undefined: Represents a variable that has been declared but not assigned a value
 */

/**
 * Example of a string data type
 * @type {string}
 */
const name = "John"; // string

/**
 * Example of a number data type
 * @type {number}
 */
const number_of_people = 2000; // number

/**
 * Example of a floating-point number (double)
 * @type {number}
 */
const rates = 27.6; // double

/**
 * Example of a boolean data type
 * @type {boolean}
 */
const isOnSell = false; // boolean

/**
 * Example of null data type
 * @type {null}
 */
const laptop = null; // null

/**
 * Example of undefined data type
 * @type {undefined}
 */
const phone = undefined; // undefined

// Check the type of a variable using typeof
console.log(typeof number_of_people); // Outputs: number

/**
 * Variable Naming Conventions:
 * - Should have descriptive names to identify their purpose.
 * - Should not start with a number or any special sign, except for _ and $.
 */

/**
 * Example of a variable declared with var (function-scoped)
 * The value of price can be reassigned.
 * @type {number}
 */
var price = 20.5; // var allows reassignment

console.log(price); // Outputs: 20.5
price = 2.3;
console.log(price); // Outputs: 2.3

/**
 * Example of a variable declared with let (block-scoped)
 * The value of age can be reassigned.
 * @type {number}
 */
let age = 20;
age = 30;

console.log(age); // Outputs: 30

/**
 * Example of a constant declared with const (block-scoped)
 * The value of PI cannot be reassigned.
 * @type {number}
 */
const PI = 3.14; // Constant value

// Uncommenting the next line would throw an error because constants cannot be reassigned
// PI = 4.6; // Throws an error: "Assignment to constant variable."

/**
 * ===================
 * SUMMARY & NOTES
 * ===================
 *
 * - Variables in JavaScript can be declared using `var`, `let`, or `const`.
 * - `var` is function-scoped and allows reassignment.
 * - `let` is block-scoped and allows reassignment.
 * - `const` is block-scoped and does not allow reassignment (immutable).
 * - Always use descriptive variable names for clarity.
 * - Never start variable names with numbers or special characters (except _ and $).
 * - `typeof` can be used to check the data type of a variable.
 */
