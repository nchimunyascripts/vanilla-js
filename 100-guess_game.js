/**
 * This game challenges the user to guess a secret number between 0 and 10.
 * The user is given 3 attempts to guess the correct number. After each incorrect guess,
 * the game provides feedback indicating whether the guess is too high or too low.
 * If the user guesses the correct number, they win; otherwise, after 3 attempts, they lose.
 *
 * The goal of the game is to guess the correct number in the least number of attempts.
 */

/**
 * The secret number that the user has to guess.
 * @constant {number}
 */
const SECRET_NUMBER = 6;

/**
 * Prompts the user to guess a number and provides feedback on whether the guess is too high, too low, or correct.
 * Allows the user up to 3 tries to guess the correct number.
 */
let usersAnswer = prompt("Guess a Number between 0 and 10: "); // Ask the user to guess a number

/**
 * Converts the user's answer from a string to an integer.
 * @type {number}
 */
let userAnswerToInt = parseInt(usersAnswer);

/**
 * The number of tries the user has to guess the correct number.
 * @type {number}
 */
let number_of_tries = 3; // Set the number of tries to 3

/**
 * Loops while the user still has tries left, calling the guess function each time.
 */
while (number_of_tries > 0) {
  number_of_tries--; // Decrement the number of tries left
  guess(userAnswerToInt); // Call the guess function with the user's answer
}

/**
 * Function that checks if the user's guess is correct, too high, or too low.
 * Provides feedback to the user and asks them to guess again.
 * @param {number} num - The user's current guess.
 */
function guess(num) {
  if (num === SECRET_NUMBER) {
    // Check if the user's guess is correct
    alert("You have Won!"); // Notify the user if they win
    return; // End the game if the guess is correct
  } else if (num > SECRET_NUMBER) {
    // Check if the guess is too high
    alert("Your Guess is too high, go lower"); // Prompt the user to guess lower
    num = prompt("Guess a Number between 0 and 10: "); // Ask for a new guess
    userAnswerToInt = parseInt(num); // Update the user's guess to the new input
  } else if (num < SECRET_NUMBER) {
    // Check if the guess is too low
    alert("Your Guess is too low, go higher"); // Prompt the user to guess higher
    num = prompt("Guess a Number between 0 and 10: "); // Ask for a new guess
    userAnswerToInt = parseInt(num); // Update the user's guess to the new input
  } else {
    // This part is redundant because it's covered above, but we'll leave it as a fallback
    alert("You Lose! Try again later!"); // Notify the user they lost (this shouldn't be reached)
    return; // End the game if the guess is incorrect
  }
}
