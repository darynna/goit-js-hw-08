import throttle from 'lodash.throttle';
const LS_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

form.addEventListener('input', throttle(getText, 500, { leading: false }));

const formData = {};
function getText(e) {
    formData[e.target.name] = e.target.value;
    // console.log(formData);
    localStorage.setItem(LS_KEY, JSON.stringify(formData))
};

const savedMessage = localStorage.getItem(LS_KEY);

if (savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);
    if (parsedMessage.email !== undefined) {
        input.value = parsedMessage.email;
      }
      if (parsedMessage.message !== undefined) {
        textarea.value = parsedMessage.message;
      }
    }