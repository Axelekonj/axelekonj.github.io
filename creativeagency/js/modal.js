"use strict";

let modalScreen = document.querySelector('#modal');
let openModal = document.querySelector('.subscribe-btn');
let closeModal = modalScreen.querySelector('.modal-close');

openModal.addEventListener('click', function(evt){
   evt.preventDefault();
   modalScreen.classList.add('modal--show');
});

closeModal.addEventListener('click', function(){
   modalScreen.classList.remove('modal--show');
});

document.addEventListener('keydown', function(evt){
   if (evt.keyCode === 27) {
      modalScreen.classList.remove('modal--show');
}
});
