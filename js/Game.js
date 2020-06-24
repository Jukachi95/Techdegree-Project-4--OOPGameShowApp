/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

     constructor(){
            missed: 0
            phrases: this.createPhrases()
            activePhrase: null
     }

    //  Method that will create new phrases
    // Method 1: Create an array and push new items to it

     createPhrases(){
         let phrases = []

         let phrase = new Phrase(["You forget a thousand things everyday"], ["Im lovin it"])

         for(let i = 0; i < phrase.length; i++){

    
            phrases.push(phrase)
         }

         return phrases
     }

    //  

     startGame(){

     }

    //  
     getRandomPhrase(){

     }

    //  
     handleInteraction(){

    
     }

    //  
     removeLife(){

     }

    //  
     checkForWin(){

     }

    //  
     gameOver(){

     }
 }