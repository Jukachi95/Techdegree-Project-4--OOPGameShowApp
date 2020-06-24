/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

     constructor(){
            missed: 0
            phrase: this.createPhrases()
            activePhrase: null
     }

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