import { postSubscription } from './api.js';
import {
  isWhitespacesOrEmpty,
  displayWarning,
  displayInfo,
} from './utils/helpers.js';

const subscriptionForm = document.querySelector('.footer-subscribe-form');

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
          //   console.log(
          //     `postSubscription error status: ${error.response.status}.`
          //   );
        }
      }
    }
  } finally {
    subscriptionForm.reset();
  }
}
