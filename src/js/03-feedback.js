import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};
onFormSubmit();
form.addEventListener('submit', event => {
event.preventDefault();
const formData = new FormData(event.currentTarget);
console.log(Object.fromEntries(formData));
form.reset();
localStorage.setItem(LOCALSTORAGE_KEY, null);
});
const inputListener = event => {
formData[event.target.name] = event.target.value;
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));};
form.addEventListener('input', throttle(inputListener, 500));
function onFormSubmit() {
const formDataString = localStorage.getItem(LOCALSTORAGE_KEY);
if (formDataString) {
const existingFormData = JSON.parse(formDataString);
for (const key in existingFormData) {
if (Object.hasOwnProperty.call(existingFormData, key)) {
form.elements[key].value = existingFormData[key];
formData[key] = existingFormData[key];
}
}
}
}
  