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


                    // Select the ul to where the phrases will be inserted
                    let ul = document.querySelector('ul')

                    // Split the phrase to get individual letters
                    let splitPhrase = phraseDisplay.split("")

  
                
                                // Loop through the phrase that has been split...
                                // And add each item to the display
                                for(let i = 0; i < splitPhrase.length; i++){
                                    
                                    // Create the li Element inside the loop
                                    let liEl = document.createElement('li');  
                                    

                                            // If the current iteration is a space..
                                            if(splitPhrase[i] == "" || splitPhrase[i] == " "){
                                                                   
                                                        // Add the class name for space
                                                        liEl.className = 'space'

                                                        // Add the text from the index to the li element
                                                        liEl.innerHTML = `${splitPhrase[i]}`

                                                        // Append the li Element to the ul
                                                        ul.appendChild(liEl)
                                                        
                                            
                                            
                                            }else{
                                                // If it is a letter, add the "letter" class

                                                        // Add the class name for space
                                                        liEl.className = `hide letter ${splitPhrase[i]}`
                                                       
                                                       // Add the text from the index to the li element
                                                        liEl.innerHTML = `${splitPhrase[i]}`
                                                        
                                                        // Append the li Element to the ul
                                                        ul.appendChild(liEl)
                                                
                                            }
                                            
                                }
     }



    // Checks to see if the letter typed is a match in the phrase
     checkLetter(letter){

                        // If the phrase includes the letter that was passed in
                        if(this.phrase.includes(letter)){
                            console.log("true")
                        } else{
                            console.log("false")
                        }
  
     }


     // Displays the matched letter on the screen
     showMatchedLetter(letter){

        
        // -- Show the letter, by selecting it on the DOM and changing CSS Styling --
       
        // Using the DOM, select all the 'li' elements
        let li = document.querySelectorAll('li')
        
       
        // Iterate through the 'li' elements
                for(let i = 0; i < li.length; i++){

                            // Loop through all the indexes in case the letter appears more than once
                            // Check if the innerText/innerHTML value of li[i] is the same as the letter pased in to the method
                            if(li[i].innerText == letter){
                                
                                // Change the class name of the 'li' 
                                // Replace the 'hide' value, with 'show' to reveal it on the display
                                li[i].className = `show letter ${letter}`

                            }


                }      
     }

     

 }
