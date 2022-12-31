'use strict';

let clockText = document.querySelector('.clock')
let dayNum = document.querySelector('.day--num');
let hourNum = document.querySelector('.hour--num');
let minuteNum = document.querySelector('.minute--num');
let secondNum = document.querySelector('.second--num');
let monthNum = document.querySelector('.month--num');

let startInterval = setInterval(function(){

const day = new Date();

let year = Number(2022 - day.getFullYear());
let month = Number(11 - day.getMonth());    
let date = Number(31 - day.getDate());
let hour = Number(23 - day.getHours());
let minute = Number(59 - day.getMinutes());
let second = Number(59 - day.getSeconds());

monthNum.textContent = year;

// if(date <= 0 && hour <= 0 && minute <= 0 && second <= 0){
//     clockText.textContent = "Happy New Year";
//     clockText.style.display = 'flex';
//     clockText.style.justifyContent = 'center';
//     clockText.style.alignItems = 'center';
//     clockText.style.fontSize = '3rem';
//     clockText.style.color = 'red';
//     clockText.style.transition = '1s';
//     clearInterval(startInterval);
// }
// else{
//     dayNum.textContent = date;
//     hourNum.textContent = hour;
//     minuteNum.textContent = minute;
//     secondNum.textContent = second;
// }

if(year >= 0 && month >= 0 && date >= 0 && hour >= 0 && minute >= 0 && second >= 0){
    monthNum.textContent = month < 10 ? '0' + month : month;
    dayNum.textContent = date < 10 ? '0' + date : date;
    hourNum.textContent = hour < 10 ? '0' + hour : hour;
    minuteNum.textContent = minute < 10 ? '0' + minute : minute;
    secondNum.textContent = second < 10 ? '0' + second : second;
}
else{
    clockText.textContent = "Happy New Year";
    clockText.style.display = 'flex';
    clockText.style.justifyContent = 'center';
    clockText.style.alignItems = 'center';
    clockText.style.fontSize = '3rem';
    clockText.style.color = 'red';
    clockText.style.transition = '1s';
    clearInterval(startInterval);
}

}, 1000);