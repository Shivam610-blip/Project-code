let boxes =  document.querySelectorAll(".box");
let gameInfo = document.querySelector(".game-info");
let newGame =  document.querySelector(".btn")


let currentPlayer;
let gameGrid;




const winningPositions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


function intialGame(){
  currentPlayer = "X";
  gameGrid = ["","","","","","","","",""];

  boxes.forEach((box,index)=>{
    box.innerText = ""
    box.style.pointerEvents = "all"
    box.classList = ` box box${index +1}`
     
  })
  gameInfo.innerText  = ` Current Player - ${currentPlayer}`;
  newGame.classList.remove('active')
}

intialGame()

function swap(){
  if(currentPlayer === "X"){
    currentPlayer ="0"
  }
  else{
    currentPlayer ="X"
  }
  gameInfo.innerText = ` Current Player is  - ${currentPlayer}`
}


function gameover(){

let answer = ""

winningPositions.forEach((position)=>{
  
  if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !==""  || gameGrid[position[2]] !=="" )
  && (gameGrid[position[0]] === gameGrid[position[1]] &&  gameGrid[position[1]]  === gameGrid[position[2]])){

    if(gameGrid[position[0]] === "X" ){
      answer = "X"
    }
    else{
      answer = "0"
    }

    boxes.forEach((box)=>{
      box.style.pointerEvents = "none"
    })
    
boxes[position[0]].classList.add('win')
boxes[position[1]].classList.add('win')
boxes[position[2]].classList.add('win')


  }  // if condition closed

if(answer !== ""){
  gameInfo.innerText = `  Winner is ${answer}`
  newGame.classList.add('active');
  return
}


let fillCount = 0;

gameGrid.forEach((box)=>{
  if(box !== ""){
    fillCount++
  }
})

if(fillCount === 9){
  gameInfo.innerText = ` Game tied`;
  newGame.classList.add('active')
}


})

}


 function handleClick(index){

  if(gameGrid[index] === ""){
    boxes[index].innerText = currentPlayer
    gameGrid[index] = currentPlayer
    boxes[index].style.pointerEvents = "none" 
    swap()
    gameover()
  }


 }


boxes.forEach((box,index)=>{
  box.addEventListener(('click'),()=>{
    handleClick(index)

  })
})

newGame.addEventListener(('click') ,()=>{
  intialGame()
})