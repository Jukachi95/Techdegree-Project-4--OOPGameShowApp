/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//  Function to log phrases. The parameter for the phrase passed is the result of the game.randomPhrase() call
// Explanation: The reason ".phrase" is used, is because when a new Phrase object is created, "phrase" is the parameter
let logPhrase = (phrase)=> {console.log(phrase.phrase)}



// Declare game variable
let game;

       

// Set an event listener on the HTML button
document.getElementById('btn__reset').addEventListener('click',()=>{

    // 
    let listItems = document.querySelector('ul')


    listItems.innerHTML = ''


    

    // Once clicked, 
    // Instantiate a new Game object within the game variable
    game = new Game()

    // Call the startGame method on the newly created Game object
    game.startGame()

    // game.resetGame()
    //  

    
    let listBtn = document.querySelectorAll('.key');

    console.log(listBtn)

    // for(let i = 0; i < listBtn.length; i++){
    //     console.log(listBtn[i].className)
    // }

    // let chosen = 'chosen'
    // let wrong = 'wrong'

    for(let i = 0; i < listBtn.length; i++){
        if(listBtn[i].className.includes('chosen')){
                listBtn[i].className = clickButton[i].className.replace('chosen', " ")

        } if( listBtn[i].className.includes('wrong')){
            listBtn[i].className = clickButton[i].className.replace('wrong', " ")
        }
    }

  
})


// const randomPhrase = game.getRandomPhrase()
// const phrase = new Phrase(randomPhrase.phrase)
// phrase.addPhraseToDisplay()

// Call the methods on the game variable




// Click event listener for onscreen keyboard

// Select the main parent 
let clickButton = document.querySelectorAll('.key');

// Set the event listener to the clickButton so all the buttons that are clicked will count towards it
    
    for(let i = 0; i < clickButton.length; i++){


        clickButton[i].addEventListener('click',(e)=>{
            
            game.handleInteraction(e.target)
})

    }
    


// Query Selectors 
 let startButton = document.getElementById('game__reset')

 let keyButons = document.querySelectorAll('key')



//   game.handleInteraction(clickButton[i].innerHTML) --- initial event listener code