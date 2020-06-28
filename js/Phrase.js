/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
            this.phrase = phrase.toLowerCase();
     }


     addPhraseToDisplay(){

        // Adds placeholders to the display

        let phraseDisplay = this.phrase;

        phraseDisplay.forEach((phrase)=>{

                // get the phrase
                // split the phrase into separate divs

                let splitPhrase = phrase.split

                let displayPhrase = `
                <div id="phrase" class="section">
                      <ul>
                             <li class="hide letter h">${splitPhrase[0]}</li>
                             <li class="hide letter o">splitPhrase</li>
                            <li class="hide letter w">w</li>
                             <li class="space"> </li>
                              <li class="hide letter a">a</li>
                              <li class="hide letter r">r</li>
                             <li class="hide letter e">e</li>
                             <li class="space"> </li>
                             <li class="hide letter y">y</li>
                             <li class="hide letter o">o</li>
                              <li class="hide letter u">u</li>
                     </ul>
            </div>
                
                `

                return displayPhrase

        })





     }

     checkLetter(){

     }


     showMatchedLetter(){
         
     }

 }