/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//  Function to log phrases. The parameter for the phrase passed is the result of the game.randomPhrase() call
// Explanation: The reason ".phrase" is used, is because when a new Phrase object is created, "phrase" is the parameter
let logPhrase = (phrase)=> {console.log(phrase.phrase)}



// Declare game variable
let game;

// Set an event listener on the HTML button
document.getElementById('btn__reset').addEventListener('click',()=>{
    // Once clicked, 
    // Instantiate a new Game object within the game variable
    game = new Game()

    // Call the startGame method on the newly created Game object
    game.startGame()
})


// const randomPhrase = game.getRandomPhrase()
// const phrase = new Phrase(randomPhrase.phrase)
// phrase.addPhraseToDisplay()

// Call the methods on the game variable





// Query Selectors 
 let startButton = document.getElementById('game__reset')

 let keyButons = document.querySelectorAll('key')