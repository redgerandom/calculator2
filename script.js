


const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Error: Division by zero';



const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.getElementById('clear');
const equalButton=document.querySelector('.equal');
const operatorButtons=document.querySelectorAll('.operator'); 


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (display.textContent === '0') {
      display.textContent = button.textContent;
    } else {
      display.textContent += button.textContent;
    }
  });
});



clearButton.addEventListener('click', () => {
  display.textContent = '0';
}
);

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (display.textContent !== '0') {
      display.textContent += button.textContent;
    }
  });
})