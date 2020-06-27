/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  Function to log phrases. The parameter for the phrase passed is the result of the game.randomPhrase() call
let logPhrase = (phrase)=> {console.log(phrase.phrase)}

let game = new Game()

// When the log phrase method is used, the
logPhrase(game.getRandomPhrase())
logPhrase(game.getRandomPhrase())
logPhrase(game.getRandomPhrase())
logPhrase(game.getRandomPhrase())
logPhrase(game.getRandomPhrase())
logPhrase(game.getRandomPhrase())



 let startButton = document.getElementById('game__reset')

 let keyButons = document.querySelectorAll('key')