import { fillExerciseModal } from './modals';

const elements = {
  closeBtn: document.querySelector('#modal-close-button'),
  overlay: document.querySelector('.overlay'),
};

function closeModal() {
  document.querySelector('.overlay').classList.add('display-none-js');

  document.removeEventListener('click', handleEscClick);

  for (let element of Object.values(elements)) {
    element.removeEventListener('click', closeModal);
  }
}

function handleEscClick(event) {
  if (event.key !== 'Escape') return;

  closeModal();
}

for (let element of Object.values(elements)) {
  element.addEventListener('click', closeModal);
}

document.addEventListener('click', handleEscClick);

fillExerciseModal('64f389465ae26083f39b17a2');
