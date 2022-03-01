// element selectors


//global variables for win/lose counters, timer, etc

// Arrays used to create blanks and letters on screen


// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  //code here

  renderBlanks()
  startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
  //code here
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  // code here
  setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  
}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array

  // Uses loop to push blanks to blankLetters array

  // Converts blankLetters array into a string and renders it on the screen
}

// Updates win count on screen and sets win count to client storage
function setWins() {
 
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
 
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists

  // If stored value doesn't exist, set counter to 0

  // If a value is retrieved from client storage set the winCounter to that value

  //Render win count to page
}

function getlosses() {

}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true


}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {

}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function

  // Convert all keys to lower case
  
  // Test if key pushed is letter

});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts

  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
