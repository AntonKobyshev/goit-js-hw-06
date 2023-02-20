/* var 1
const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');
const placeholder = (event) => {
    outputName.textContent = inputName.value !== ''
        ? event.currentTarget.value
        : 'Anonymous';
};
inputName.addEventListener('input', placeholder);
*/

// var 2



document.querySelector('body').style.backgroundColor = 'grey';

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    nameRef.textContent = currentTarget.value.trim();
  } else {
    nameRef.textContent = 'Anonymous';
  }
};

inputRef.addEventListener('input', getInputValue);

// // var 3

// document.querySelector('body').style.backgroundColor = '#cfd1e1';

// const inputRef = document.querySelector('#name-input');
// const nameRef = document.querySelector('#name-output');

// const getInputValue = ({ currentTarget }) =>
//   (nameRef.innerText =
//     currentTarget.value.trim() !== ''
//       ? currentTarget.value.trim()
//       : 'Anonymous');

// inputRef.addEventListener('input', getInputValue);