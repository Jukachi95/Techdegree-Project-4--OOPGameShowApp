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


                    let liEl = document.createElement('li');  


                    // Select the ul to where the phrases will be inserted
                    let ul = document.querySelector('ul')

                    // Create list items that will be added to phrase 
                    //  let listItem = document.createElement('li')
                    // Split the phrase to get individual letters
                    let splitPhrase = phraseDisplay.split("")

  
                // hAVE A VARIABLE THAT WILL BE APPENDED TO +=, THAT WILL THEN BE INSERTED INTO THE DOM 
                // The variable will be empty and will be appended to ul and be made up of strings?

                let listElement = ``

                // If there is a space in the phrase, add the space class, if not add hidden class 
                

                                for(let i = 0; i < splitPhrase.length; i++){


                                            if(splitPhrase[i] == " "){
                                                
                                                        // Add the class name for space
                                                        liEl.className = 'space'

                                                        // Add the text from the index to the li element
                                                        liEl.textContent = `${splitPhrase[i]}`

                                                        // Concatenate the li element to the empty string
                                                        listElement += liEl
                                            
                                            
                                            }else{
                                                // If it is a letter, add the "letter" class

                                                        
                                                        liEl.className = `hide letter ${splitPhrase[i]}`
                                                        liEl.textContent = `${splitPhrase[i]}`
                                                        listElement += `${liEl}`
                                            
                                                
                                            }
                                            
                                }

                                ul.innerHTML = `${listElement}`
                         

     }



     checkLetter(){

     }


     showMatchedLetter(){
         
     }

 }



  // let rendered = `
                                
                                // <li class = "">${splitPhrase[i]}</li>`




                            //*** */ Inside for loop for space***

                                 // ul.appendChild(listItem)
                                        // Inside the listItem will be the splitPhrase[i]? 
                                        // Insert or appended?
                                        // ul.appendChild(listItem)
