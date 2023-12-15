import { postSubscription } from './api.js';
import {
  isWhitespacesOrEmpty,
  displayWarning,
  displayInfo,
  HideableElement,
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
    const responseData = await postSubscription(email);
    displayInfo(responseData.message);
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 409:
          {
            displayWarning(error.response.data.message);
          }
          break;

        default: {
        }
      }
    }
  } finally {
    loader.hide();
    subscriptionForm.reset();
  }
}
