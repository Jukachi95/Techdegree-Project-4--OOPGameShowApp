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
                     let listItem = document.createElement('li'); 


                    // Select the ul to where the phrases will be inserted
                    let ul = document.querySelector('ul')

                    // Create list items that will be added to phrase 
                    //  let listItem = document.createElement('li')

                    // Split the phrase to get individual letters
                    let splitPhrase = phraseDisplay.split("")

  
                // hAVE A VARIABLE THAT WILL BE APPENDED TO +=, THAT WILL THEN BE INSERTED INTO THE DOM 
                // The variable will be empty and will be appended to ul and be made up of strings?

                let listElement = ''

                // If there is a space in the phrase, add the space class, if not add hidden class 
                

                                for(let i = 0; i < splitPhrase.length; i++){
                                    if(splitPhrase[i] == " "){
                                        // If it is a space, add the "space class"
                                        // DO setAttribute on the li, not the string
                                        listItem.setAttribute('class', 'space')
                                        listItem.innerHTML = splitPhrase[i]
                                        listElement += listItem
                                        // ul.appendChild(listItem)
                                        // Inside the listItem will be the splitPhrase[i]? 
                                        // Insert or appended?

                                    }else{
                                        // If it is a letter, add the "letter" class
                                        listItem.setAttribute('class', 'letter')
                                        listItem.innerHTML = splitPhrase[i]
                                        listElement += listItem
                                        // ul.appendChild(listItem)
                                    }
                                }

                                ul.innerHTML = listElement

                                // let rendered = `
                                
                                // <li class = "">${splitPhrase[i]}</li>`

                                

     }

     checkLetter(){

     }


     showMatchedLetter(){
         
     }

 }