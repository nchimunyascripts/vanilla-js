/**
 * =
 * ==
 * &&
 * ||
 * !
 * !==
 * <
 * >
 * <=
 * >=
 */
const x = 10;
const y = 5;

if (x == 10) {
  console.log("x is 10");
}

if (x === 10) {
  console.log("x is 10");
}

if (x === 10) {
  console.log("x is 10");
} else {
  console.log("x is not not 10");
}

if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is not not 10");
}

if (x > 5) {
  if (y > 10) {
    console.log("x is more than 5 or y is more than 10");
  }
}

if (x > 5 || y > 10) {
  console.log("x is more than 5 or y is more than 10");
}

if (x > 5 && y > 10) {
  console.log("x is more than 5 or y is more than 10");
}

// tenary
const result = x > 10 ? "red" : "blue";
console.log(result);

// switch
switch (result) {
  case "red":
    console.log("RED");
    break;
  case "blue":
    console.log("BLUE");
    break;
  default:
    console.log("NONE OF THE OPINIONS");
    break;
}
