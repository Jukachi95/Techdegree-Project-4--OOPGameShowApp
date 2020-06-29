/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
            this.phrase = phrase.toLowerCase();
     }



     // Adds placeholders to the display
     addPhraseToDisplay(){

        

        // Select the phrase
        let phraseDisplay = this.phrase;

        // Create list items that will be added to phrase 
        // ** let listItem = document.createElement('li'); **

        for(let i = 0; i < phraseDisplay.length; i++){

            // Select the ul to where the phrases will be inserted
           let ul = document.querySelector('ul')

            // Split the phrase to get individual letters
            let splitPhrase = phraseDisplay.split("")

            // If there is a space in the phrase, add the space class, if not add hidden class 
            
            if()


             let renderedList = `
             <div id="phrase" class="section">
             <li class = "letters">${phraseDisplay[i]}</li>`
             return renderedList

            

        }

        



     }

     checkLetter(){

     }


     showMatchedLetter(){
         
     }

 }