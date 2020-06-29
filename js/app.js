/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//  Function to log phrases. The parameter for the phrase passed is the result of the game.randomPhrase() call
// Explanation: The reason ".phrase" is used, is because when a new Phrase object is created, "phrase" is the parameter
let logPhrase = (phrase)=> {console.log(phrase.phrase)}


// Instantiate new Game object
let game = new Game()

const randomPhrase = game.getRandomPhrase()
const phrase = new Phrase(randomPhrase.phrase)
phrase.addPhraseToDisplay()

// Call the methods on the game variable
game.getRandomPhrase().addPhraseToDisplay()




// Query Selectors 
 let startButton = document.getElementById('game__reset')

 let keyButons = document.querySelectorAll('key')