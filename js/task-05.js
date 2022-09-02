const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', newInput);

function newInput(a) {
    span.textContent = a.currentTarget.value;

    if(a.currentTarget.value === "") {
        span.textContent === "Anonymous";
    }
}