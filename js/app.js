/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
 
/*---------------------------- Variables (state) ----------------------------*/

let board 
let turn  
let winner 
let tie 

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
// console.log(squareEls)
// console.log(messageEl)



/*-------------------------------- Functions --------------------------------*/

const updateBoard = () => {
   board.forEach((value, index) => {
    squareEls[index].textContent = value
   })
}

const updateMessage = () => {
    if (!winner && !tie) {
        messageEl.textContent = `${turn}'s turn`
    } else if (!winner && tie) {
        messageEl.textContent = `tie!`
    } else {
        messageEl.textContent = `${turn} wins!` 
    }
}

const render = () => {
    updateBoard()
    updateMessage()
 }

const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render()
  }

const handleClick = (event) => {
    console.log(event.target)
}



 
/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
}) 


init()