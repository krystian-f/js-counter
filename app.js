"use strict"
// DOM
const btnDecrease = document.querySelector('.js-counter-button--decrease');
const btnReset = document.querySelector('.js-counter-button--reset');
const btnInrease = document.querySelector('.js-counter-button--increase');
const counterDisplay = document.querySelector('.js-counter-wrapper__display');

let counter = 0;

let displayCounter = function(counter){
  counterDisplay.innerHTML=counter;
}

let changeDisplayColor = function(color){
  counterDisplay.style.color=`${color}`;
}

btnDecrease.addEventListener('click', ()=>{
  counter-=1;
  if(counter<=0){
    changeDisplayColor('red');
  }
  displayCounter(counter);
})

btnInrease.addEventListener('click', ()=>{
  counter+=1;
  if(counter>0){
   changeDisplayColor('black'); 
  }
  displayCounter(counter);  
})

btnReset.addEventListener('click', ()=>{
  counter=0;
  displayCounter(counter);
  changeDisplayColor('red');
})

