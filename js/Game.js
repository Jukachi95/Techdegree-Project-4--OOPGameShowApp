/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

       constructor() {
              this.missed = 0
              this.phrases = this.createPhrases()
              this.activePhrase = null
       }

       // Method that will create new phrases
       // Method 1: Create an array and push new items to it

       createPhrases() {

              // An array of new Phrase obects that will be looped through
              let phrases = [new Phrase("Yahtzee"), new Phrase("Avengers Assemble"), new Phrase("Phrasing"), new Phrase("Eureka"), new Phrase("Hello World")]


              return phrases
       }

       //  

       startGame() {

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
       getRandomPhrase() {

              // Select the phrases that will be looped through and store it in a variable
              let randomPhrase = this.phrases;

              // Use the Math.floor + Math.random methods to generate a random number 
              // based on how many phrases there are
              let randomNum = Math.floor(Math.random() * randomPhrase.length)

              // Because the randomPhrase variable is an array, the random number generated 
              // in the randomNum variable can be used as a placeholder value in the bracket notation
              return randomPhrase[randomNum]
       }



       //  Handle the interaction for the game
       handleInteraction(button) {

              // Check if the letter pressed is matched on screen

              // If the current phrase(this.activePhrase) includes a letter from the innerHTML..
              if(this.activePhrase.phrase.includes(button.innerHTML)){

                     // Give the button a class of chosen to show it is correct..
                     button.className += ' chosen'

                     // Disable the button so that it can't be clicked again
                     button.disabled = true;
                     
                     // Run the showMatchedLetter method, using the button that was pressed as an argument
                     this.activePhrase.showMatchedLetter(button.innerHTML)
                    
                     // Call the gameOver method, using the value for checkForWin()
                     // If the value is true, the 'Great Job' screen will display
                     game.gameOver(game.checkForWin())
                     

              } else if(!this.activePhrase.phrase.includes(button.innerHTML)){
                     // Give the button a class of chosen to show it is wrong..
                     button.className += ' wrong'
                     
                     // Disable the button so that it can't be clicked again
                     button.disabled = true;

                     
                     game.removeLife()
                     
              }
       }



       //  Replaces a heart image on the scoreboard with a 'lostHeart' image from the images folder

       removeLife() {

              // When the method is called, increment +1 to the 'missed' value
              this.missed += 1


              // Using the DOM to access the images that are inside the 'li' elements
              let displayHeart = document.querySelectorAll('li img')


              // Loop through the items as querySelectorAll provides a HTML Collection
              for (let i = 0; i < displayHeart.length; i++) {


                     // As this.missed has been incremented, if the value is equal to 1 on the first method call

                     if (this.missed == 1) {

                            // Then the heart image with an index of [0], will be given a different src attribute
                            displayHeart[0].src = 'images/lostHeart.png';


                     } if (this.missed == 2) {

                            // If this.missed has been incremented to reach a value of 2, when the method has been called again
                            // Then the heart image with an index of [1], will be given a different src attribute
                            displayHeart[1].src = 'images/lostHeart.png';


                     } if (this.missed == 3) {


                            // If this.missed has been incremented to reach a value of 3, when the method has been called again
                            // Then the heart image with an index of [2], will be given a different src attribute
                            displayHeart[2].src = 'images/lostHeart.png';


                     } if (this.missed == 4) {

                            // If this.missed has been incremented to reach a value of 4, when the method has been called again
                            // Then the heart image with an index of [3], will be given a different src attribute
                            displayHeart[3].src = 'images/lostHeart.png';

                     } if (this.missed == 5) {

                            // If this.missed has been incremented to reach a value of 5, when the method has been called again
                            // Then the heart image with an index of [4], will be given a different src attribute
                            displayHeart[4].src = 'images/lostHeart.png';

                            //  Once the value of 5 has been reached, the gameOver() method is called
                            let gameOverText = document.querySelector('#game-over-message')
                            let overlay = document.querySelector('#overlay')

                            gameOverText.innerHTML = 'Sorry, better luck next time!'
                            overlay.style.display = 'flex'
                            overlay.className = 'lose'
                     }


              }

              //  




       }



       //  Checks to see if the player has revealed all the letters in the activePhrase
       checkForWin() {


              // Select all of the li elements
              let displayItems = document.querySelectorAll('li.hide');
              
              if(displayItems.length > 0){
                     return false
              } else{
                     return true
              }
              
              // // Loop through the li elements
              // for(let i = 0; i < displayItems.length; i++){
                     
              //        // Check if all the list items in the loop contain the class of show
              //        if(!displayItems[i].className.includes('show')){
              //               // If all of the 'li' elements contain the class 'show', then return true
              //                      return false
              //        }
              //        // } else{
              //        //        // If all of the 'li' elements DO NOT contain the class 'show', then return false
              //        //                return true
              //        // }
              // } 

              // return true


     }




       //  If the player has used all 5 guesses and doesnt have the answer
       gameOver(gameWon) {

                     if(gameWon == true){
                            // Display the winning HTML
                            // Grab the main-container or change the current page(body)

                            let gameOverText = document.querySelector('#game-over-message')
                            let overlay = document.querySelector('#overlay')

                            gameOverText.innerHTML = 'Great Job!'
                            overlay.style.display = 'flex'
                            overlay.className = 'win'
                            

                          
                     } 

       }


       resetGame(){
              // List items for removal
              let listItems = document.querySelector('ul')


              listItems.innerHTML = ''
              
       //    Remove classes
         
              
       //        listItems.removeChild(childNodes[i])
       // listItems.remove(listItems.children)
          }

}










                // If the first image has a src of liveHeart.src, then change it's src 
                // If this doesnt work, loop through displayHeart children indexes

                // displayHeart.forEach((display, index)=>{

                //     if(display[index].src != 'images/lostHeart.png' ){
                //         display[index].src = 'images/lostHeart.png'
                //     }
                // })