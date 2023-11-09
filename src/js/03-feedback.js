import throttle from 'lodash.throttle';
import { loadFromLS } from './helpers';

const STORAGE_KEY = 'feedback-form-state';
const formData = loadFromLS(STORAGE_KEY) || {};
// console.log(typ eof formData);
const refs = {
  formLissen: document.querySelector('.feedback-form'),
};

refs.formLissen.addEventListener('input', throttle(onFormInput, 500));
refs.formLissen.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  // console.log(formData);

  // console.log(evt.target.name);
  formData[evt.target.name] = evt.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const email = refs.formLissen.elements.email.value;
  const message = refs.formLissen.elements.message.value;
  if (message && email) {
    const obj = {
      email,
      message,
    };
    console.log(obj);
    evt.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {};
  } else {
    alert('please fill out all fields of the form');
  }
}

function onLoad() {
  emailFromLS();
  messageFromLS();
}
onLoad();

function emailFromLS() {
  const arrFromLS = loadFromLS(STORAGE_KEY);
  // console.log(arrFromLS.email);
  if (arrFromLS.email) {
    refs.formLissen.elements.email.value = arrFromLS.email;
  }
}

function messageFromLS() {
  const arrFromLS = loadFromLS(STORAGE_KEY);
  // console.log(arrFromLS.message);
  if (arrFromLS.message) {
    refs.formLissen.elements.message.value = arrFromLS.message;
  }
}
//общая функция
// function nameFromLS(name) {
//   const arrFromLS = loadFromLS(STORAGE_KEY);
//   console.log(arrFromLS.name);
//   if (arrFromLS.name) {
//     refs.formLissen.elements.name.value = arrFromLS.name;
//   }
// }
