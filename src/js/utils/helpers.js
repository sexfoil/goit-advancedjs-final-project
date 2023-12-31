import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function displaySuccess(message, title = '') {
  iziToast.success({
    title,
    message,
  });
}

function displayError(message, title = '') {
  iziToast.error({
    title,
    message,
  });
}

function displayWarning(message, title = '') {
  iziToast.warning({
    title,
    message,
  });
}

function displayInfo(message, title = '') {
  iziToast.info({
    title,
    message,
  });
}

const isWhitespacesOrEmpty = input => {
  const regexPattern = /[^ \t\r\n\v\f]/;
  return !regexPattern.test(input);
};

class HideableElement {
  constructor(element, visibleClass, hiddenClass = 'display-none-js') {
    this.elementInstance = element;
    this.visibleClass = visibleClass;
    this.hiddenClass = hiddenClass;
  }

  show() {
    this.elementInstance.classList.replace(this.hiddenClass, this.visibleClass);
  }

  hide() {
    this.elementInstance.classList.replace(this.visibleClass, this.hiddenClass);
  }

  get element() {
    return this.elementInstance;
  }
}

export {
  isWhitespacesOrEmpty,
  displaySuccess,
  displayError,
  displayWarning,
  displayInfo,
  HideableElement,
};
