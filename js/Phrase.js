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


                    // Select the ul to where the phrases will be inserted
                    let ul = document.querySelector('ul')

                    // Create list items that will be added to phrase 
                    //  let listItem = document.createElement('li')

                    // Split the phrase to get individual letters
                    let splitPhrase = phraseDisplay.split("")



                // If there is a space in the phrase, add the space class, if not add hidden class 
                
                                for(let i = 0; i < splitPhrase.length; i++){
                                    if(splitPhrase[i] == ""){
                                        // If it is a space, add the "space class"
                                        // DO setAttribute on the li, not the string
                                        splitPhrase[i].setAttribute('class', 'space')

                                    }else{
                                        // If it is a letter, add the "letter" class
                                        splitPhrase[i].setAttribute('class', 'letter')
                                    }
                                }


                                // let rendered = `
                                
                                // <li class = "">${splitPhrase[i]}</li>`

                                // ul.appendChild(rendered)

     }

     checkLetter(){

     }


     showMatchedLetter(){
         
     }

 }