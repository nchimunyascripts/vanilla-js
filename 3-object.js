// ===== JavaScript Objects =====
// Objects store data in key-value pairs (like dictionaries in Python)
// Use them to model real-world entities (e.g., a person, product, book)

const person = {
  firstName: "Joseph",
  lastName: "Nchimunya",
  age: 17,
  hobbies: ["apps", "sports", "books"], // Array inside an object
  address: {
    country: "Zambia",
    city: "Lusaka", // Nested object
  },
};

// Accessing properties using dot notation
console.log(person); // Full object
console.log(person.lastName); // Output: Nchimunya
console.log(person.hobbies[2]); // Output: books (3rd element in the hobbies array)
console.log(person.address.country); // Output: Zambia (accessing nested property)

// ===== Destructuring Objects =====
// Extract values from an object into variables
const {
  firstName,
  lastName,
  address: { city }, // Nested destructuring
} = person;

console.log(lastName); // Output: Nchimunya
console.log(city); // Output: Lusaka

// ===== Adding New Properties to an Object =====
person.skill = "programming"; // Dynamically add a new key-value pair
console.log(person.skill); // Output: programming
console.log(person);

// ===== More Useful Tips =====

// Accessing values using bracket notation (useful when keys are dynamic or contain spaces)
console.log(person["firstName"]); // Output: Joseph

// Checking if a key exists
console.log("age" in person); // Output: true

// Deleting a property
delete person.age;
console.log(person.age); // Output: undefined

// Looping through object keys and values
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Getting all keys and values as arrays
console.log(Object.keys(person)); // ['firstName', 'lastName', 'hobbies', 'address', 'skill']
console.log(Object.values(person)); // ['Joseph', 'Nchimunya', [...], {...}, 'programming']

// ===== Summary Notes for Students =====
// - Objects group related data using key-value pairs.
// - Dot notation is used to access properties, but bracket notation works for dynamic keys.
// - Use destructuring to extract multiple values from an object.
// - Objects can hold arrays and other objects as values.
// - You can dynamically add, update, or delete properties at any time.
