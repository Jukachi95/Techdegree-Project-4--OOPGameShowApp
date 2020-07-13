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

                    // Create list items that will be added to phrase 
                    //  let listItem = document.createElement('li')
                    // Split the phrase to get individual letters
                    let splitPhrase = phraseDisplay.split("")

  
                // hAVE A VARIABLE THAT WILL BE APPENDED TO +=, THAT WILL THEN BE INSERTED INTO THE DOM 
                // The variable will be empty and will be appended to ul and be made up of strings?

                let listElement = ``

                // If there is a space in the phrase, add the space class, if not add hidden class 
                
               

                                for(let i = 0; i < splitPhrase.length; i++){
                                    
                                    // Create the li Element inside the loop
                                    let liEl = document.createElement('li');  
                                    


                                            if(splitPhrase[i] == ""){
                                                                   
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

                                // The listElement variable that has been storing the li's 
                                // from the loop, is now added to the ul
                                
                         

     }


    //  Checks to see if the letter typed is a match in the phrase
    // Parameter will be a etter to check
     checkLetter(){

        // Store the pressed letter in a variable
             document.addEventListener('keydown', (e)=>{

                    for(let i = 0; i < this.phrase.length; i++){

                        if(e.target == this.phrase[i]){
                            console.log("true")
                        }
            
                    }

        })

        // Check if the letter pressed matches any of the letters in the phrase
        // May need to loop through items of the phras
  
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
