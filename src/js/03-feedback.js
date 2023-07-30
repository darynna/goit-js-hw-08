import throttle from 'lodash.throttle';
const LS_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

form.addEventListener('input', throttle(getText, 500));

const savedMessage = localStorage.getItem(LS_KEY);
const parsedMessage = JSON.parse(savedMessage);
const formData = savedMessage ? JSON.parse(savedMessage) : {};

if (savedMessage) {
    if (parsedMessage.email !== undefined) {
        input.value = parsedMessage.email;
      }
      if (parsedMessage.message !== undefined) {
        textarea.value = parsedMessage.message;
      }
};

function getText(e) {
    const updatedFormData = { ...formData, [e.target.name]: e.target.value };
    Object.assign(formData, updatedFormData)
    localStorage.setItem(LS_KEY, JSON.stringify(formData))
};

form.addEventListener("click", onSudmit)

function onSudmit(e) {
    e.preventDefault()
    if(e.target.type !== 'submit'){
        return
    };
    console.log(parsedMessage)
    form.reset();
    localStorage.removeItem(LS_KEY)
    
}