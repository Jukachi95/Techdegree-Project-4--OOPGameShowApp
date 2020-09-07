/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



// Declare game variable
let game;

       

// Set an event listener on the HTML button
document.getElementById('btn__reset').addEventListener('click',()=>{

    // Declare a variable that will store the ul
    let listItems = document.querySelector('ul')

    // Reset the ul items
    listItems.innerHTML = ''

    // Once clicked, 
    // Instantiate a new Game object within the game variable
    game = new Game()

    // Call the startGame method on the newly created Game object
    game.startGame()


    // Grab all the buttons with a .key class
    let listBtn = document.querySelectorAll('.key');


 
            // Loop through the buttons 
            for(let i = 0; i < listBtn.length; i++){
                
                    // If the button includes the className of chosen
                    if(listBtn[i].className.includes('chosen')){
                            // Replace chosen class name with an empty string
                            listBtn[i].className = clickButton[i].className.replace('chosen', "")

                            // Set the .disabled value to false so that it can be clicked again
                            listBtn[i].disabled = false

                        // If the button includes the className of chosen
                    } if( listBtn[i].className.includes('wrong')){
                           
                            // Replace wrong class name with an empty string 
                            listBtn[i].className = clickButton[i].className.replace('wrong', "")

                            // Set the .disabled value to false so that it can be clicked again
                            listBtn[i].disabled = false
                    }
            }

                            //  Select all the heart images
                                let displayHearts = document.querySelectorAll('li img');

                                // Loop through all the heart images and restore the .src attribute to liveHeart.png
                                for(let i = 0; i < displayHearts.length; i++){
                                    displayHearts[i].src = 'images/liveHeart.png'
                                }
  
})





// Click event listener for onscreen keyboard

// Select the parent element for the buttons
let clickButton = document.querySelectorAll('.key');


// Set the event listener to the clickButton so all the buttons that are clicked will run the handleInteraction method
    for(let i = 0; i < clickButton.length; i++){

                // Current iteration of the clickButton child (button)
                clickButton[i].addEventListener('click',(e)=>{
                    
                    // Run the handleInteraction method on the button that has been clicked
                    game.handleInteraction(e.target)
                })

    }
    


// Query Selectors 

// Start Button
 let startButton = document.getElementById('game__reset');

//  Buttons keypad
 let keyButtons = document.querySelectorAll('key');
// 
// 
// 
// 
// 
// 


















//   game.handleInteraction(clickButton[i].innerHTML) --- initial event listener code
//  Function to log phrases. The parameter for the phrase passed is the result of the game.randomPhrase() call
// // Explanation: The reason ".phrase" is used, is because when a new Phrase object is created, "phrase" is the parameter
// let logPhrase = (phrase)=> {console.log(phrase.phrase)}

   // for(let i = 0; i < listBtn.length; i++){
    //     console.log(listBtn[i].className)
    // }

    // let chosen = 'chosen'
    // let wrong = 'wrong'
