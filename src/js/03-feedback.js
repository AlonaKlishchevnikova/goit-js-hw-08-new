import throttle from 'lodash.throttle';
const STORAG_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
GetData();
form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onSubmit);
function validate() {
    if (email.value == "") {
        alert("Вкажіть свою email адресу");
        return false;
    }
    if (message.value == "") {
        alert("Залишіть свій відгук");
        return false;
    }
}
function onForm() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAG_KEY, JSON.stringify(formData));
}
function onSubmit(e) {
    e.preventDefault();
    validate();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAG_KEY)));
  localStorage.removeItem(STORAG_KEY);
}
function GetData() {
  let data = JSON.parse(localStorage.getItem(STORAG_KEY));
  if (data !== null) {
    email.value = data.email;
    message.value = data.message;
  }
}

