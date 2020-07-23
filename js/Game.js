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
         let phrases = [new Phrase("You forget a thousand things everyday"), new Phrase("Avengers, Assemble"), new Phrase("Come with me if you want to live"), new Phrase("Eureka"), new Phrase("Hello World")]
         

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



    //  Replaces a heart image on the scoreboard with a 'lostHeart' image from the images folder

     removeLife(){
        
                // Select one of the heart images
                // Call it displayHeart to differentiate

                // Try selecting a single image, then try using querySelectorAll and iterating through
                // Once replaced, the second heart will then become the first, and will then have an
                // index of [0] as the previous heart is now empty, therefore that second one is the first
               
                // Using the console.log() to access the children nodes
                // was previously children[0]
                let displayHeart = document.querySelectorAll('li img')
                // console.log(displayHeart)
                
                // displayHeart.src = 'images/lostHeart.png'

                // Select the first heart img, first heart by default should be lostHeart
                // displayHeart[0].src = 'images/lostHeart.png'
                
                // 1. nextelementSibling
                
                // 2. Changed the index of i to 1, as 0 is already lostHeart
                for(let i = 1; i < displayHeart.length;i++){

                    

                    
                    if(displayHeart[i].src != 'images/lostHeart.png'){
                        displayHeart[i].src = 'images/lostHeart.png';
                    }
                }

                //  
                
                
     }

    //  
     checkForWin(){

     }

    //  
     gameOver(){

     }
 }




 
                // If the first image has a src of liveHeart.src, then change it's src 
                // If this doesnt work, loop through displayHeart children indexes

                // displayHeart.forEach((display, index)=>{

                //     if(display[index].src != 'images/lostHeart.png' ){
                //         display[index].src = 'images/lostHeart.png'
                //     }
                // })