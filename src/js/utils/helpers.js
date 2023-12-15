const isWhitespacesOrEmpty = input => {
  const regexPattern = /[^ \t\r\n\v\f]/;
  return !regexPattern.test(input);
};

function displaySuccess(message, title = '') {
  alert(message);
}

function displayError(message, title = '') {
  alert(message);
}

function displayWarning(message, title = '') {
  alert(message);
}

function displayInfo(message, title = '') {
  alert(message);
}

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
