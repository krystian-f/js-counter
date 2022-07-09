"use strict"
// DOM
const btnDecrease = document.querySelector('.js-counter__button--decrease');
const btnReset = document.querySelector('.js-counter__button--reset');
const btnInrease = document.querySelector('.js-counter__button--increase');
const counterDisplay = document.querySelector('.js-counter__display');

let counter = 0;

let displayCounter = function(){
  counterDisplay.innerHTML=counter;
}

let changeDisplayColor = function(color){
  counterDisplay.style.color=`${color}`;
}

let checkIfZero = function(){
  if(counter===0){
    changeDisplayColor("green");
  }
}

btnDecrease.addEventListener('click', ()=>{
  counter-=1;
  
  if(counter<0){
    changeDisplayColor('red');
  }

  checkIfZero();
  displayCounter(counter);
})

btnInrease.addEventListener('click', ()=>{
  counter+=1;

  if(counter>0){
   changeDisplayColor('black'); 
  }

  checkIfZero();
  displayCounter(counter);  
})

btnReset.addEventListener('click', ()=>{
  counter=0;
  displayCounter(counter);
  changeDisplayColor('green');
})

