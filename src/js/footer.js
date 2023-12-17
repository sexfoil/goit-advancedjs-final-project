import { subscribe } from './api.js';
import {
  isWhitespacesOrEmpty,
  displayWarning,
  displayInfo,
  HideableElement,
  displayError,
} from './utils/helpers.js';

const subscriptionForm = document.querySelector('.footer-subscribe-form');
const loader = new HideableElement(
  subscriptionForm.querySelector('.input-loader'),
  'input-loader'
);

subscriptionForm.addEventListener('submit', onSubscriptionFormSubmit);

function onSubscriptionFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const email = new FormData(form).get('subscriber-email').trim();

  if (isWhitespacesOrEmpty(email)) {
    displayWarning('Email is empty');
    return;
  }

  sendSubscriptionRequest(email);
}

async function sendSubscriptionRequest(email) {
  try {
    loader.show();
    const response = await subscribe(email);
    if (response.status !== 201) {
      throw new Error(response.data.message);
    }
    displayInfo(response.data.message);
  } catch (err) {
    displayError(err.message);
  } finally {
    loader.hide();
    subscriptionForm.reset();
  }
}
