// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
// var computerChoices = ["a", "b", "c", "d", "e"];
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 27;
var ties = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesMade = document.getElementById("guesses-made");
var guessesLeftText = document.getElementById("guesses-left");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;
  var guess = document.createElement("span");
  guess.textContent = userGuess + ", ";
  guessesMade.appendChild(guess);

  // Randomly chooses a choice from the computerChoices array which is a random a-z letter. This is the Computer's guess.
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if (userGuess === computerGuess) {
    wins++;
  } else {
    guessesLeft--;
    losses++;
  }

  // Hide the directions
  directionsText.textContent = "";

  // Display the user and computer guesses, and wins/losses/ties.
  computerChoiceText.textContent =
    "The Computer Was Thinking: " + computerGuess;
  userChoiceText.textContent = "You Guessed: " + userGuess;
  winsText.textContent = "Correct Guesses: " + wins;
  lossesText.textContent = "Incorrect Guesses: " + losses;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

  if (guessesLeft == -1) {
    alert("GAME OVER!\nScore: " + wins + "\nTry Again?");
    location.reload();
  }
};
