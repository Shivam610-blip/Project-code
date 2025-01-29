

let eye = document.getElementsByClassName('black-dot')
let eyesArr = Array.from(eye);


let pupilStartPoint = -100;
let pupilRange = 200;


let mouseXEndPoint = window.innerWidth;
let currentXPositon ;
let fracXValue = 0;
let mouseXRange = mouseXEndPoint ;



let mouseYEndPoint = window.innerHeight;
let currentYPositon = 0;
let fracYValue = 0



const mousemove =(event)=>{

 currentXPositon = event.clientX;
 fracXValue = currentXPositon / mouseXRange;


console.log(fracXValue,fracYValue) 
 currentYPositon = event.clientY ;
 fracYValue = currentYPositon / mouseYEndPoint;

let pupilXCRPosition = pupilStartPoint + (fracXValue * pupilRange);
let pupilYCRPostion = pupilStartPoint + (fracYValue * pupilRange);



eyesArr.forEach((curPupil)=>{

    curPupil.style.transform = `translate( ${pupilXCRPosition}px,   ${pupilYCRPostion}px)`
})



}

window.addEventListener('mousemove',mousemove);
