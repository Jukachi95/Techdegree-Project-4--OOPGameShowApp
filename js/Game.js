/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

     constructor(){
            this.missed = 0
            this.phrases = this.createPhrases()
            this.activePhrase = null
     }

    // Method that will create new phrases
    // Method 1: Create an array and push new items to it

     createPhrases(){

        // An array of new Phrase obects that will be looped through
         let phrases = [new Phrase("You forget a 1000 things everyday"), new Phrase("Avengers, Assemble"), new Phrase("Come with me if you want to live")]
         

         return phrases 
     }

    //  

     startGame(){

                // Select the overlay
                let overlay = document.getElementById('overlay');

                // Hide the overlay
                // ** If this doesnt work, try using and researching other values such as display: none **
                overlay.style.display = 'none'

                // Call the getRandomPhrase method to generate a random phrase
                let rPhrase = this.getRandomPhrase()


                // Call the addPhraseToDisplay method
                rPhrase.addPhraseToDisplay();

                // The activePhrase property should be equal to the selected phrase
                this.activePhrase = rPhrase
                
     }

    //  Gets random phrases that are created in the createPhrases method
     getRandomPhrase(){
   
             // Select the phrases that will be looped through and store it in a variable
             let randomPhrase = this.phrases;

            // Use the Math.floor + Math.random methods to generate a random number 
            // based on how many phrases there are
             let randomNum =  Math.floor(Math.random() * randomPhrase.length)

            // Because the randomPhrase variable is an array, the random number generated 
            // in the randomNum variable can be used as a placeholder value in the bracket notation
             return randomPhrase[randomNum]
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