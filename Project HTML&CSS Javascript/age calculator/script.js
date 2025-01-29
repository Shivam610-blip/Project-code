
var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');

// Variables For Prinitng Values

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMiliSeconds = document.getElementById('ageMiliSeconds');


datePicker.addEventListener(('change'),function(){

    let option = {year:'numeric',month:'long',day:'numeric'}
let selectedDate = new Date(this.value);
 let dob = selectedDate.toLocaleDateString('en-US',option)

choseDate.innerText = `Date is ${dob}`


let miliSeconds_Btw_DOB = Date.parse(dob);
let miliSecond_Btw_Now = Date.now();

let age_in_MiliSeconds =  miliSecond_Btw_Now - miliSeconds_Btw_DOB;

let miliSeconds = age_in_MiliSeconds ;
 let second = 1000;
 let minute = second*60;
 let hour = minute*60;
 let day = hour*24;
 let month = day*30;
 let year = day*365;


 let years = Math.round(miliSeconds/year);
 let months = years*12;
 let days = years*365;
 let hours = Math.round(miliSeconds/hour);
 let seconds = Math.round(miliSeconds/second);


 ageYear.innerHTML = years;
 ageMonth.innerHTML = months;
 ageDays.innerHTML = days;
 ageHours.innerHTML = hours;
 ageMiliSeconds.innerHTML = miliSeconds;
 ageSeconds.innerHTML = seconds

document.querySelector('.age-calc').classList.add('expand')
})