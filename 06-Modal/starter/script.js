'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('test', btnCloseModal);

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
  // modal.style.display='block';
};
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
}
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
