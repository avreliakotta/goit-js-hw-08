import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const throttleHandler = throttle(onInput, 500);
form.addEventListener('input', throttleHandler);
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', onLoad);

const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

function onInput(event) {
  const formDate = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));
}

function onLoad() {
  const savedDate = localStorage.getItem(STORAGE_KEY);
  if (savedDate) {
    const formDate = JSON.parse(savedDate);
    emailInput.value = formDate.email;
    messageInput.value = formDate.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const formDate = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  console.log(formDate);
}
