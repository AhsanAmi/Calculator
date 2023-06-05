const display = document.querySelector('input[name="display"]');
const input_display = document.querySelector('input[name="input_display"]');
const operatorButtons = document.querySelectorAll('.operator, input[value="."]');
const numButtons = document.querySelectorAll('input[type="button"]:not(.operator)');
const undoButton = document.querySelector('input[value="UN"]');

let prevValue = '';
let input_value;
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === 'AC') {
      display.value = '';
      input_display.value=' ';
    } else if (button.value === 'DE') {
        input_display.value=' ';
      display.value = display.value.slice(0, -1);
    } else if (button.value === 'UN') {
        input_display.value=' ';
        display.value= input_value;
    } else if (button.value === '=') {
        input_value=display.value;
        input_display.value= input_value;
        display.value=eval(display.value);
    } else {
      display.value += button.value;
    }
    prevValue = display.value;
  });
});

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.value;
    prevValue = display.value;
  });
});

undoButton.addEventListener('click', () => {
  display.value = prevValue;
  prevValue = display.value.slice(0, -1);
});
