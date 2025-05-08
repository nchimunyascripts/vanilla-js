//declaration
function sayHello() {
  console.log("Hello World!");
}

// Invoketion
sayHello();

// parameters
function add(x, y) {
  console.log(x + y);
}

//arguments
add(10, 11);

function addTwo(x, y) {
  let result = x + y;
  return result;
}

const saySomething = () => {
  console.log("Adding two numbers");
};
saySomething();

const addFour = (x, y) => {
  return x + y;
};
console.log(addFour(100, 20));

const addDefault = (x = 10, y) => {
  return x + y;
};
console.log(addDefault(100, 20));
console.log(addDefault(100));

const x = addFour(10, 11);
console.log(x);

const addFive = (x, y) => x + y;
console.log(addFive(100, 20));
